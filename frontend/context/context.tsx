"use client";
import { createContext, ReactNode, useState, Dispatch, SetStateAction } from 'react';

// Define the type for loginInfo
interface LoginInfo {
  email: string;
  password: string;
}

interface LoginInUser {
  logedinUser: string,
  token: string,
  is_logedin: boolean
}

// Define the type for the context value
interface ContextValueType {
  loginInfo: LoginInfo; // State for login information  
  setLoginInfo: Dispatch<SetStateAction<LoginInfo>>; // Setter for loginInfo
  userLogin: LoginInUser;
  setUserLogin: Dispatch<SetStateAction<LoginInUser>>;
  selectedSideBarOption: String;
  setSelectedSideBarOption: Dispatch<SetStateAction<String>>;

}

// Define the type for the props of the Context component
interface ContextProps {
  children: ReactNode;
}

// Create the context with the defined type
export const ContextProviderApp = createContext<ContextValueType | null>(null);

function Context({ children }: ContextProps) {
  // State for loginInfo, which now includes email, password, and confirmPassword
  const [loginInfo, setLoginInfo] = useState<LoginInfo>({
    email: "",
    password: "",
  });

  // Admin verification
  const [userLogin, setUserLogin] = useState<LoginInUser>({
    logedinUser: "",
    token: "",
    is_logedin: false
  })

  // Sidebar option selector

  const [selectedSideBarOption, setSelectedSideBarOption] = useState<String>("")

  return (
    <ContextProviderApp.Provider value={{ loginInfo, setLoginInfo, userLogin, setUserLogin, selectedSideBarOption, setSelectedSideBarOption  }}>
      {children}
    </ContextProviderApp.Provider>
  );
}

export default Context;

