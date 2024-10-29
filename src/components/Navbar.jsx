import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close, init, image } from "../assets";


const Navbar = () => {
  const[active, setActive]= useState("");
  const [toggle, setToggle] = useState(false);


  return (
    <nav className={`${
      styles.paddingX
    } w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>

      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
      <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={image} alt='logo' className='w-9 h-9 object-contain rounded-full' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>Sadman Sami &nbsp;
          <span className='sm:block hidden'> | Portfolio</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((Link) =>
          (
            <li key ={Link.id} className={`${active === Link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor pointer`}
            
            onClick={() => {setActive(title)}}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}

        </ul>

        <div className="sm:hidden absolute flex flex-1 justify end items-center end-0">
          <img src={toggle? close: menu} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={() => setToggle(!toggle)}/>

        </div>
        <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>

        <ul className="list-none flex justify-end items-start flex-col gap-4">

          {navLinks.map((Link) =>
          (
            <li key ={Link.id} className={`${active === Link.title && (!toggle)? "text-white" : "text-secondary"}
             hover:text-white text-[18px] font-medium cursor pointer`}
             
            onClick={() => {setToggle(!toggle); setActive(Link.title)}}>
              
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}

        </ul>


        </div>

      </div>
      
    </nav>
  )
}

export default Navbar