import { signinbuttons } from "../data";
import SigninButton from "../Components/SigninButton";
import { useState } from "react";
import SignInInfo from "../Components/SignInInfo";

function Signin() {
  const [mode, setMode] = useState("saas");
  const buttons = signinbuttons[mode];
  return (
    <div className="flex h-screen w-full divide-x dark:divide-gray-700 text-gray-700 dark:text-gray-600 font-IN dark:bg-gray-900">
      <div className="w-1/2 h-full  max-md:hidden">
        <SignInInfo />
      </div>

      <div className="w-1/2 flex flex-col gap-5 justify-center items-center max-md:w-full">
        <div className="flex flex-col justify-center items-center border border-gray-200 rounded-lg min-w-[75%]">
          <div className="flex flex-col items-center gap-5 p-4 w-full border-b">
            <div className="flex gap-1 items-center">
              <img src="/logo.png" className="h-5" />
              <p>CodeAnt AI</p>
            </div>
            <h2 className="text-2xl font-semibold">Welcome to CodeAnt AI</h2>
            <div className="w-full flex border border-gray-300 rounded-lg">
              <button
                onClick={() => setMode("saas")}
                className={`rounded-lg flex-grow py-3 text-sm font-semibold ${
                  mode === "saas" ? "bg-blue-500 text-white" : ""
                }`}
              >
                SAAS
              </button>
              <button
                onClick={() => setMode("self")}
                className={`rounded-lg flex-grow py-3 text-sm font-semibold ${
                  mode === "self" ? "bg-blue-500 text-white" : ""
                }`}
              >
                Self Hosted
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-start gap-3 p-4 min-h-64">
            {buttons.map((button, i) => (
              <SigninButton
                key={button.icon}
                icon={button.icon}
                title={button.title}
                style={button.style}
              />
            ))}
          </div>
        </div>
        <p className="text-sm">
          By signing up you agree to the
          <span className="font-bold"> Privacy Policy</span>
        </p>
      </div>
    </div>
  );
}

export default Signin;
