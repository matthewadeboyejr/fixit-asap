import { RiCloseFill } from "react-icons/ri";
import RequestServiceForm from "../../forms/RequestServiceForm";
import { motion, AnimatePresence } from "framer-motion";
import UserAddress from "../../general/UserAddress";
import AnimationConfig from "../../animation/AnimationConfig";
import useOpenModalContext from "../../../hooks/useOpenModalContext";

const RequestServiceModal = () => {
  const { setOpenRequest, openRequest } = useOpenModalContext();

  return (
    <>
      <motion.div
        {...AnimationConfig}
        className={`${
          openRequest ? `flex` : `hidden`
        }  bg-black/70 fixed inset-0 h-screen justify-center md:items-center items-end z-30`}
      />

      <AnimatePresence>
        {openRequest && (
          <div className="flex md:items-center items-end justify-center inset-0 fixed z-50 ">
            <motion.div
              className="bg-white p-5 md:rounded-md rounded-t-md  md:w-[450px]  w-full  "
              {...AnimationConfig}
            >
              <motion.div {...AnimationConfig}>
                <div className="flex items-center justify-between ">
                  <h4 className="text-lg font-semibold">Request service</h4>
                  <p
                    onClick={() => {
                      setOpenRequest(false);
                    }}
                    className="bg-primary/20 p-2 rounded-md text-2xl cursor-pointer hover:bg-primary/30 transition-opacity"
                  >
                    <RiCloseFill />
                  </p>
                </div>
                <div className="py-5">
                  <UserAddress
                    color={"text-secondary"}
                    iconColor={"text-primary"}
                  />
                </div>
                <RequestServiceForm />
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default RequestServiceModal;
