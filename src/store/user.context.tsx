import { CompanyData, ISession } from 'libs/interfaces';
import { ReactElement, createContext, useContext } from 'react';

interface IGlobalController {
  session: ISession | any;
  selectedCompany?: CompanyData | null;
}

// GlobalController hook for managing global state
const GlobalController = ({ session, selectedCompany }: IGlobalController) => {
  // Return the provided session object
  return {
    selectedCompany,
    session,
  };
};

// Create a context for GlobalController
const GlobalContext = createContext<ReturnType<typeof GlobalController>>({
  // Default context value with null session
  selectedCompany: null,
  session: null,
});

// GlobalProvider component to provide global context to its children
export const GlobalProvider = ({
  children,
  session,
  selectedCompany,
}: {
  children: ReactElement;
  session: ISession;
  selectedCompany: CompanyData;
}) => (
  <GlobalContext.Provider value={GlobalController({ session, selectedCompany })}>
    {children}
  </GlobalContext.Provider>
);

// Custom hook for using the global context
export const useGlobal = () => useContext(GlobalContext);
