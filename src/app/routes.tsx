import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "../pages/Auth/Login/Login";
import SignUp from "../pages/Auth/SignUp/SignUp";
import PhoneLogin from "../pages/Auth/PhoneLogin/PhoneLogin";
import ForgotPassword from "pages/Auth/ForgotPassword/ForgotPassword";
import Sites from "../pages/Sites/Sites";
import SitesCards from "../pages/Sites/sites-cards/SitesCards";
import OnBoarding from "../pages/Auth/OnBoarding/OnBoarding";
import ProtectedRoute from "./ProtectedRoute";
import FieldMall from "../pages/Sites/overview/Overview";
import ResetPassword from "pages/Auth/ResetPassword/ResetPassword";
import { useGlobal } from "store/user.context";
import Profile from "pages/Profile/Profile";
import AddCompany from "pages/Profile/ProfileTabs/AddCompany/AddCompany";
import WorkPackages from "pages/WorkPackages/WorkPackages";
import WorkPackVariants from "pages/WorkPackages/WorkPackVariants/WorkPackVariants";
import WPackStructuralSteelworkInstallation from "pages/WorkPackages/WorkPackVariants/WPackStructuralSteelworkInstallation/WPackStructuralSteelworkInstallation";
import Labours from "pages/Labours/Labours";
import Announcements from "pages/Announcements/Announcements";

interface IAppRoutes {
  setUserSession: any;
  setSelectedCompany: any;
}

// Define the main component for handling all routes
export default function AllRoutes({ setUserSession, setSelectedCompany }: IAppRoutes) {
  // Get the current pathname using the useLocation hook
  const { pathname } = useLocation();

  const { session } = useGlobal();

  // Get user details from local storage or set it to null if not present
  const user = session || null;

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document!.scrollingElement!.scrollTop = 0;
  }, [pathname]);

  // Define the routes for the application
  return (
    <Routes>
      {/* Protected route for the main Sites page */}
      <Route
        path="/"
        element={
          // <ProtectedRoute isLoggedIn={user ? true : false}>
            <Sites setSelectedCompany={setSelectedCompany} />
          // </ProtectedRoute>
        }
      />

      {/* Public routes for login, register, phone login, and forgot password */}
      <Route path="/login" element={<Login setUserSession={setUserSession} />} />
      <Route path="/register" element={<SignUp setUserSession={setUserSession} />} />
      <Route path="/phone" element={<PhoneLogin />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/profile" element={<Profile setUserSession={setUserSession} setSelectedCompany={setSelectedCompany} />} />
      <Route path="/onboarding" element={<OnBoarding />} />

      {/* Protected routes for additional pages */}
      <Route
        path="/sites"
        element={
          // <ProtectedRoute isLoggedIn={user ? true : false}>
            <Sites setSelectedCompany={setSelectedCompany} />
          // {/* </ProtectedRoute> */}
        }
      />
      <Route
        path="/sites-cards"
        element={
          // <ProtectedRoute isLoggedIn={user ? true : false}>
            <SitesCards setSelectedCompany={setSelectedCompany} />
          // </ProtectedRoute>
        }
      />
      <Route
        path="/sites-overview"
        element={
          // <ProtectedRoute isLoggedIn={user ? true : false}>
            <FieldMall />
          // </ProtectedRoute>
        }
      />
      <Route
        path="/add-company"
        element={
          // <ProtectedRoute isLoggedIn={user ? true : false}>
            <AddCompany />
          // {/* </ProtectedRoute> */}
        }
      />
       <Route
        path="/work-packages"
        element={
          // <ProtectedRoute isLoggedIn={user ? true : false}>
            <WorkPackages />
          // {/* </ProtectedRoute> */}
        }
      />
       <Route
        path="/workpackages-variants"
        element={
          // <ProtectedRoute isLoggedIn={user ? true : false}>
            <WorkPackVariants />
          // {/* </ProtectedRoute> */}
        }
      />
      <Route
  path="/workpackages-StructuralSteelworkInstallation"
  element={
    // <ProtectedRoute isLoggedIn={user ? true : false}>
      <WPackStructuralSteelworkInstallation
        setUserSession={setUserSession}
        setSelectedCompany={setSelectedCompany}
      />
    // </ProtectedRoute>
  }
  
/>

<Route
        path="/labours"
        element={
          // <ProtectedRoute isLoggedIn={user ? true : false}>
            <Labours />
          // </ProtectedRoute>
        }
      />
<Route
        path="/announcements"
        element={
          // <ProtectedRoute isLoggedIn={user ? true : false}>
            <Announcements />
          // </ProtectedRoute>
        }
      />

      {/* Default route for handling 404 scenarios */}
      <Route path="*" element={<p>No page Found</p>} />
    </Routes>
  );
}
