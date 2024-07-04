// reportWebVitals.js

// This function receives a callback `onPerfEntry` to report performance entries.
const reportWebVitals = onPerfEntry => {
  // Check if the callback is provided and is a function.
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Dynamically import the 'web-vitals' module to get individual performance metrics.
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Call each web-vitals function with the provided callback.
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

// Export the function as the default export.
export default reportWebVitals;
