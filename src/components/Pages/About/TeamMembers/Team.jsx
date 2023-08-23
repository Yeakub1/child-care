import React from 'react';
import ReadMorText from './ReadMoreText';

const Team = ({ teams }) => {
    const { name, title, images, description,point } = teams;
    return (
      <div className="w-full bg-slate-100 shadow-2xl rounded-md p-3">
        <div className="text-center">
          <div className="flex justify-center mt-2">
            <img
              className="w-[150px] h-[150px] rounded-full"
              src={images}
              alt="team images"
              draggable="false"
            />
          </div>
          <h1 className="text-xl font-bold mt-2 text-[#1F2B40]">{name}</h1>
          <p className="mt-1">{title}</p>
        </div>
        <p className="mt-3 text-justify">
          <ReadMorText>{description}</ReadMorText>
        </p>

        <div className="">
          <h1 className="flex items-center gap-3 mt-2">
            <p className="">{point?.one}</p>
          </h1>
          <h1 className="flex items-center gap-3 mt-2">
            <p className="">{point?.two}</p>
          </h1>
          <h1 className="flex items-center gap-3 mt-2">
            <p className=""> {point?.three}</p>
          </h1>
          <h1 className="flex items-center gap-3 mt-2">
            <p className="">{point?.four}</p>
          </h1>
        </div>
      </div>
    );
};

export default Team;