//import axios from "axios";
import React, { useState } from "react";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    //const url = "http://localhost:9000/login";
    //const data = { email, password };

    try {
      setLoading(true);
      //const response = await axios.post(url, data);
      //console.log(response.data, "hellllllloooooo");
      navigate("/dashboard");

      setLoading(false);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-5">
      <div className="bg-red-50 hidden  p-5 w-full rounded-md placeholder:text-sm pl-5 outline-none text-red-500">
        {errorMsg}
      </div>
      <input
        className="bg-secondary/10  p-5 w-full rounded-md placeholder:text-sm pl-5 outline-none placeholder:text-primary"
        value={email}
        onChange={(e) => {
          setEmail(e.target.email);
        }}
        placeholder="Email"
        type="email"
        required
      />

      <div className="flex bg-secondary/10 items-center pr-5 rounded-md">
        <input
          className="bg-transparent  p-5 w-full  placeholder:text-sm  placeholder:text-primary pl-5 outline-none"
          value={password}
          autoCorrect="off"
          onChange={(e) => {
            setPassword(e.target.password);
          }}
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          required
        />
        <div
          className="hover:cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FiEyeOff /> : <FiEye />}
        </div>
      </div>
      <div className="flex justify-end opacity-85 hover:underline font-medium pb-3 text-sm">
        <Link to={"/reset-password"} className="">
          Forget Password
        </Link>
      </div>
      <button className="btn-primary ">
        Log<span className="italic">in</span>
      </button>

      <div className="font-medium text-center text-sm flex gap-2 justify-center">
        Dont have an account?
        <Link to={"/signup"} className="text-secondary hover:underline t">
          Sign<span className="italic  ">up</span>
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
