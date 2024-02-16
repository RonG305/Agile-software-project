/* eslint-disable react/prop-types */
// import React from 'react'
import { Navbar } from "flowbite-react";

export const NavbarHeader = () => {

  // const logout = async() => {
    // await fetch("http://localhost:8000/api/logout", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/type" },
    //   credentials: "include",
    // });
  // }

  // let menu;

  // if (props.name === "") {
  //   menu = (
  //     <>
  //       <Navbar.Link href="/authentication/sign-in">Login</Navbar.Link>
  //       <Navbar.Link href="/authentication/sign-up">Register</Navbar.Link>
  //     </>
  //   );
  // } else {
  //   menu = <Navbar.Link href="/authentication/sign-in" onClick={logout}>Logout</Navbar.Link>;
  // }

  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Rental Management System
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {/* {menu} */}
        <Navbar.Link href="/authentication/sign-in">Login</Navbar.Link>
        <Navbar.Link href="/authentication/sign-up">Register</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarHeader;
