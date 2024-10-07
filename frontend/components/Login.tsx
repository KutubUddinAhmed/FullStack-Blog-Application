"use client";
import React, { useContext } from "react";
import { ContextProviderApp } from "@/context/context";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToastContainer } from "react-toastify";
import { handleSucess, handleError } from '@/utils/utils.js';
import { useRouter } from "next/navigation";

function Login() {
  const router = useRouter();
  const url = "http://localhost:4000/login";

  const context = useContext(ContextProviderApp);

  if (!context) {
    throw new Error("MyComponent must be used within a ContextProviderApp");
  }
  const { loginInfo, setLoginInfo } = context;
  const { email, password, confirmPassword } = loginInfo;

  function handleChangeEvent(e: any) {
    const { name, value } = e.target;
    setLoginInfo(prev => ({
      ...prev,
      [name]: value
    }));
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return handleError("Password not matched");
    }
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const result = await response.json();
      const { success, msgs, error, jwt_token, name, is_login } = result;

       const  userDetails = {
        "logedinUser": name,
        "token": jwt_token,
        "is_login": is_login,
      }

      if (success) {
        handleSucess(msgs);
        localStorage.setItem("admin", JSON.stringify(userDetails))
        setTimeout(() => {router.push('/admin')}, 1000)
      } else if (error) {
        const details = error?.details[0].message;
        handleError(details);
      } else if (!success) {
        handleError(msgs);
      }

    } catch (error) {
      return handleError(error);
    }

    setLoginInfo({ email: "", password: "", confirmPassword: "" });
  };

  return (
    <section className="my-20">
      <Card className="w-full max-w-[350px] mx-auto shadow-lg shadow-cyan-900">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  onChange={handleChangeEvent}
                  id="email"
                  type="email"
                  name="email"
                  autoComplete="username"
                  value={email}
                  placeholder="Enter your email ID"
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={handleChangeEvent}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="Enter your password"
                  name="confirmPassword"
                  autoComplete="new-password"
                  value={confirmPassword}
                  onChange={handleChangeEvent}
                />
              </div>
            </div>
            <div className="mt-10 text-center">
              <Button type="submit" variant="outline">
                Submit
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
      <ToastContainer />
    </section>
  );
}


export default Login;