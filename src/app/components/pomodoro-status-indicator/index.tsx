import Image from "next/image";
import React from "react";
import focus from "/public/images/focus.svg";

const PomodoroStatusIndicator = () => {
  return (
    <div className="flex px-4 py-2 border-2 border-red-900 bg-red-100 rounded-full">
      <Image
        src={focus}
        alt="Pomodoro"
        width={30}
        height={26}
        className="text-green-900"
      />
      <span className="ml-2 text-red-900 font-medium text-2xl">Focus</span>
    </div>
  );
};

export default PomodoroStatusIndicator;
