"use client";
import { createContext, ReactNode, useState, Dispatch, SetStateAction } from 'react';

// Define the type for the context value
interface ContextValueType {
  password: string;
  confirmPassword: string; 
  error: string;
  setPassword: Dispatch<SetStateAction<string>>; // Type for the state setter
  setConfirmPassword: Dispatch<SetStateAction<string>>; // Type for the state setter
  setError: Dispatch<SetStateAction<string>>; // Type for the state setter
}

// Define the type for the props of the Context component
interface ContextProps {
  children: ReactNode; // ReactNode to allow children elements
}

// Create the context with the defined type
export const ContextProviderApp = createContext<ContextValueType | null>(null);

function Context({ children }: ContextProps) {
  const [password, setPassword] = useState<string>(""); // Explicitly set the type
  const [confirmPassword, setConfirmPassword] = useState<string>(""); // Explicitly set the type
  const [error, setError] = useState<string>(""); // Explicitly set the type

  return (
    <ContextProviderApp.Provider value={{ password, setPassword, confirmPassword, setConfirmPassword, error, setError }}>
      {children}
    </ContextProviderApp.Provider>
  );
}

export default Context;
