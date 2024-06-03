'use client'

import { ReactTyped } from "react-typed";

const TextAnimation = () => {
  return (
    <div>
      <h1 className="">
        Work w/ icons and sync them from design to {" "}
        <ReactTyped strings={["code>/"]} typeSpeed={100} loop className="text-purple-500"/>
      </h1>
    </div>
  );
};

export default TextAnimation;