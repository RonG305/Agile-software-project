/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { Navigate } from "react-router-dom";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [navigate, setNavigate] = useState(false);

  const submit = async (e) => {
    e.preventDefault();

    // await fetch("http://localhost:8000/api/login", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/type" },
    //   credentials: "include",
    //   body: JSON.stringify({
    //     email,
    //     password,
    //   }),
    // });

    console.log({
      email,
      password,
    });
    setNavigate(true);
  };

  if (navigate) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex flex-col items-center justify-center px-6 lg:h-screen lg:gap-y-12">
      <a href="/" className="my-6 flex items-center gap-x-1 lg:my-0">
        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
          Rental Management System
        </span>
      </a>
      <Card
        horizontal
        imgSrc="/images/authentication/login.jpg"
        className="w-full md:max-w-[1024px] md:[&>*]:w-full md:[&>*]:p-16 [&>img]:hidden md:[&>img]:w-96 md:[&>img]:p-0 lg:[&>img]:block"
      >
        <h1 className="mb-3 text-2xl font-bold dark:text-white md:text-3xl">
          Sign in
        </h1>
        <form action="" onSubmit={submit}>
          <div className="mb-4 flex flex-col gap-y-3">
            <Label htmlFor="email">Email</Label>
            <TextInput
              id="email"
              name="email"
              placeholder="youremail@company.com"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 flex flex-col gap-y-3">
            <Label htmlFor="password">Password</Label>
            <TextInput
              id="password"
              name="password"
              placeholder="••••••••"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-x-3">
              <Checkbox id="rememberMe" name="rememberMe" />
              <Label htmlFor="rememberMe">Remember me</Label>
            </div>
            <a
              href="#"
              className="w-1/2 text-right text-sm text-primary-600 dark:text-primary-300"
            >
              Forgot Password?
            </a>
          </div>
          <div className="mb-6">
            <Button className="w-full lg:w-auto" type="submit">
              Login
            </Button>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Don't have an account?&nbsp;
            <a
              href="/authentication/sign-up"
              className="text-primary-600 dark:text-primary-300"
            >
              Create account
            </a>
          </p>
        </form>
      </Card>
    </div>
  );
};

export default LoginPage;
