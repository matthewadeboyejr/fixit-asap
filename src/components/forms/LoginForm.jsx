import React from "react";
import { FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  return (
    <form
      onSubmit={() => {
        navigate("/dashboard");
      }}
      className="w-full space-y-5"
    >
      <input
        className="bg-secondary/10  p-5 w-full rounded-md placeholder:text-sm pl-5 outline-none placeholder:text-primary"
        placeholder="Email"
        type="email"
      />

      <div className="flex bg-secondary/10 items-center pr-5 rounded-md">
        <input
          className="bg-transparent  p-5 w-full  placeholder:text-sm  placeholder:text-primary pl-5 outline-none"
          placeholder="Password"
          type="password"
        />
        <FiEyeOff />
      </div>
      <div className="flex justify-end opacity-85 hover:underline font-medium pb-3 text-sm">
        <Link className="">Forget Password</Link>
      </div>
      <button className="btn-primary ">
        Log<span className="italic">in</span>
      </button>

      <div className="font-medium text-center text-sm">
        Have an account?
        <Link to={"/signup"} className="text-secondary hover:underline t">
          Sign<span className="italic  ">up</span>
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
