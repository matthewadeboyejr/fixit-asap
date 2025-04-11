//import axiosInstance from "../../api/axios";
//import { ReviewSkeleton } from "../skeleton/ReviewSkeleton";
import useArtisanContext from "../../hooks/useArtisanContext";
//import { RiStarFill, RiStarLine } from "react-icons/ri";
//import { IoPerson } from "react-icons/io5";
import { AsyncImage } from "loadable-image";
import { Grow } from "transitions-kit";

const Catalogues = () => {
  const { providerDetail } = useArtisanContext();
  const catalogues = providerDetail?.catalogues;

  return (
    <div className="space-y-5 ">
      <section className="space-y-4 overflow-y-auto h-80   ">
        <div className="grid grid-cols-2 gap-3 mt-4">
          {catalogues.map((img) => {
            return (
              <AsyncImage
                key={img?.id}
                src={img?.image}
                style={{
                  width: "100%",
                  height: "auto",
                  aspectRatio: 1 / 1,
                  borderRadius: 3,
                }}
                Transition={Grow}
                loader={<div style={{ background: "#888" }} />}
                error={<div style={{ background: "#eee" }} />}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Catalogues;
