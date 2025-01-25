import React from "react";
import useArtisanContext from "../../hooks/useArtisanContext";
import CategoriesSkeleton from "../skeleton/CategoriesSkeleton";
import { motion } from "framer-motion";

const Categories = () => {
  const { category, getByCategory, isLoading } = useArtisanContext();

  return (
    <section className="space-y-5 ">
      <div className="flex items-center justify-between px-3">
        <h3 className=" text-lg font-semibold ">Categories</h3>
        {/* <Link className="text-secondary/60 hover:underline text-sm font-medium">
          view all
        </Link> */}
      </div>
      <ul id="category" className=" flex gap-4 overflow-x-auto no-scrollbar  ">
        {isLoading && <CategoriesSkeleton cards={4} />}
        {category.map((item) => (
          <motion.li
            initial={{
              x: 100,
              opacity: 0,
            }}
            whileInView={{ y: 0, x: 0, opacity: 1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 1, stiffnes: 1000, velocity: -100 }}
            key={item.id}
            onClick={() => {
              getByCategory(item.id);
            }}
            className="flex flex-col gap-3 items-center  "
          >
            <img
              className="border w-16 h-16 rounded-full"
              src={item?.image}
              alt={item.category}
            />
            <span className="text-xs">{item?.category}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Categories;
