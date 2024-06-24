//import React, { useState } from "react";
import { RiCloseFill, RiMapPinUserFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import RequestServiceForm from "../../forms/RequestServiceForm";

const RequestServiceModal = ({ open, close }) => {
  return (
    <section
      className={`${
        open ? `flex` : `hidden`
      }  bg-black/70 fixed inset-0 z-50  h-screen justify-center  md:items-center items-end   `}
    >
      <div className="bg-white p-5 rounded-t-md w-full md:w-fit   ">
        <div className="flex items-center justify-between ">
          <h4 className="text-lg font-semibold">Request service</h4>
          <p
            onClick={close}
            className="bg-primary/20 p-2 rounded-md text-2xl cursor-pointer hover:bg-primary/30 transition-opacity"
          >
            <RiCloseFill />
          </p>
        </div>
        <div className="flex items-center gap-2 pt-5">
          <p className="flex items-center gap-2">
            <span className="text-teriary">
              <RiMapPinUserFill />
            </span>
            <span className=" text-xs opacity-50">
              No. 2 Lake street, London central, Uk
            </span>
          </p>
          <Link className="text-secondary underline text-xs"> Change</Link>
        </div>
        <RequestServiceForm />
      </div>
    </section>
  );
};

export default RequestServiceModal;
