import React, { useState } from "react";

const ReadMorText = ({ children, maxChars = 300 }) => {
  const [expanded, setExpanded] = useState(false);

  if (children.length <= maxChars) return <p>{children}</p>;

  const text = expanded ? children : children.substring(0, maxChars);

  return (
    <div className="">
      <p>
        {text}
        {!expanded && " ..."}
      </p>
      <p
        className="text-blue-600 underline cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Read less" : "Read more"}
      </p>
    </div>
  );
};

export default ReadMorText;
