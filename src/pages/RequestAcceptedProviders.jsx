import AcceptedProvider from "../components/general/AcceptedProvider";
import ExploreOption from "../components/Modal/ExploreOption";

const RequestAcceptedProviders = () => {
  return (
    <main className="w-screen flex  flex-col md:items-center bg-secondary  ">
      <div className=" p-3 md:w-1/3  bg-white ">
        <div className=" p-3 rounded-lg shadow-md h-screen">
          <AcceptedProvider />
        </div>
      </div>
      <ExploreOption />
    </main>
  );
};

export default RequestAcceptedProviders;
