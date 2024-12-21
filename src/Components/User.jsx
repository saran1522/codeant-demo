import React from "react";

function User() {
  return (
    <select
      name="username"
      id=""
      className="rounded-lg bg-transparent p-3 w-full border border-gray-200 dark:border-gray-700"
    >
      <option value="saran" className="dark:bg-gray-800">
        Saran Sinha
      </option>
      <option value="codeantuser1" className="dark:bg-gray-800">
        CodeAnt User 1
      </option>
      <option value="codeantuser2" className="dark:bg-gray-800">
        CodeAnt User 2
      </option>
      <option value="codeantuser3" className="dark:bg-gray-800">
        CodeAnt User 3
      </option>
    </select>
  );
}

export default User;
