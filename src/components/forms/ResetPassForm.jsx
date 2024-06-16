import React from "react";
import { Link } from "react-router-dom";

const ResetPassForm = () => {
  return (
    <form className="w-full space-y-5">
      <input
        className="bg-secondary/10 p-5 w-full rounded-md placeholder:text-sm pl-5 outline-none placeholder:text-primary"
        placeholder="email"
        type="email"
      />

      <button className="btn-primary ">
        Sign<span className="italic">up</span>
      </button>
      <div className="font-medium text-center text-sm flex gap-2 justify-center">
        Return to
        <Link to={"/login"} className="text-secondary hover:underline t">
          Log<span className="italic  ">in</span>
        </Link>
      </div>
    </form>
  );
};

export default ResetPassForm;
