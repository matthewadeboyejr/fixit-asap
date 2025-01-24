import React, { useState } from "react";
import { IoAdd, IoRemove } from "react-icons/io5";
import FAQ from "../../data/FAQ";
import { motion } from "framer-motion";

const Faq = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const [slice, setSlice] = useState(6);
  const toggleDropdown = (Id) => {
    setIsDropdownOpen((prev) => (prev === Id ? null : Id));
  };

  const handleSlice = () => {
    if (slice === 5) {
      setSlice(10);
    } else setSlice(5);
  };

  return (
    <section className=" space-y-10 p-10 bg-primary rounded-xl mt-32 mx-5">
      <div className="">
        <p className="   text-primary  my-4  font-medium opacity-60 ">
          <span className="bg-gray-200 rounded-full w-fit p-2 text-xs font-semibold">
            Questions & Answers
          </span>
        </p>
        <div className="flex items-center text-secondary pb-10">
          <h2 className=" text-4xl  font-semibold ">
            Common questions to know before using service rendering
          </h2>
          <p className=" text-white py-4 text-lg font-medium ">
            here are several common question and answer that could help you
            understand the use of our application
          </p>
        </div>
      </div>

      <div>
        <ul className="space-y-5 ">
          {FAQ.slice(1, slice).map((faq) => (
            <motion.li
              initial={{
                y: 100,
                opacity: 0,
              }}
              whileInView={{ y: 0, x: 0, opacity: 1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 1, stiffnes: 1000, velocity: -100 }}
              key={faq.id}
              className="space-y-3 border border-secondary/30  p-5 rounded-3xl"
            >
              <p
                onClick={() => toggleDropdown(faq.id)}
                className="flex items-center justify-between text-xl hover:cursor-pointer"
              >
                <span className="text-white">{faq?.question}</span>
                <span className="text-secondary">
                  {isDropdownOpen === faq?.id ? <IoRemove /> : <IoAdd />}
                </span>
              </p>

              {isDropdownOpen === faq.id && (
                <p className="flex items-center justify-between text-white opacity-60">
                  {faq?.answer}
                </p>
              )}
            </motion.li>
          ))}
        </ul>
      </div>
      <motion.div
        initial={{
          y: 100,
          opacity: 0,
        }}
        whileInView={{ y: 0, x: 0, opacity: 1 }}
        transition={{ duration: 1, stiffnes: 1000, velocity: -100 }}
        className=" flex md:flex-row flex-col  w-full items-center justify-center space-x-5 space-y-5 md:space-y-0   "
      >
        <button
          onClick={handleSlice}
          className="flex rounded-full items-center gap-2 bg-teriary font-medium text-primary hover:bg-opacity-90 transition-all duration-700  py-3 px-10 "
        >
          {slice === 5 ? "More" : "Collapse"}
        </button>
      </motion.div>
    </section>
  );
};

export default Faq;
