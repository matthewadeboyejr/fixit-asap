import React from "react";
import useArtisanContext from "../../hooks/useArtisanContext";
import CategoriesSkeleton from "../skeleton/CategoriesSkeleton";

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
          <li
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
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Categories;

{
  /* <li
   key={item.id}
   onClick={() => {
     getByCategory(item.id);
   }}
   className="px-3 py-2 border rounded-2xl w-fit text-center"
 >
   <span>{item.category}</span>
 </li>; */
}
