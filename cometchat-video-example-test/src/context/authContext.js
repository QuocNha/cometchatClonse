import { CometChat } from "@cometchat-pro/chat";
import { createContext, useState } from "react";
import { AUTH_KEY } from "../constants/constants";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const login = (userName) => {
    const UID = userName;

    const user = new CometChat.User(UID);
    user.setName(UID);
    CometChat.login(UID, AUTH_KEY).then((data) => {
      setUser(data);
    });
  };
  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};
