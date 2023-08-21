import React, { createContext, useState } from "react";
import { gitUserInterface, userType } from "./userContextTypes";

export const UserContext = createContext<userType | null>(null);

const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<gitUserInterface | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<number | undefined>(undefined);

  return (
    <UserContext.Provider value={{ user, setUser, loading, setLoading, status, setStatus }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
