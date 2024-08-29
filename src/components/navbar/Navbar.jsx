// import React from 'react'
import { motion } from "framer-motion";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
    const NavbarMenu=[
    {
        id:1,
        title:"Home",
        path:"/",
    },
    {
        id:2,
        title:"Services",
        link:"#",
    },
    {
        id:3,
        title:"About Us",
        link:"#",
    },
    {
        id:4,
        title:"Our Team",
        link:"#",
    },
    {
        id:5,
        title:"Contact us",
        link:"#",
    },

    ]
    
  return (
<nav className="relative z-20">
<motion.div
initial={{opacity: 0 , y:-50}}  
animate={{opacity: 1, y: 0}}
className="container flex items-center  justify-between py-10">
        {/* logo Section */}
        <div >
    <h1 className='font-bold' >HussainAnjan</h1>
    </div>
    {/* Menu Section */}
    <div className="hidden lg:block">
        <ul className='flex items-center gap-3'>
            {
                NavbarMenu.map((item) => (
                    <li key={item.id}>
                        <a href={item.path} className='inline-block py-2 px-3 hover:text-secondary relative group'>
                    <div className='w-2 h-2 bg-secondary absolute mt-3 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden'></div>{item.title}
                        </a>
                    </li>
                ))
            }
            <button className="primary-btn text-light">Sign In</button>
        </ul>
    </div>
    {/* Hamburger Section */}
    <div className="lg:hidden">
<IoMdMenu/>
    </div>

</motion.div>
</nav>
)
}

export default Navbar