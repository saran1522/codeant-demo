import { useState } from "react";
import { createContext, useContext } from "react";

const RepoContext = createContext();

export function RepoProvider({ children }) {
  const [showNavbar, setShowNavbar] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const handleShowNavbar = () => setShowNavbar((show) => !show);
  return (
    <RepoContext.Provider
      value={{
        showNavbar,
        handleShowNavbar,
        signedIn,
        setSignedIn,
        isDark,
        setIsDark,
      }}
    >
      {children}
    </RepoContext.Provider>
  );
}

export function useRepo() {
  const context = useContext(RepoContext);
  if (!context) {
    throw new Error("useRepo must be used within a RepoProvider");
  }
  return context;
}
