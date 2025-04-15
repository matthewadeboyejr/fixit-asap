import React from "react";
import Icon from "../../Images/Icon-spin.png";

const LoadingSpinner = () => {
  return (
    <div className="fixed flex items-center justify-center z-50 inset-0 bg-black/50 h-screen">
      <img src={Icon} alt="icon spinner" className="animate-spin w-10" />
    </div>
  );
};

export default LoadingSpinner;
