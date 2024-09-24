import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useArtisanContext from "../../hooks/useArtisanContext";

const Categories = () => {
  const { category } = useArtisanContext();

  return (
    <section className="space-y-5 overflow-hidden">
      <h3 className="px-5 text-xl font-bold">Feature Categories</h3>
      <ul className="grid items-center grid-cols-3 md:grid-cols-8  gap-3 text-sm ">
        {category.map((item) => (
          <li
            key={item.id}
            className="p-3 text-nowrap bg-teriary/20  rounded-3xl  text-center  "
          >
            {item.category}
          </li>
        ))}
        <Link className="text-secondary hover:underline">view all</Link>
      </ul>
    </section>
  );
};

export default Categories;
