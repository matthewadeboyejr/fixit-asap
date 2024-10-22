import { motion, AnimatePresence } from "framer-motion";
import useOpenModalContext from "../../hooks/useOpenModalContext";

const ImagePreview = ({ file, sendFile }) => {
  const { openPreviewFile, setOpenPreviewFile } = useOpenModalContext();

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0 }}
        className={`${
          openPreviewFile ? `flex` : `hidden`
        }  bg-black/70 fixed inset-0 h-screen justify-center md:items-center items-end z-30`}
        onClick={() => setOpenPreviewFile(false)}
      />

      <AnimatePresence>
        {openPreviewFile && (
          <div className=" flex md:items-center items-end justify-center inset-0 fixed z-50 ">
            <motion.div
              className="bg-white p-5 md:rounded-md rounded-t-md md:w-1/4 w-full  "
              initial={{
                y: 100,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className=" flex flex-col items-center justify-center space-y-5 py-16"
                initial={{
                  y: 50,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ delay: 0.3 }}
              >
                <img
                  src={file}
                  alt="File Preview"
                  className=" object-cover h-52 w-52 shadow-md  rounded-lg"
                />

                <div className="space-y-4  p-4 w-full  ">
                  <button
                    onClick={sendFile}
                    className={`btn-primary`}
                    aria-label="Send image"
                  >
                    Send Image
                  </button>
                  <button
                    onClick={() => setOpenPreviewFile(false)}
                    className={`btn-primary bg-primary/10 text-primary`}
                    aria-label="Cancel image sending"
                  >
                    Cancel
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImagePreview;
