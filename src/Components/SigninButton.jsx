import React from "react";
import { useRepo } from "../Context/RepoContext";
import { useNavigate } from "react-router-dom";

function SigninButton({ icon: Icon, title, style }) {
  const { setSignedIn } = useRepo();
  const navigate = useNavigate();
  return (
    <div
      className="flex gap-2 items-center justify-center rounded-lg py-3 min-w-80 text-sm font-semibold border border-gray-300 cursor-pointer"
      onClick={() => {
        setSignedIn(true);
        navigate("/");
      }}
    >
      <Icon className={style} size={20} />
      <p>{title}</p>
    </div>
  );
}

export default SigninButton;
