import React from "react";
import Sidebar from "./siderbar";

const Home = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="text-3xl ">Home</div>
      </div>
    </>
  );
};

export default Home;