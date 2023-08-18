"use client";

import choices from "@public/assets/icons/choices.svg";
import home from "@public/assets/icons/home.svg";
import about from "@public/assets/icons/about.svg";
import projects from "@public/assets/icons/projects.svg";
import contact from "@public/assets/icons/contact.svg";
import file from "@public/assets/icons/file.svg";
import Image from "next/image";

//* import motion
import { motion, AnimatePresence } from "framer-motion";

//* import useChoice from our store
import { useChoices } from "@store/useStore";

type Props = {};

const Nav = (props: Props) => {
  const navChoices = useChoices();
  return (
    <div>
      <div>
        <div className="fixed z-[100] bottom-20 right-5 h-[250px] flex-between flex-col">
          <AnimatePresence>
            {navChoices.isOpen && (
              <>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.05, duration: 0.25 }}
                  variants={{
                    hidden: { opacity: 0, y: 250 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  key="file"
                  exit={{ y: 250, opacity: 0 }}>
                  <Image
                    src={file}
                    width={40}
                    height={40}
                    alt="navChoices"
                    className=" p-2 rounded-full shadow-xl"
                  />
                </motion.div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.04, duration: 0.25 }}
                  variants={{
                    hidden: { opacity: 0, y: 200 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  key="contact"
                  exit={{ y: 200, opacity: 0 }}>
                  <Image
                    src={contact}
                    width={40}
                    height={40}
                    alt="navChoices"
                    className=" p-1 rounded-full shadow-xl"
                  />
                </motion.div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.03, duration: 0.25 }}
                  variants={{
                    hidden: { opacity: 0, y: 150 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  key="projects"
                  exit={{ y: 150, opacity: 0 }}>
                  <Image
                    src={projects}
                    width={40}
                    height={40}
                    alt="navChoices"
                    className=" p-1 rounded-full shadow-xl"
                  />
                </motion.div>

                <motion.div
                  initial="hidden"
                  key="about"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.02, duration: 0.25 }}
                  variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  exit={{ y: 100, opacity: 0 }}>
                  <Image
                    src={about}
                    width={40}
                    height={40}
                    alt="navChoices"
                    className=" p-1 rounded-full shadow-xl"
                  />
                </motion.div>

                <motion.div
                  key="home"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.01, duration: 0.25 }}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  exit={{ y: 50, opacity: 0 }}>
                  <Image
                    src={home}
                    width={40}
                    height={40}
                    alt="navChoices"
                    className=" p-1 rounded-full shadow-xl"
                  />
                </motion.div>
              </>
            )}
          </AnimatePresence>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
  
            >
            <Image
              src={choices}
              width={40}
              height={40}
              alt="navChoices"
              className="fixed z-[100] bottom-8 right-5 p-1 rounded-full shadow-xl"
              onClick={navChoices.setIsOpen}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
