"use client";

import deliver from "@public/assets/animation/deliver.json";
import Lottie from "lottie-react";

import htmlIcon from "@public/assets/techStack/html.svg";
import cssIcon from "@public/assets/techStack/css.svg";
import jsIcon from "@public/assets/techStack/js.svg";
import reactIcon from "@public/assets/techStack/react.svg";
import tailwindIcon from "@public/assets/techStack/tailwind.svg";
import typescriptIcon from "@public/assets/techStack/typescript.svg";
import nextIcon from "@public/assets/techStack/next.svg";
import Image from "next/image";

import { motion } from "framer-motion";

type Props = {}

const TechStack = (props: Props) => {
  return (
    <>
      <div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="absolute w-[80%] bottom-8">
          <div className="w-[150px]">
            <Lottie animationData={deliver} />
          </div>
          <div className="">
            <div className=" absolute top-0 left-[40px] p-1 rounded-full shadow-xl">
              <Image src={htmlIcon} width={10} height={10} alt="htmlIcon" />
            </div>
            <div className=" absolute top-5 left-[90px] p-1 rounded-full shadow-xl">
              <Image src={cssIcon} width={12} height={12} alt="htmlIcon" />
            </div>
            <div className=" absolute bottom-3 left-[110px] p-1 rounded-full shadow-xl">
              <Image
                src={jsIcon}
                width={15}
                height={15}
                alt="htmlIcon"
                className="rounded-full"
              />
            </div>
            <div className=" absolute top-5 left-[135px] p-1 rounded-full shadow-xl">
              <Image src={reactIcon} width={15} height={15} alt="htmlIcon" />
            </div>
            <div className=" absolute bottom-5 left-[155px] p-1 rounded-full shadow-xl">
              <Image src={tailwindIcon} width={15} height={15} alt="htmlIcon" />
            </div>
            <div className=" absolute top-5 left-[190px] p-1 rounded-full shadow-xl">
              <Image
                src={typescriptIcon}
                width={20}
                height={20}
                alt="htmlIcon"
                className="rounded-full"
              />
            </div>
            <div className=" absolute top-0 left-[230px] p-1 rounded-full shadow-xl">
              <Image src={nextIcon} width={20} height={20} alt="htmlIcon" />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default TechStack