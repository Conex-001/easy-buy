import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Try to load user from localStorage on initial render
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("easyBuyUser");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // Update localStorage whenever user changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("easyBuyUser", JSON.stringify(user));
    } else {
      localStorage.removeItem("easyBuyUser");
    }
  }, [user]);

  // Accept full user data on login (object with name, isAdmin, token, etc)
  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("easyBuyUser");
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
