import { useState } from "react";
import { Link } from "react-router-dom";

import Drawer from "@mui/material/SwipeableDrawer";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const SideMenu = () => {
  const [openMenu, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const toggleMenu = (openStatus) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setOpen(openStatus);
  };

  const linkClasses = "border-b border-[#8D99AE] hover:border-navyColor text-[#8D99AE] hover:text-navyColor duration-200 p-3 block text-xl";

  return (
    <aside className="lg:hidden">
      <button className="p-2" onClick={() => setOpen(true)}>
        <i className="fa-solid fa-bars text-xl text-navyColor"></i>
      </button>
      <Drawer anchor="right" open={openMenu} onClose={toggleMenu(false)} onOpen={toggleMenu(true)}>
        <div className="w-screen h-full md:max-w-screen-sm flex flex-col p-3 bg-white">
          <button className="w-fit ml-auto text-xl hover:text-red-500 duration-200" onClick={() => setOpen(false)}>
            <i className="fa-solid fa-x"></i>
          </button>
          <ul className="">
            <Link onClick={() => setOpen(false)} to="/" className={linkClasses}>
              <li>Home</li>
            </Link>
            <li onClick={() => setOpen2(open2 === true ? false : true)} className={linkClasses}>
              <span>Services</span> 
              {open2 ? <ExpandLess /> : <ExpandMore />}{" "}
              <Collapse in={open2} timeout="auto" unmountOnExit>
              <ul>
                <Link to="/live-in-care">
                  <li className="hover:bg-white duration-200 p-2 rounded-lg cursor-pointer">Live-In Care</li>
                </Link>
                <Link to="/short-term-care">
                  <li className="hover:bg-white duration-200 p-2 rounded-lg cursor-pointer">Short-Term Care</li>
                </Link>
                <Link to="/pricing">
                  <li className="hover:bg-white duration-200 p-2 rounded-lg cursor-pointer">Pricing</li>
                </Link>
              </ul>
            </Collapse>
            </li>
            <Link onClick={() => setOpen(false)} to="/about-us" className={linkClasses}>
              <li>About Us</li>
            </Link>
            <Link onClick={() => setOpen(false)} to="/contact-us" className={linkClasses}>
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>
      </Drawer>
    </aside>
  );
};

export default SideMenu;
