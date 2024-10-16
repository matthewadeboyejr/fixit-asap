import React from "react";
import { Link } from "react-router-dom";
import useArtisanContext from "../../hooks/useArtisanContext";

const Categories = () => {
  const { category, getByCategory } = useArtisanContext();
  console.log(category, "cate");

  return (
    <section className="space-y-5 overflow-hidden">
      <div className="flex items-center justify-between px-3">
        <h3 className=" text-sm font-medium">Feature Categories</h3>
        <Link className="text-secondary/60 hover:underline text-sm font-medium">
          view all
        </Link>
      </div>
      <ul className="grid items-center grid-cols-3 md:grid-cols-8  gap-3 text-sm ">
        {category.map((item) => (
          <li
            key={item.id}
            onClick={() => {
              getByCategory(item.id);
            }}
            className="px-3 py-2 border rounded-2xl w-fit text-center"
          >
            {item.category}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Categories;
