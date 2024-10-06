"use client";
import React, { useContext } from "react";
import { ContextProviderApp } from "@/context/context";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function Login() {
  const context = useContext(ContextProviderApp);

  if (!context) {
    throw new Error("MyComponent must be used within a ContextProviderApp");
  }
  const {
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    error,
    setError,
  } = context;

  const handleSubmit = (e) => {
    if (password !== confirmPassword) {
      setError("Passwords Not Matched");
    } else {
      setError("");
    }
  };

  return (
    <section className="my-20">
      <Card className="w-full max-w-[350px] mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email ID"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="Enter your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              {error && <p className="text-red-700 text-sm ">{error}</p>}
            </div>
            <div className="mt-10 text-center">
              <Button type="submit" variant="outline">
                Submit
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}

export default Login;
