"use client";

import { SessionProvider } from "next-auth/react";
import React, { createContext, useContext, useState } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  setUser: React.Dispatch<React.SetStateAction<any>>;
  setLoading: React.Dispatch<React.SetStateAction<any>>;
}

const Context = createContext<AuthContextType | undefined>(undefined);

const AuthContext = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  return (
    <Context value={{ user, loading, setUser, setLoading }}>
      <SessionProvider>{children}</SessionProvider>
    </Context>
  );
};

export const useAuth = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthContext;
