"use client";

import { motion } from "framer-motion";
import TechStack from "./TechStack";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <>
      <div className="relative h-[100vh]">
        <div>
          <div className="">
            <h1 className="text-[2.3rem] font-montserrat">
              <span className="font-bold">F</span>ront-end{" "}
              <span className="font-bold">W</span>eb{" "}
              <span className="font-bold">D</span>developer
            </h1>
          </div>
          <div className="textwhite">
            <p>Hi, I'm Dale, Aspiring to be a Front-end Web Developer.</p>
          </div>
        </div>
        <TechStack />
      </div>
    </>
  );
};

export default HomePage;
