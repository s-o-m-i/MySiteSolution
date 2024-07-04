// Generates a success response object with specified data and message
export const successResponse = (data: any, message: string) => {
  return {
    error: false,        // Indicates no error
    success: true,       // Indicates success
    message: message || "Success",  // Message describing the success (default: "Success")
    data: data || [],    // Additional data associated with the success (default: empty array)
  };
};

// Generates an error response object with specified error and message
export const errorResponse = (error: any, message: string) => {
  return {
    error: true,         // Indicates an error
    success: false,      // Indicates failure
    message: message || "Error",  // Message describing the error (default: "Error")
    data: error || [],        // Additional error data (default: empty array)
  };
};
