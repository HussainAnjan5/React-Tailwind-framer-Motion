import React from 'react'
import BannerPng from "../../assets/education.png"
import { GrUserExpert } from 'react-icons/gr'
import { MdOutlineAccessTime } from 'react-icons/md'
import { FaBookReader } from 'react-icons/fa'
import { fadeUp } from '../hero/Hero'
import { animate, motion } from 'framer-motion'

const Banner = () => {
  return (
    <section>
            <div className='container py-14 md:py-24 grid gird-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0'>
        <div className='flex justify-center items-center'>
        <motion.img
                    initial={{opacity:0 , x:-50}}
                    whileInView={{opacity:1 , x:0}}
                    viewport={{once:true}}
                    transition={{duration:0.5, ease:"easeInOut"}}
        
        
        src={BannerPng} className='w-[350px] object-cover drop-shadow md:w-[450px]' alt="" />
        </div>
        <div className= ' text-center space-y-12 md:text-left '>
        <div className=' text-3xl font-bold md:text-4xl  !leading-snug'>
            <motion.h1
            initial={{opacity:0 , scale:0.5}}
            whileInView={{opacity:1 , scale:1}}
            viewport={{once:true}}
            transition={{duration:0.5}}
            className='text-3xl font-bold md:text-4xl  !leading-snug'
            >The World's leading Online learning Platform </motion.h1>
        </div>
    <div className='flex flex-col gap-8'>
    <motion.div
        variants={fadeUp(0.2)}
        initial="initial"
            whileInView={"animate"}
            viewport={{once:true}}
        className='flex items-center gap-5 p-6 bg-[#f4f4f4] rounded-2xl scale-100 hover:bg-white duration-300 hover:shadow-2xl'>
            <FaBookReader className='text-2xl'/> 
            <p className='text-lg'>10,000 + courses</p>
        </motion.div>
        <motion.div
        variants={fadeUp(0.4)}
        initial="initial"
            whileInView={"animate"}
            viewport={{once:true}}
        className='flex items-center gap-5 p-6 bg-[#f4f4f4] rounded-2xl scale-100 hover:bg-white duration-300 hover:shadow-2xl'>
            <GrUserExpert className='text-2xl'/> 
            <p className='text-lg'>Expert Instruction</p>
        </motion.div>
        <motion.div
        variants={fadeUp(0.6)}
        initial="initial"
            whileInView={"animate"}
            viewport={{once:true}}
        className='flex items-center gap-5 p-6 bg-[#f4f4f4] rounded-2xl scale-100 hover:bg-white duration-300 hover:shadow-2xl'>
            <MdOutlineAccessTime className='text-2xl'/> 
            <p className='text-lg'>Lifetime Access</p>
        </motion.div>
    </div>
        </div>
        </div>

    </section>
)
}

export default Banner