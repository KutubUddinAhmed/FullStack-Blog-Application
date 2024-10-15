"use client";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Only run on the client side
    const userdetails = JSON.parse(localStorage.getItem("admin"));

    if (userdetails) {
      setToken(userdetails.token);
    }
  }, []);

  // Token is now available for use in client-side code
  return (
    <div>
      {token ? <h1>Welcome to the Admin Dashboard</h1> : <h1>Unauthorized</h1>}
    </div>
  );
}
