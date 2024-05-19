import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();
  return (
    <>
      {pathname !== "/" ? (
        <div className="flex justify-center items-center bg-gray-200 p-20">
          <h1 className="text-3xl">Plot Generator </h1>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Footer;
