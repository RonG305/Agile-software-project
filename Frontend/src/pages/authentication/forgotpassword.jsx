/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";

const ForgotPassword = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 lg:h-screen lg:gap-y-12">
      <a href="#" className="my-6 flex items-center gap-x-1 lg:my-0">
        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
          Rental Management System
        </span>
      </a>
      <Card className="w-full lg:max-w-[640px] lg:[&>*]:w-full lg:[&>*]:p-16">
        <h1 className="text-2xl font-bold dark:text-white md:text-3xl">
          Forgot your password?
        </h1>
        <p className="mb-3 text-gray-500 dark:text-gray-300">
          Enter your email address associated with your account. We'll send you
          an email with instructions on how to reset your password.
        </p>
        <form action="">
          <div className="mb-6 flex-flex-col gap-y-3">
            <Label htmlFor="email">Email</Label>
            <TextInput
              id="email"
              name="email"
              placeholder="youremail@company.com"
              type="email"
            />
          </div>
          <div className="mb-6 flex items-center gap-x-3">
            <Checkbox id="acceptTerms" name="acceptTerms" />
            <Label htmlFor="acceptTerms">
              I accept the&nbsp;
              <a href="#" className="text-primary-700 dark:text-primary-300">
                Terms and Conditions
              </a>
            </Label>
          </div>
          <div>
            <Button type="submit" className="w-full lg:w-auto">
              Reset password
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default ForgotPassword;
