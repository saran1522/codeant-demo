import React from "react";

function HeroButton({ icon: Icon, title }) {
  return (
    <button
      className={`flex gap-2 items-center rounded-lg h-fit px-3 py-2 border border-gray-300 dark:border-gray-700 ${
        title === "Add Repository" && "bg-blue-500 border-sky-600 text-white"
      }`}
    >
      <Icon />
      <p>{title}</p>
    </button>
  );
}

export default HeroButton;
