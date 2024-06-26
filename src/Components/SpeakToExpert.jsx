import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import NeedHelp from "./NeedHelp";

import phone from "/assets/phone.png";

const SpeakToExpert = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    document.title = "Relief | Speak To An Expert";
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="container mx-auto px-4 py-16">
      <NeedHelp />
      <div className="flex flex-col items-center justify-center border-2 border-[#BBD0FF] rounded-xl py-24 md:py-[140px] lg:py-[200px] lg:w-[70%] mx-auto px-2">
        <p className="text-center text-[#003049] font-semibold text-xl lg:text-2xl mb-6">
          Get in touch <br /> Speak to an expert care advisor or book an appointment
        </p>
        <div className="border border-[#BBD0FF] py-3 px-12 md:px-24 w-fit rounded-xl mb-6">
          <h2 className="text-center text-accent font-semibold text-2xl mb-2">Call Us On</h2>
          <div className="flex items-center justify-center">
            <img className="size-[32px]" src={phone} alt="" />
            <p className="w-fit text-navyColor font-medium text-xl">01028293040</p>
          </div>
        </div>
        <button onClick={goBack} className="text-[#00B4D8] font-medium text-xl">
          Back
        </button>
      </div>
    </section>
  );
};

export default SpeakToExpert;
