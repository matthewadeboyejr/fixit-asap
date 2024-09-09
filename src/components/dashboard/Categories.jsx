import React from "react";
import { Link } from "react-router-dom";
import useArtisanContext from "../hooks/useArtisanContext";

const Categories = () => {
  const { closestArtisan } = useArtisanContext();

  return (
    <section className="space-y-5 overflow-hidden">
      <h3 className="px-5 text-sm">Feature Categories</h3>
      <ul className="grid items-center grid-cols-3 md:grid-cols-8  gap-3 text-sm ">
        {closestArtisan.map((item) => (
          <li
            key={item.service_category?.id}
            className="p-3 text-nowrap bg-teriary/20  rounded-3xl  text-center  "
          >
            {item.service_category?.category}
          </li>
        ))}
        <Link className="text-secondary hover:underline">view all</Link>
      </ul>
    </section>
  );
};

export default Categories;
