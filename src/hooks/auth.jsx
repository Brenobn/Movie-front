import { createContext, useContext } from "react";

import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  return (
    <AuthContext.Provider value={{ email: "brenobragabn@gmil.com" }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
