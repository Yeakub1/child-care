import React from "react";

const ServiceCard = ({ title, description }) => {
  return (
    <div class="rotated-border rounded-md p-4">
      <h1 className="text-2xl font-semibold mb-2">{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
