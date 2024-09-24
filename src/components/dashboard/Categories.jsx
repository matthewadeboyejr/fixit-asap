import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useArtisanContext from "../../hooks/useArtisanContext";

const Categories = () => {
  const { category } = useArtisanContext();

  return (
    <section className="space-y-5 overflow-hidden">
      <div className="flex justify-between px-3">
        <h3 className=" text-sm font-medium">Feature Categories</h3>
        <Link className="text-primary hover:underline text-sm ">view all</Link>
      </div>
      <ul className="grid items-center grid-cols-3 md:grid-cols-8  gap-3 text-sm ">
        {category.map((item) => (
          <li
            key={item.id}
            className="p-3 text-nowrap bg-teriary/20  rounded-3xl  text-center  "
          >
            {item.category}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Categories;
