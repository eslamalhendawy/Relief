import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/assets/logo.png";

import SideMenu from "./SideMenu";

const Header = () => {
  const [hidden, setHidden] = useState(true);

  const linkClasses = "border border-[#8D99AE] hover:border-navyColor text-[#8D99AE] hover:text-navyColor duration-200 px-4 py-1 rounded-xl";

  return (
    <header className="container mx-auto px-2">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-12">
          <div>
            <Link to="/">
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
                <ul className="border border-[#ADB5BD]">
                  <Link to="/test" className="border-b border-[#ADB5BD] p-1 text-nowrap text-navyColor block">
                    Live-In Care
                  </Link>
                  <Link to="/test" className="border-b border-[#ADB5BD] p-1 text-nowrap text-navyColor block">
                    Short-Term Care
                  </Link>
                  <Link to="/test" className="p-1 text-nowrap text-navyColor block">
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
          <Link className="bg-accent hover:bg-red-700 duration-200 text-white py-1 w-[80px] lg:w-[100px] text-lg rounded-xl text-center">Login</Link>
          <Link className="border border-[#8D99AE] hover:border-navyColor text-[#8D99AE] duration-200 hover:text-navyColor py-1 w-[80px] lg:w-[100px] text-lg rounded-xl text-center">Sign Up</Link>
        </div>
        <SideMenu />
      </nav>
    </header>
  );
};

export default Header;