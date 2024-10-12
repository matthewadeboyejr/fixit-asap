import { SubHeader } from "../components/general/Header";
import AcceptedProvider from "../components/general/AcceptedProvider";
import ExploreOption from "../components/Modal/ExploreOption";

const RequestAcceptedProviders = () => {
  return (
    <main className="w-screen flex  flex-col md:items-center  ">
      <div className=" p-3 md:w-1/3   ">
        <div className="mx-5 pb-5">
          <SubHeader title={"Requested service"} />
        </div>
        <div className="bg-white p-3 rounded-lg shadow-md h-screen">
          <AcceptedProvider />
        </div>
      </div>
      <ExploreOption />
    </main>
  );
};

export default RequestAcceptedProviders;
