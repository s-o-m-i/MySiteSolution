import { confirmPasswordReset, createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config";
import { errorResponse, successResponse } from "./response";
import { getSingleFilteredEntity } from "./ReuseableCrudService";

class FirebaseAuthService {
  static async loginWithEmailAndPassword(email:string, password:string) {
    try {
      // Perform login as usual
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("userCredential", userCredential);
      const user = JSON.parse(JSON.stringify(userCredential.user));      
      const userData = await getSingleFilteredEntity('Users', { uid: user.uid });
      return successResponse({
        user,
        additionalData: userData, // Attach additional user data
      }, "Login successfully.");
    } catch (error:any) { // Catch clause variable type annotation must be 'any' or 'unknown' if specified.
      return errorResponse(error, error.message);
    }
  }

  static async registerWithEmailAndPassword(email: string, password: string) {
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      // stringify the response
      const responseString = JSON.stringify(response);
      return successResponse(responseString, "Account created successfully.");
    } catch (error:any) { // Catch clause variable type annotation must be 'any' or 'unknown' if specified.
      return errorResponse(error, error.message);
    }
  }

  static async onForgotPassword(email: string) {
    try {
      const response = await sendPasswordResetEmail(auth, email);
      return successResponse(response, "Reset password link sent to your email");
    } catch (error:any) { // Catch clause variable type annotation must be 'any' or 'unknown' if specified.
      return errorResponse(error, error.message);
    }
  }

  static async onResetPassword(code: string, newPassword: string) {
    try {
      const response = await confirmPasswordReset(auth, code, newPassword);
      return successResponse(response, "Password reset successfully");
    } catch (error:any) { // Catch clause variable type annotation must be 'any' or 'unknown' if specified. 
      return errorResponse(error, error.message);
    }
  }


}

export default FirebaseAuthService;

// METHODS  USAGE EXAMPLE

// import FirebaseAuthService from "@functions/FirebaseAuthService";
// const response = await FirebaseAuthService.loginWithEmailAndPassword(EMAIL, PASSWORD);
