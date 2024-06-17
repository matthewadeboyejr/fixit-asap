import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const category = [
    { name: "Plumbing" },
    { name: "Carpenters" },
    { name: "Gardeners" },
    { name: "Hairdressing" },
    { name: "Tailors" },
    { name: "Makeup artist" },
    { name: "Electricians" },
  ];

  return (
    <section className="space-y-5 overflow-hidden">
      <h3 className="px-5 text-sm">Feature Categories</h3>
      <ul className="grid items-center grid-cols-3 md:grid-cols-8  gap-3 text-sm ">
        {category.map((e) => (
          <li className="p-3 text-nowrap border-secondary border rounded-3xl  text-center  ">
            {e.name}
          </li>
        ))}
        <Link className="text-secondary hover:underline">view all</Link>
      </ul>
    </section>
  );
};

export default Categories;
