/* eslint-disable no-undef */
// import React from 'react'

import { useEffect, useState } from "react";

export const DashboardPage = () => {

  const [name, setName] = useState("");

  useEffect(() => {
    // async () => {
    //   const response = await fetch("http://localhost:8000/api/user", {
    //     method: "GET",
    //     headers: { "Content-Type": "application/type" },
    //     credentials: "include",
    //   });
    //   const data = await response.json();
    //   setName(data.username);
    // };
    setName('')
  });
  return (
    <div>{name ? "Hello " + name : "You are not logged in"}</div>
  );
};

export default DashboardPage;
