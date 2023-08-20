import React from "react";

const HomeActivities = ({ icon, title, description }) => {
  return (
    <div className="text-center">
      <div className="flex justify-center text-7xl ">
        <div className="App-logo text-[#1F2B40]">{icon}</div>
      </div>
      <h1 className="text-3xl font-semibold mt-5">{title}</h1>
      <p className="text-lg mt-5">{description}</p>
    </div>
  );
};

export default HomeActivities;
