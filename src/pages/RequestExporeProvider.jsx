import React from "react";
import ExploreProvider from "../components/general/ExploreProvider";
import { SubHeader } from "../components/general/Header";
import { ChatProvider } from "../context/ChatContext";

const RequestExporeProvider = () => {
  return (
    <ChatProvider>
      <main className="w-screen flex  flex-col md:items-center  ">
        <div className=" p-3 md:w-1/3   ">
          <div className="mx-5 pb-5">
            <SubHeader title={"Requested service"} />
          </div>

          <div className="bg-white space-y-4 p-3 rounded-lg shadow-md h-screen">
            <p className="">List of Merchant base on your interest</p>
            <ExploreProvider />
          </div>
        </div>
      </main>
    </ChatProvider>
  );
};

export default RequestExporeProvider;
