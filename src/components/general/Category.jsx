import React from "react";
import useArtisanContext from "../../hooks/useArtisanContext";
import { GoPerson } from "react-icons/go";
import { RiStarSFill } from "react-icons/ri";

const Category = () => {
  const { selectedCategory, getProviderDetail } = useArtisanContext();

  return (
    <section className="space-y-5">
      <div className="flex  items-center justify-between px-3">
        <h2 className="text-sm  border-b-2 border-primary font-semibold">
          Artisan close to you
        </h2>
      </div>

      {selectedCategory.length === 0 ? (
        <div className="text-center opacity-40 py-3">
          No artisan in this category
        </div>
      ) : (
        <div className="flex gap-4 overflow-x-auto pb-4">
          {/*      {isLoading && <CardSkeleton cards={3} />} */}
          {selectedCategory.map((item) => (
            <div
              key={item?.id}
              onClick={() => {
                getProviderDetail(item?.id);
              }}
              className="bg-white rounded-lg hover:shadow-md min-w-[300px] max-w-[300px]  flex-shrink-0"
            >
              <div className="relative">
                <img
                  className="w-full h-48 rounded-2xl object-cover"
                  src={item.image}
                  alt=""
                />
                <div className="absolute top-0 left-0 m-3 p-1 flex items-center gap-1 bg-white rounded-sm">
                  <RiStarSFill className="text-orange-400 text-sm" />
                  <p className="text-xs">4.5</p>
                </div>
              </div>

              <div className="p-4 space-y-1">
                <div className="flex items-center justify-between">
                  <h5 className="text-sm font-medium">
                    {item.service_category.category}
                  </h5>
                  <p className="font-medium text-xs text-secondary">1 km+</p>
                </div>
                <div className="flex items-center gap-2">
                  <GoPerson className="text-secondary" />
                  <p className="opacity-80 text-xs">
                    {item.artisan.business_name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Category;
