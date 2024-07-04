import { collection, doc, addDoc, getDocs, updateDoc, deleteDoc, setDoc, getDoc, where, query } from "firebase/firestore";
import FirebaseAuthService from "./FirebaseAuthService";
import { fireStoreDB } from "config";
import { errorResponse, successResponse } from "./response";

// Create a new entity
export const createEntity = async (entityPath: string, entityData: any) => {
  // Check if the entityData has email and password, indicating user registration
  if (entityData.email && entityData.password) {
    // Register the user with Firebase Authentication service
    const userCredential: any = await FirebaseAuthService.registerWithEmailAndPassword(entityData.email, entityData.password);

    // Parse user data from the response
    const user = JSON.parse(userCredential.data).user;
    const userUid = user.uid;

    // Set the user entity in Firestore with additional data
    const entityRef = doc(fireStoreDB, entityPath, userUid);
    await setDoc(entityRef, {
      ...entityData,
      uid: userUid
    });

    return userUid; // Return the user UID
  }

  // For regular entities, create a new entity and return its reference
  const entityCollection = collection(fireStoreDB, entityPath);
  const newEntityRef = await addDoc(entityCollection, entityData);

  return newEntityRef;
};

// Get all entities of a specific type
export const getAllEntities = async (entityPath: string) => {
  const entityCollection = collection(fireStoreDB, entityPath);
  const entitiesSnapshot = await getDocs(entityCollection);

  const entities: any[] = [];
  // Iterate over the snapshot and collect entities with their IDs
  entitiesSnapshot.forEach((entityDoc) => {
    entities.push({ id: entityDoc.id, ...entityDoc.data() });
  });

  return entities;
};

// Get an entity by ID
export const getEntityById = async (entityPath: string, entityId: string) => {
  const entityRef = doc(fireStoreDB, entityPath, entityId);
  const entityDoc = await getDoc(entityRef);

  if (entityDoc.exists()) {
    return entityDoc.data();
  } else {
    return null;
  }
};

// Get all entities of a specific type with optional filtering
export const getAllFilteredEntities = async (entityPath: string, filter?: { [key: string]: any }) => {
  const entityCollection = collection(fireStoreDB, entityPath);

  // If a filter is provided, create a query based on the filter
  let firestoreQuery = query(entityCollection); // Use the query function to create an initial Query

  if (filter) {
    Object.entries(filter).forEach(([field, value]) => {
      firestoreQuery = query(firestoreQuery, where(field, "==", value)); // Use query on the Query
    });
  }

  const entitiesSnapshot = await getDocs(firestoreQuery);

  const entities: any[] = [];
  // Iterate over the snapshot and collect entities with their IDs
  entitiesSnapshot.forEach((entityDoc) => {
    entities.push({ id: entityDoc.id, ...entityDoc.data() });
  });

  return entities;
};

// Usage ==> const filteredUsers = await getAllFilteredEntities('Users', { email: 'nasirbaloch.dev@gmail.com' });

// Get a single entity of a specific type with optional filtering
export const getSingleFilteredEntity = async (entityPath: string, filter?: { [key: string]: any }) => {
  const entityCollection = collection(fireStoreDB, entityPath);

  // If a filter is provided, create a query based on the filter
  const firestoreQuery = filter
    ? query(entityCollection, ...Object.entries(filter).map(([field, value]) => where(field, "==", value)))
    : entityCollection;

  const entitiesSnapshot = await getDocs(firestoreQuery);

  if (entitiesSnapshot.empty) {
    return null; // Return null if no matching records are found
  }

  const entityDoc = entitiesSnapshot.docs[0];
  return { id: entityDoc.id, ...entityDoc.data() };
};

// Usage ==> const filteredUser = await getSingleFilteredEntity('Users', { email: 'nasirbaloch.dev@gmail.com' });

// Update an entity by ID
export const updateEntity = async (entityPath: string, entityId: string, entityData: any) => {
  try {
    const entityRef = doc(fireStoreDB, entityPath, entityId);
    await updateDoc(entityRef, entityData);
    return successResponse(entityData, "Record Updated Successfully.");
  } catch (err) {
    return errorResponse(err, "An error occurred while updating record.");
  }
};

// Delete an entity by ID
export const deleteEntity = async (entityPath: string, entityId: string) => {
  const entityRef = doc(fireStoreDB, entityPath, entityId);
  await deleteDoc(entityRef);
  return true; // Return true to indicate successful deletion
};
