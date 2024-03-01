import React, { useState } from "react";

const MainSection: React.FC = () => {
  return (
    <>
      <div className="w-full flex justify-center mx-4">
        <div className="w-full mt-8 max-w-5xl">
          <div className="text-4xl">Courses</div>
          <div className="w-full flex-col border border-gray-300 p-4 mt-4 rounded-md hover:bg-gray-100 transition-all duration-200 ease-out hover:cursor-pointer active:cursor-pointer">
            <h3 className="text-xl font-bold">Data Structures</h3>
            <p className="">CSE 20312</p>
            <p className="">Peter Bui</p>
            <p className="">2/5</p>
            <p className="">Easy</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSection;
