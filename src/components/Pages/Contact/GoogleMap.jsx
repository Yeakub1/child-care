import React from "react";

const GoogleMap = () => {
  return (
    <div className="max-w-screen-xl px-5 mx-auto mt-5 mb-20">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.2589826053445!2d90.40990777512039!3d23.77379033787841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c78a2985fe2b%3A0xf9018243f1e07b87!2sABC%20Daycare%20Center!5e0!3m2!1sen!2sbd!4v1692772147804!5m2!1sen!2sbd"
        height="450"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        className="rounded-xl w-full"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
