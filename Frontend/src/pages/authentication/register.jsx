// import React from 'react'
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { Navigate } from "react-router-dom";

export const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [navigate, setNavigate] = useState(false);

  const submit = async (e) => {
    e.preventDefault();

    // await fetch('http://localhost:8000/api/register', {
    //   method:' POST',
    //   headers: {'Content-Type': 'application/type'},
    //   body: JSON.stringify({
    //     name, email, password
    //   })
    // })

    console.log({
      name,
      email,
      password,
    });
    setNavigate(true);
  };

  if (navigate) {
    return <Navigate to="/authentication/sign-in" />;
  }

  return (
    <div className="flex flex-col items-center justify-center px-6 lg:h-screen lg:gap-y-12">
      <Card
        horizontal
        imgSrc="/images/authentication/signup.jpg"
        className="w-full md:max-w-[1024px] md:[&>*]:w-full md:[&>*]:p-16 [&>img]:hidden md:[&>img]:w-96 md:[&>img]:p-0 lg:[&>img]:block"
      >
        <h1 className="mb-3 text-2xl font-bold dark:text-white md:text-3xl">
          Create an account
        </h1>
        <form action="" onSubmit={submit}>
          <div className="mb-4 flex flex-col gap-y-3">
            <Label htmlFor="username">Username</Label>
            <TextInput
              id="username"
              name="username"
              placeholder="Username"
              type="text"
              onChange={(e) => setName(e.target.value)}
              required
            />
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
            <div className="grid grid-cols-2 gap-3">
              <div className="mb-4 flex flex-col gap-y-3 mx-3">
                <Label htmlFor="password">Password</Label>
                <TextInput
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-4 flex flex-col gap-y-3">
                <Label htmlFor="password">Confirm Password</Label>
                <TextInput
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="mb-4 flex items-center gap-x-3">
            <Checkbox id="acceptTerms" name="acceptTerms" />
            <Label htmlFor="acceptTerms">
              I accept the&nbsp;{" "}
              <a href="" className="text-primary-700 dark:text-primary-200">
                Terms and Conditions
              </a>
            </Label>
          </div>
          <div className="mb-7">
            <Button type="submit" className="w-full lg:w-auto">
              Create account
            </Button>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Already have an account?&nbsp;
            <a
              href="/authentication/sign-in"
              className="text-primary-600 dark:text-primary-200"
            >
              Login here
            </a>
          </p>
        </form>
      </Card>
    </div>
  );
};

export default RegisterPage;
