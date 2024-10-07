"use client";
import { createContext, ReactNode, useState, Dispatch, SetStateAction } from 'react';

// Define the type for loginInfo
interface LoginInfo {
  email: string;
  password: string;
  confirmPassword: string;
}

interface LoginInUser {
  logedinUser: string,
  token: string,
  is_logedin: boolean
}

// Define the type for the context value
interface ContextValueType {
  loginInfo: LoginInfo; // State for login information  
  userLogin: LoginInUser;
  setLoginInfo: Dispatch<SetStateAction<LoginInfo>>; // Setter for loginInfo
  setUserLogin: Dispatch<SetStateAction<LoginInUser>>;
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
    confirmPassword: "",
  });

  const [userLogin, setUserLogin] = useState<LoginInUser>({
    logedinUser: "",
    token: "",
    is_logedin: false
  })

  return (
    <ContextProviderApp.Provider value={{ loginInfo, setLoginInfo, userLogin, setUserLogin  }}>
      {children}
    </ContextProviderApp.Provider>
  );
}

export default Context;
