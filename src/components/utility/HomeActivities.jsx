import React from "react";

const HomeActivities = ({ icon, title }) => {
  return (
    <div className="text-center">
      <div className="flex justify-center text-7xl ">
        <div className="App-logo">{icon}</div>
      </div>
      <h1 className="text-3xl font-semibold mt-5">{title}</h1>
    </div>
  );
};

export default HomeActivities;
