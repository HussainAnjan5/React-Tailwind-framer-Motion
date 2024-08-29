import React from "react";
import Navbar from "../navbar/Navbar";
import { IoIosArrowRoundForward } from "react-icons/io";
import Blob from "../../assets/blob.svg";
import Heropng from "../../assets/hero.png";
import { motion } from "framer-motion";

export const fadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Hero = () => {
  return (
    <section className="relative bg-light dark:bg-black overflow-hidden">
      <Navbar />
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative z-20">
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-20">
          <div className="text-center md:text-left space-y-10 lg:max-w-[400px]">
            <motion.h1
              variants={fadeUp(0.6)}
              initial="initial"
              animate="animate"
              className="text-3xl lg:text-5xl font-bold !leading-snug"
            >
              Let's Learn to build a{" "}
              <span className="text-secondary">website</span> for your business
            </motion.h1>
            <motion.div
              variants={fadeUp(0.6)}
              animate="animate"
              initial="initial"
              className="flex justify-center md:justify-start"
            >
              <button className="bg-primary mt-5 text-light flex items-center rounded primary-btn gap-2 group">
                Get Started{" "}
                <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 duration-300 group-hover:rotate-45" />
              </button>
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center items-center relative z-20">
          <motion.img
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
            src={Heropng}
            alt="Hero"
            className="w-[400px] xl:w-[600px] relative z-10 drop-shadow"
          />
        </div>
      </div>
      <img
        src={Blob}
        className="absolute bottom-0 left-3/4 transform -translate-x-1/2 w-[800px] md:w-[1500px] z-10"
        alt="Blob"
      />
    </section>
  );
};

export default Hero;
