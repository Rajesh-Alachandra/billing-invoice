import React, { useState } from "react";
import logo from "../assets/logo.png";
import sun from "../assets/icon-sun.svg";
import moon from "../assets/icon-moon.svg";
import useDarkMode from "../hooks/useDarkMode";
import profile from "../assets/img/blank-profile.png";
import { motion } from "framer-motion";
import Logo from "../assets/img/Logo.png";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
function Header() {
  const navigate = useNavigate();

  const [colorTheme, setTheme] = useDarkMode();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  // const toggleDarkMode = () => {
  //   setTheme(colorTheme);
  //   setDarkSide((state) => !state);
  // };

  const transition = {
    type: "spring",
    stiffness: 200,
    damping: 10,
  };

  return (
    <div>
      {/* Header */}
      <header className=" lg:hidden h-[80px] z-50  duration-300 ease-in-out  p-4  dark:bg-[#1E2139]  bg-[#373b53] flex items-center justify-end   ">
        {/* Logo img */}

        <img
          src={Logo}
          className="h-[80px] absolute top-0 left-0"
          alt="logo-image"
          onClick={() => navigate("/center")}
        />

        {/* Right side */}
        <div className="  flex  items-center  ">
          {/* darkMode Button */}

          {/* {colorTheme === "light" ? <motion.img onClick={toggleDarkMode} initial={{ scale: 0.6, rotate: 90 }} animate={{ scale: 1, rotate: 360, transition }} whileTap={{ scale: 0.9, rotate: 15 }} src={moon} className='cursor-pointer h-6'
          />

            : <motion.img className='cursor-pointer h-7' onClick={toggleDarkMode} whileTap={{ scale: 0.9, rotate: 15 }} initial={{ rotate: 45 }} animate={{ rotate: 360, transition }} src={sun} />
          } */}

          <div className=" h-[80px] border-dotted border-l border-[#494e6e] mx-6"></div>

          <div className=" relative  ">
            <img src={profile} className="h-[50px] rounded-full" />
          </div>
        </div>
      </header>

      {/* SideBar */}
      <div className=" z-50 hidden lg:block ">
        <div className=" fixed  z-50  w-[100px] rounded-r-3xl  flex-col  top-0 left-0 h-screen dark:bg-[#1E2139]  bg-[#373b53]">
          <div className=" h-full w-full flex flex-col justify-between items-center">
            {/* Logo */}

            <img
              src={Logo}
              className="relative cursor-pointer"
              style={{ marginTop: "40px" }}
              onClick={() => navigate("/center")}
            />

            {/* Bottom Side */}
            <div>
              {/* {colorTheme === "light" ? 
              <motion.img onClick={toggleDarkMode} initial={{ scale: 0.6, rotate: 90 }} animate={{ scale: 1, rotate: 360, transition }} whileTap={{ scale: 0.9, rotate: 15 }} src={moon} className='cursor-pointer ml-8 h-6'
              />

                : <motion.img className='cursor-pointer ml-8 h-7' onClick={toggleDarkMode} whileTap={{ scale: 0.9, rotate: 15 }} initial={{ rotate: 45 }} animate={{ rotate: 360, transition }} src={sun} />
              } */}
              <div className="cursor-pointer" onClick={() => {navigate("/")}}>
                <FaSignOutAlt className="cursor-pointer ml-8 h-6 logout-icon" />
                <span className="ml-5 h-6 text-white">Logout</span>
              </div>
              <div className=" w-[100px] border-dotted border-t border-[#494e6e] my-6"></div>

              <div className=" relative  ml-4 mb-4 ">
                <img src={profile} className="h-[50px] rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
