import React from "react";
//import { RiArrowDownSLine } from "react-icons/ri";

const RequestServiceForm = () => {
  return (
    <form className="space-y-5 py-5">
      <input
        className="bg-secondary/10  p-5 w-full rounded-md placeholder:text-sm pl-5 outline-none placeholder:text-primary"
        placeholder="Budget(Optional)"
        type="number"
      />
      <div className="flex bg-secondary/10 items-center pr-5 ">
        <select
          className="bg-transparent  p-5  w-full placeholder:text-sm  placeholder:text-primary pl-5 outline-none"
          placeholder="Password"
          type="password"
        >
          <option>Category</option>
        </select>
      </div>
      <textarea
        className="w-full p-5 bg-secondary/10 rounded-md"
        placeholder="Service Description "
      ></textarea>

      <button className="btn-primary  text-sm">Post Request </button>
    </form>
  );
};

export default RequestServiceForm;
