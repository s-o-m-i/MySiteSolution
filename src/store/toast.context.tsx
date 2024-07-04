import { createContext, useContext, useState } from 'react';

// Interface representing the structure of a Toast
export interface IToast {
  summary: string;
  detail?: string;
  type?: 'Success' | 'Error' | 'Info' | 'Warn';
}

// ToastController hook for managing toast state
const ToastController = () => {
  // State to hold the current toast
  const [toast, setToast] = useState<IToast | null>();

  // Return toast state and setToast function
  return {
    toast,
    setToast,
  };
};

// Create a context for ToastController
const ToastContext = createContext<ReturnType<typeof ToastController>>({
  // Default context value
  toast: { summary: '', detail: '', type: 'Success' },
  setToast: () => [], // Placeholder function
});

// ToastProvider component to provide toast context to its children
export const ToastProvider = ({ children }: { children: React.ReactNode | any }) => (
  <ToastContext.Provider value={ToastController()}>
    {children}
  </ToastContext.Provider>
);

// Custom hook for using the toast context
export const useToast = () => useContext(ToastContext);
