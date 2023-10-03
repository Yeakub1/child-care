import React, { useEffect, useState } from "react";
import Team from "./Team";
import image from '../../../../assets/images/team.jpg'

const TeamMembers = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetch("team.json")
      .then((res) => res.json())
      .then((data) => setTeam(data));
  }, []);
  
  return (
    <div className="max-w-screen-xl px-5 mx-auto mt-20">
      <h1 className="text-center text-3xl font-semibold mb-12">
        Our Team of Professionals
      </h1>
      <div className="flex justify-center mb-20">
        <img src={image} alt="images" className="rounded-xl" draggable='false' />
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {team.map((teams) => (
          <Team key={teams.id} teams={teams} />
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
