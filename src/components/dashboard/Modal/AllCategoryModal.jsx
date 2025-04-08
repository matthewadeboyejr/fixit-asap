import { useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import AnimationConfig from "../../animation/AnimationConfig";
import useOpenModalContext from "../../../hooks/useOpenModalContext";
import { CgSearch } from "react-icons/cg";
import useArtisanContext from "../../../hooks/useArtisanContext";
import Icon from "../../../Images/Icon-spin.png";

const AllCategoryModal = () => {
  const { openAllCategory, setOpenAllCategory } = useOpenModalContext();
  const { category, getByCategory, gettingByCategory } = useArtisanContext();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = category.filter((item) =>
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {openAllCategory && (
        <motion.div
          className={`flex  bg-black/40 fixed inset-0 h-screen justify-center md:items-center items-end z-30`}
        />
      )}

      <AnimatePresence>
        {openAllCategory && (
          <div className="flex md:items-center items-end justify-center inset-0 fixed z-50 ">
            <motion.div
              className="bg-white p-5 md:rounded-md rounded-t-md  md:w-[450px]  w-full  "
              {...AnimationConfig}
            >
              <motion.div {...AnimationConfig} className="space-y-3">
                <div className="flex items-center justify-between ">
                  <h4 className="text-lg font-semibold">All Categories</h4>
                  <p
                    onClick={() => {
                      setOpenAllCategory(false);
                    }}
                    className="bg-primary/20 p-2 rounded-md text-2xl cursor-pointer hover:bg-primary/30 transition-opacity"
                  >
                    <RiCloseFill />
                  </p>
                </div>
                <div className="bg-secondary/10 flex items-center  rounded-md ">
                  <div className="bg-secondary py-6 flex items-center px-2 rounded-l-md text-white">
                    <CgSearch />
                  </div>

                  <input
                    className="p-5 bg-transparent w-full placeholder:text-sm pl-5 outline-none placeholder:text-primary"
                    placeholder="Search category"
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <ul className="space-y-3 max-h-96 overflow-y-auto overflow-x-hidden">
                  {filteredCategories.length > 0 ? (
                    filteredCategories.map((item) => (
                      <motion.li
                        initial={{
                          x: 100,
                          opacity: 0,
                        }}
                        whileInView={{ y: 0, x: 0, opacity: 1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{
                          duration: 1,
                          stiffnes: 1000,
                          velocity: -100,
                        }}
                        key={item.id}
                        onClick={() => {
                          getByCategory(item.id);
                        }}
                        className="text-sm font-semibold border-b rounded-sm p-3 hover:bg-teriary/20 "
                      >
                        {item?.category}
                      </motion.li>
                    ))
                  ) : (
                    <li className="text-sm text-center p-3 text-gray-500">
                      No categories found
                    </li>
                  )}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      {gettingByCategory && (
        <div className="fixed flex items-center justify-center z-50 inset-0 bg-black/50 h-screen">
          <img src={Icon} alt="icon spinner" className="animate-spin w-10" />
        </div>
      )}
    </>
  );
};

export default AllCategoryModal;
