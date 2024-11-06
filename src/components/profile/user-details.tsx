import React from "react";
import Header from "./header";
import Cover from "./cover";

const UserDetails = () => {
  return (
    <div className="w-[50%]  shrink-0 h-screen overflow-y-scroll custom-scrollbar relative ">
      <Header />
      <Cover />
      <div className="h-[200vh] w-full"></div>
    </div>
  );
};

export default UserDetails;
