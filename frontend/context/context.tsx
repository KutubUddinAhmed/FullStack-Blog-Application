"use client";
import { createContext, ReactNode, useState, Dispatch, SetStateAction } from 'react';

// Define the type for the context value
interface ContextValueType {
  message: string;
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>; // Type for the state setter
}

// Define the type for the props of the Context component
interface ContextProps {
  children: ReactNode; // ReactNode to allow children elements
}

// Create the context with the defined type
export const ContextProviderApp = createContext<ContextValueType | null>(null);

function Context({ children }: ContextProps) {
  const message: string = "Rafiq";
  const [toggle, setToggle] = useState<boolean>(true); // Ensure toggle is typed as boolean

  return (
    <ContextProviderApp.Provider value={{ message, toggle, setToggle }}>
      {children}
    </ContextProviderApp.Provider>
  );
}

export default Context;
