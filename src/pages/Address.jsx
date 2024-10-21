import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import AddressForm from "../components/forms/AddressForm";
import { useNavigate } from "react-router-dom";

const Address = () => {
  const navigate = useNavigate();

  return (
    <section className="w-screen min-h-screen flex justify-center md:items-center bg-light ">
      <div className="flex flex-col items-center md:w-1/3 w-full space-y-3 py-20 px-5 md:px-14">
        <div className="">
          <IoIosArrowRoundBack
            onClick={() => navigate(-1)}
            className="text-4xl font-black"
          />
          <h1 className="text-2xl tracking-wider font-semibold ">
            Add your<span className="italic"> address </span>
          </h1>
          <p className="text-sm">
            The address will help the trademan know where to come
          </p>
        </div>

        <div className="border-b-2 w-20 border-b-secondary"></div>
        <AddressForm />
      </div>
    </section>
  );
};

export default Address;
