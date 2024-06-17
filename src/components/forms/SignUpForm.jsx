import React from "react";
import { FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  return (
    <form className="w-full space-y-5">
      <input
        className="bg-secondary/10 p-5 w-full rounded-md placeholder:text-sm pl-5 outline-none placeholder:text-primary"
        placeholder="First name"
        type="text"
      />
      <input
        className="bg-secondary/10 p-5 w-full rounded-md placeholder:text-sm pl-5 outline-none placeholder:text-primary"
        placeholder="Second name"
        type="text"
      />
      <input
        className="bg-secondary/10 p-5 w-full rounded-md placeholder:text-sm pl-5 outline-none placeholder:text-primary"
        placeholder="email"
        type="email"
      />
      <input
        className="bg-secondary/10 p-5 w-full rounded-md placeholder:text-sm pl-5 outline-none placeholder:text-primary"
        placeholder="Phone number"
        type="number"
      />
      <div className="flex bg-secondary/10 items-center pr-5 rounded-md ">
        <input
          className="bg-transparent p-5 w-full  placeholder:text-sm  placeholder:text-primary pl-5 outline-none"
          placeholder="Password"
          type="password"
        />
        <FiEyeOff />
      </div>
      <button className="btn-primary ">
        Sign<span className="italic">up</span>
      </button>
      <div className="font-medium text-center text-sm flex gap-2 justify-center">
        Dont have an account?
        <Link to={"/"} className="text-secondary hover:underline t">
          Sign<span className="italic  ">in</span>
        </Link>
      </div>
    </form>
  );
};

export default SignUpForm;
