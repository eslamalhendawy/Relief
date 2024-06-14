import { useEffect } from "react";
import { Link } from "react-router-dom";

import NeedHelp from "./NeedHelp";

import image from "/assets/getStarted.png";

const GetStarted = () => {
  useEffect(() => {
    document.title = "Relief | Get Started";
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="container mx-auto px-4 py-16">
      {/* <NeedHelp /> */}
      <div className="flex flex-col items-center justify-center border-2 border-[#BBD0FF] rounded-xl py-12  lg:w-[70%] mx-auto px-2">
        <img src={image} alt="" />
        <h1 className="font-semibold text-3xl md:text-5xl md:text-left md:w-[70%] mb-2">Let's get started</h1>
        <span className="text-[#ADB5BD] font-medium md:text-lg md:text-left md:w-[70%] mb-4">live-in care plan</span>
        <Link to="/for-me" className="capitalize border mb-4 border-[#8D99AE] hover:border-[#BBD0FF] text-[#8D99AE] hover:text-[#003049] duration-200 py-1 w-[70%] rounded-xl text-xs md:text-lg font-[500] text-center">I want to arrange care</Link>
        <Link to="/speak-to-expert" className="capitalize bg-accent hover:bg-red-700 duration-200 text-white py-1 w-[70%] rounded-xl text-xs md:text-lg font-[500] border border-accent text-center">I want to speak to a care expert</Link>
      </div>
    </section>
  );
};

export default GetStarted;

