import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    avatar: "",
    bio: "",
    healthRecord: {},
    canYouDrive: false,
    doYouSmoke: false,
    long: "",
    lat: "",
    dateOfBirth: "",
    role: "",
    loggedIn: false,
  });
  return <AppContext.Provider value={{ userData, setUserData }}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
