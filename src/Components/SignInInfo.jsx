import React from "react";
import Stat from "./Stat";
import { TbArrowUp } from "react-icons/tb";

function SignInInfo() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="mb-20 relative">
        <div className="flex flex-col divide-y rounded-2xl shadow-[0px_0px_15px_0px_rgba(10,10,80,0.15)]">
          <div className="flex gap-2 items-center p-3">
            <img src="/logo.png" className="h-5" />
            <p className="font-semibold">AI to detect and autofix bad code</p>
          </div>
          <div className="flex py-2">
            <Stat number="30+" description="Language Support" />
            <Stat number="10K+" description="Developers" />
            <Stat number="100k+" description="Hours Saved" />
          </div>
        </div>
        <div className="w-fit bg-white px-6 py-2 absolute -right-4 top-32 flex flex-col gap-4 rounded-2xl text-sm shadow-[0px_0px_15px_0px_rgba(10,10,80,0.15)]">
          <div className="flex gap-10 items-center">
            <img src="/chart.png" alt="" className="h-14" />
            <div className="flex flex-col">
              <span className="text-blue-600 flex items-center gap-1 font-semibold text-xs">
                <TbArrowUp />
                14%
              </span>
              <p className="text-xs">This Week</p>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <span className="font-semibold text-xs">Issues Fixed</span>
            <p className="text-2xl font-bold">500k+</p>
          </div>
        </div>
      </div>
      <img src="/logo.png" className="h-60 fixed bottom-0 left-0 opacity-15" />
    </div>
  );
}

export default SignInInfo;
