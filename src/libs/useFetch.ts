import { useToast } from '../store/toast.context';
import { useCallback, useState } from 'react';

// Custom hook for making API requests with loading state and toasts
// eslint-disable-next-line no-unused-vars
type IUseFetch<T> = [(data?: T) => Promise<any>, boolean];

export function useFetch<T>(
  url: string,
  successMsg = '',
  errorMsg = '',
  method = 'GET',
  showToasts = true
): IUseFetch<T> {
  // State to manage loading status
  const [loading, setLoading] = useState(false);
  // Access the toast context to display messages
  const { setToast } = useToast();

  // Callback function for making API requests
  const apiCall = useCallback(async (data: any = {}) => {
    try {
      setLoading(true);
      // Make a fetch request based on the specified method
      const resp = await fetch(
        process.env.NEXT_PUBLIC_APP_URL + url,
        method === 'GET'
          ? {
              method,
              headers: {
                'Content-Type': 'application/json',
              },
            }
          : {
              method,
              body: JSON.stringify(data),
              headers: {
                'Content-Type': 'application/json',
              },
            }
      );
      // Parse the JSON response
      const respData = await resp.json();
      
      // Display a success toast if the status is 200
      if (resp.status === 200) {
        showToasts &&
          setToast({
            summary: 'Success',
            detail: successMsg,
          });
      } else {
        // Throw an error if the status is not 200
        throw new Error(respData?.error);
      }
      setLoading(false);
      return respData;
    } catch (e: any) {
      // Display an error toast if there's an exception
      showToasts &&
        setToast({
          summary: 'Error',
          detail: errorMsg || e.toString(),
          type: 'Error',
        });
      setLoading(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [apiCall, loading];
}
