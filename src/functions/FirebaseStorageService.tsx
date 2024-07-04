/* eslint-disable no-async-promise-executor */
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../config";
import { errorResponse, successResponse } from "./response";

class FileUploadingService {
  // THIS WILL UPLOAD IMAGE FILE TO THE FIREBASE STORAGE AND PROVIDE YOU A FILE URL
  static uploadFile = async (userId: string, refference: string, file: any) => {
    const blob = file.slice(0, file?.size, file?.type);
    return new Promise(async (resolve, reject) => {
      try {
        const finalRefrence = refference || `tempFiles/${userId}`;
        const storageRef = ref(storage, `${finalRefrence}`);
        console.log("storageRef", {
          storageRef,
          blob,
        })
        const uploadTask = uploadBytesResumable(storageRef, blob);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            console.log(snapshot);
          },
          (error) => {
            reject(errorResponse(error, error.message));
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              const fileUrl = downloadURL;
              resolve(successResponse([{ fileUrl: fileUrl }], "Success"));
            });
          }
        );
      } catch (error) {
        reject({
          error: true,
          errorData: error,
        });
      }
    });
  };
}
export default FileUploadingService;

// METHODS  USAGE EXAMPLE

// import FileUploadingService from "@functions/FirebaseStorageService";
// const response = await FileUploadingService.uploadFile(userId, `filePath/${userId}`, file);
