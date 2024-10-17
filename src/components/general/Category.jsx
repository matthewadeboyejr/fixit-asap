import React from "react";
import useArtisanContext from "../../hooks/useArtisanContext";
import { GoPerson } from "react-icons/go";
import { RiStarSFill } from "react-icons/ri";

const Category = () => {
  const { selectedCategory, getProviderDetail } = useArtisanContext();

  return (
    <section className="space-y-5 p-4 max-w-4xl mx-auto">
      {/* <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold border-b-2 border-primary pb-1">
          Artisans close to you
        </h2>
      </div> */}

      {selectedCategory.length === 0 ? (
        <div className="text-center opacity-40 py-6 text-lg">
          No artisans in this category
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {selectedCategory.map((item) => (
            <div
              key={item?.id}
              onClick={() => getProviderDetail(item?.id)}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
            >
              <div className="relative">
                <img
                  className="w-full h-48 rounded-t-lg object-cover"
                  src={item.image}
                  alt={item.service_category.category}
                />
                <div className="absolute top-2 left-2 px-2 py-1 flex items-center gap-1 bg-white rounded-full shadow-sm">
                  <RiStarSFill className="text-yellow-400" />
                  <p className="text-sm font-medium">4.5</p>
                </div>
              </div>

              <div className="p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <h5 className="text-base font-medium">
                    {item.service_category.category}
                  </h5>
                  <p className="font-medium text-sm text-secondary">1 km+</p>
                </div>
                <div className="flex items-center gap-2">
                  <GoPerson className="text-secondary flex-shrink-0" />
                  <p className="text-sm text-gray-600 truncate">
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
