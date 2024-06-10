import { useState } from "react";
import { useAppContext } from "../Context/AppContext";
import { Link } from "react-router-dom";

import SideMenu from "./SideMenu";

import logo from "/assets/logo.png";
import avatar from "/assets/randomUser.png";

const Header = () => {
  const [hidden, setHidden] = useState(true);
  const { userData } = useAppContext();

  const linkClasses = "border border-[#8D99AE] hover:border-navyColor text-[#8D99AE] hover:text-navyColor duration-200 px-4 py-1 rounded-xl";


  return (
    <header className="container mx-auto px-2">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-12">
          <div>
            <Link onClick={() => setHidden(true)} to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <ul className="hidden lg:flex items-center gap-4">
            <Link onClick={() => setHidden(true)} to="/" className={linkClasses}>
              <li>Home</li>
            </Link>
            <div onClick={() => setHidden(!hidden)} className="cursor-pointer relative">
              <li className={linkClasses}>Services</li>
              <div className={`absolute left-0 w-[150px] bottom-[-110px] ${hidden && "hidden"}`}>
                <ul className="border border-[#ADB5BD] bg-white">
                  <Link to="/live-in-care" className="border-b border-[#ADB5BD] p-1 text-nowrap text-navyColor block">
                    Live-In Care
                  </Link>
                  <Link to="/short-term-care" className="border-b border-[#ADB5BD] p-1 text-nowrap text-navyColor block">
                    Short-Term Care
                  </Link>
                  <Link to="/pricing" className="p-1 text-nowrap text-navyColor block">
                    Pricing
                  </Link>
                </ul>
              </div>
            </div>
            <Link onClick={() => setHidden(true)} to="/about-us" className={linkClasses}>
              <li>About Us</li>
            </Link>
            <Link onClick={() => setHidden(true)} to="/contact-us" className={linkClasses}>
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>
        <div className="hidden lg:flex items-center gap-4">
          {userData.loggedIn ? (
            <Link to="/profile"><img className="size-[60px] cursor-pointer" src={avatar} alt="" /></Link>
          ) : (
            <>
              <Link to="/login" className="bg-accent hover:bg-red-700 duration-200 text-white py-1 w-[80px] lg:w-[100px] text-lg rounded-xl text-center">
                Login
              </Link>
              <Link to="/sign-up" className="border border-[#8D99AE] hover:border-navyColor text-[#8D99AE] duration-200 hover:text-navyColor py-1 w-[80px] lg:w-[100px] text-lg rounded-xl text-center">
                Sign Up
              </Link>
            </>
          )}
        </div>
        <SideMenu />
      </nav>
    </header>
  );
};

export default Header;
