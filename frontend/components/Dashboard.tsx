"use client";
import React, { useContext, useEffect } from "react";
import { ContextProviderApp } from "@/context/context";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie'



function Dashboard() {
const context = useContext(ContextProviderApp);
const router = useRouter();


  if (!context) {
    throw new Error("Admin component must be used within a ContextProviderApp");
  }

  const { userLogin, setUserLogin } = context;

  // This useEffect will run after the component mounts
  useEffect(() => {
    const storedData = Cookies.get("admin");
    if (storedData) {
      setUserLogin(JSON.parse(storedData));
    }
  }, [setUserLogin]); // Adding router as a dependency to ensure it's mounted

  function logout() {
    // Perform logout actions
    document.cookie = "admin=; path=/;";
    setUserLogin({ logedinUser: "", token: "", is_logedin: false });
    router.push('/login');
}

  return (
    <section>
      <h1>{userLogin.logedinUser ? `Admin: ${userLogin.logedinUser}`: "Guest"}</h1>
      <button onClick={logout}>Log out</button>
    </section>
  );
}

export default Dashboard;
