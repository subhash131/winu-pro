import React from "react";
import { IoClose } from "react-icons/io5";

const Header = () => {
  return (
    <div className="w-full h-10 flex items-center justify-between">
      <p> Payment Method</p>
      <div className="p-2 rounded-full hover:bg-active">
        <IoClose />
      </div>
    </div>
  );
};

export default Header;
