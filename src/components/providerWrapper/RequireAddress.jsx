import React from "react";
import { AddressProvider } from "../context/AddressContext";
import UserAddress from "../general/UserAddress";
import RequestServiceForm from "../forms/RequestServiceForm";

const RequireAddress = () => {
  return <AddressProvider></AddressProvider>;
};

export default RequireAddress;
