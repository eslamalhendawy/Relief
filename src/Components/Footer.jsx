import { Link } from "react-router-dom";

import logo from "/assets/footerLogo.png";
import facebook from "/assets/facebook.png";
import instagram from "/assets/instagram.png";
import linkedIn from "/assets/linkedIn.png";

const Footer = () => {
  return (
    <footer className="bg-sectionColor">
      <section className="container mx-auto px-4 py-6">
        <div className="mb-12 flex flex-col lg:flex-row gap-4 lg:justify-between">
          <div className=" flex flex-col items-center lg:items-start gap-4">
            <div>
              <img src={logo} alt="" />
            </div>
            <p className="text-[#F8F9FA] text-center lg:text-left lg:w-[80%]">Relief is an introductory agency pursuant to the Health & Social Care</p>
            <div className="flex items-center gap-8">
              <img className="max-w-[30px]" src={facebook} alt="" />
              <img className="max-w-[30px]" src={instagram} alt="" />
              <img className="max-w-[30px]" src={linkedIn} alt="" />
            </div>
          </div>
          <div>
            <h6 className="uppercase text-[#00B4D8] text-center lg:text-left mb-2 text-lg">Company</h6>
            <ul className="text-center lg:text-left text-[#F8F9FA]">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
              <li>
                <Link to="/live-in-care">Live-In Care</Link>
              </li>
              <li>
                <Link to="/short-term-care">Short-Term Care</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <p className="text-white text-center lg:text-left lg:w-[80%] mb-6">Subscribe to relief emails for expert care and later life advice direct to your inbox.</p>
            <input className="bg-white outline-none w-[80%] rounded-xl p-2 placeholder:text-[#ADB5BD]" placeholder="Enter your Email" type="text" />
            <Link className="capitalize bg-accent hover:bg-red-700 duration-200 text-white py-1 px-10 rounded-xl text-lg font-medium my-4 block w-fit">Subscribe</Link>
          </div>
        </div>
        <p className="text-[#F8F9FA] text-sm text-center lg:text-left">© 2024 Relief. All Rights Reserved.</p>
      </section>
    </footer>
  );
};

export default Footer;
