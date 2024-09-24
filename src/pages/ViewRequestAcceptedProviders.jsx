import { SubHeader } from "../components/general/Header";
import AvailableProvider from "../components/general/AvailableProvider";

const ViewRequestAcceptedProviders = () => {
  return (
    <main className="w-screen h-screen flex  flex-col md:items-center  ">
      <div className=" p-5 md:w-1/3 bg-white rounded-md shadow-md h-full ">
        <div className="mx-5 border-b pb-10">
          <SubHeader title={"Available Provider"} />
          <p className="ml-12 text-xs   ">
            List of Marchant interest in your request
          </p>
        </div>
        <AvailableProvider />
      </div>
    </main>
  );
};

export default ViewRequestAcceptedProviders;
