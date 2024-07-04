export interface ITableProps {
  columns: any[];
  data: any[];
  // eslint-disable-next-line no-unused-vars
  onEditClick: (item: any) => void;
  // eslint-disable-next-line no-unused-vars
  onDeleteClick: (item: any) => void;
}

export interface ITableColumn {
  key: string;
  label: string;
}

export interface ICreateUpdateRoleProps {
  getAllRolesFtn: () => void;
  role?: IRoles;
  handleClearClick?: () => void;
}

export interface IRoles {
  id: string;
  name: string;
}

export interface ProjectFormData {
  name?: string;
  location?: string;
  description?: string;
  startDate?: string;
  endDate?: string;
  status?: string;
  clientName?: string;
  clientContact?: string;
  clientAddress?: string;
}

export interface ICreateUpdateSiteProps {
  getAllUsersFtn?: any;
  user?: any;
  handleClearClick?: any;
}

export interface SiteFormData {
  name?: string;
  location?: string;
  contact?: string;
  email?: string;
  description?: string;
  siteParkingArrangments?: string;
  siteInductionTime?: string;
  workStartDate?: string;
  estimatedEndDate?: string;
}

export interface ICreateUpdateGenralProps {
  getAllUsersFtn: () => void;
  selectedUser?: any;
  roles?: any;
  handleClearClick?: () => void;
}

export interface ICreateUpdateUserState {
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  address?: string;
  profession?: string;
  emergencyContact?: string;
  password?: string;
  metaDataOTP?: string;
  role?: string;
  profilePic?: string;
  CSCS?: string;
  certificateStatus?: string;
  mySite?: string;
}

export interface ICreateUpdatePackageProps {
  getAllUsersFtn: () => void;
  user: any;
  users: any;
  projects: any;
  handleClearClick?: any;
}

export interface PackageFormData {
  name?: string;
  category?: string;
  associatedProject?: string;
  size: number;
  description?: string;
  requiredLabour?: string;
  subcontractor?: string;
}

export interface ImportedUsersData {
  name: string;
  type: string;
  email: string;
  age: number;
  phone: number;
  role: string;
  workingHours: number;
}


export interface ISession {
    additionalData: {
      id?: string;
      uid: string;
      name: string;
      phone?: string;
      jobRole?: string;
      email: string;
      role?: string;
      photoURL?: string | null;
    };
    user?: {
      uid: string;
      email: string;
      emailVerified: boolean;
      displayName?: string;
      isAnonymous?: boolean;
      photoURL?: string;
      providerData: {
        providerId: string;
        uid: string;
        displayName: string;
        email: string;
        phoneNumber?: string | null;
        photoURL?: string;
      }[];
      stsTokenManager?: {
        refreshToken?: string;
        accessToken?: string;
        expirationTime?: number;
      };
      createdAt?: string;
      lastLoginAt?: string;
      apiKey?: string;
      appName?: string;
    };
  }

export interface CompanyData {
    id?: string;
    companyName: string;
    address: string;
    email: string;
    phone: string;
    photoURL: string;
    registrationNumber: string;
  }
  
export interface ISuccessResponse {
    error: boolean;
    success: boolean;
    message: string;
    data: any;
}

export interface IErrorResponse {
    error: boolean;
    success: boolean;
    message: string;
    data: any;
}