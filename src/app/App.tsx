import React, { useEffect } from "react";
import AppRoutes from "./routes";
import { GlobalProvider } from "store/user.context";
import { ISession } from "libs/interfaces";

export default function App() {
  // Load userSession from localStorage on component mount
  const storedUserSession = JSON.parse(localStorage.getItem("userSession") ?? "null");
  const storedSelectedCompany = JSON.parse(localStorage.getItem("selectedCompany") ?? "null");
  const [userSession, setUserSession] = React.useState<ISession>(storedUserSession);
  const [selectedCompany, setSelectedCompany] = React.useState(storedSelectedCompany);

  // Save userSession to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("userSession", JSON.stringify(userSession));
    localStorage.setItem("selectedCompany", JSON.stringify(selectedCompany));
  }, [userSession, selectedCompany]);

  return (
    <GlobalProvider session={userSession} selectedCompany={selectedCompany}>
      <AppRoutes setUserSession={setUserSession} setSelectedCompany={setSelectedCompany} />
    </GlobalProvider>
  );
}
