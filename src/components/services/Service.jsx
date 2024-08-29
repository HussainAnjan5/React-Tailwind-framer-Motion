import { motion } from 'framer-motion';
import React from 'react';
import { BiSupport } from 'react-icons/bi';
import { CiMobile3 } from 'react-icons/ci';
import { IoMdHappy } from 'react-icons/io';
import { IoPulseOutline } from 'react-icons/io5';
import { RiComputerLine } from 'react-icons/ri';
import { TbWorldWww } from 'react-icons/tb';
export const Slideleft = (delay) => {
    return {
      initial: {
        opacity: 0,
        x: 50,
      },
      animate: {
        opacity: 1,
        x: 0,
        transition: {
          type:"spring",
          stiffness: 100,
          duration: 0.3,
          delay: delay,
          ease: "easeInOut",
        },
      },
    };
  };
  
const ServiceData = [
  {
    id: 1,
    title: "Web Development",
    link: "#",
    icon: <TbWorldWww />,
    delay: 0.2
  },
  {
    id: 2,
    title: "Mobile Development",
    link: "#",
    icon: <CiMobile3 />,
    delay: 0.2
  },
  {
    id: 3,
    title: "Software Development",
    link: "#",
    icon: <RiComputerLine />,
    delay: 0.2
  },
  {
    id: 4,
    title: "Satisfied Clients",
    link: "#",
    icon: <IoMdHappy />,
    delay: 0.2
  },
  {
    id: 5,
    title: "SEO Optimization",
    link: "#",
    icon: <IoPulseOutline />,
    delay: 0.2
  },
  {
    id: 6,
    title: "24/7 Support",
    link: "#",
    icon: <BiSupport />,
    delay: 0.2
  },
];

const Service = () => {
  return (
    <section className="bg-white">
      <div className="container pb-14 pt-10 font-bold text-dark text-4xl">
        <h1>Services we provide</h1>
      </div>
      <div 
      className=" container grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
        {ServiceData.map((service) => (
          <motion.div 
          variants={Slideleft(service.delay)}
          initial="initial"
            whileInView={"animate"}
            viewport={{once:true}}

          key={service.id} className="flex bg-[#f4f4f4] p-4 py-7 hover:scale-110 duration-300 hover:shadow-2xl hover:bg-white rounded-2xl flex-col items-center">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h2 className="text-lg text-center px-3 font-semibold">{service.title}</h2>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Service;
