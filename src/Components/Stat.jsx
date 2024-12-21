import React from "react";

function Stat({ number, description }) {
  return (
    <div className="flex flex-col items-center gap-1 p-4">
      <span className="font-bold w-fit">{number}</span>
      <p className="text-xs">{description}</p>
    </div>
  );
}

export default Stat;
