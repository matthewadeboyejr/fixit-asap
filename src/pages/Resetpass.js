import React from "react";
import ResetPassForm from "../components/forms/ResetPassForm";
import Logo from "../Images/Logo.png";

const Resetpass = () => {
  return (
    <section className="w-screen min-h-screen flex justify-center md:items-center bg-light ">
      <div className="flex flex-col items-center md:w-1/3 w-full space-y-8 py-20 px-5 md:px-14">
        <img src={Logo} className="w-36 h-auto " alt="logo" />
        <h1 className="text-2xl tracking-wider font-semibold ">
          Reset<span className="italic">Password </span>
        </h1>
        <p className=" font-medium text-sm">
          Enter your email address to get instructions for resetting your
          password.
        </p>
        <div className="border-b-2 w-20 border-b-secondary"></div>
        <ResetPassForm />
      </div>
    </section>
  );
};

export default Resetpass;
