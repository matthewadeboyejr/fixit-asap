//import React, { useState } from "react";
import { RiCloseFill, RiMapPinUserFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import RequestServiceForm from "../../forms/RequestServiceForm";
import { motion, AnimatePresence, easeInOut } from "framer-motion";

const RequestServiceModal = ({ open, close }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0 }}
        className={`${
          open ? `flex` : `hidden`
        }  bg-black/70 fixed inset-0 h-screen justify-center  md:items-center items-end z-30`}
      />

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 0.5 } }}
            exit={{ scale: 0 }}
            className="bg-white p-5 z-50 rounded-t-md w-fit h-fit  inset-0 m-auto fixed"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.2 } }}
            >
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
                <Link className="text-secondary underline text-xs">
                  {" "}
                  Change
                </Link>
              </div>
              <RequestServiceForm />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default RequestServiceModal;
