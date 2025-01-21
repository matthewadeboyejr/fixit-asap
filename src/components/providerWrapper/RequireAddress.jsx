import React from "react";
import { AddressProvider } from "../context/AddressContext";

const RequireAddress = () => {
  return <AddressProvider></AddressProvider>;
};

export default RequireAddress;
