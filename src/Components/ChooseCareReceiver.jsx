import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import NeedHelp from "./NeedHelp";


const ChooseCareReceiver = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }

  useEffect(() => {
    document.title = "Relief | Choose Care Receiver";
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="container mx-auto px-4 py-16">
      <NeedHelp />
      <div className="flex flex-col items-center justify-center border-2 border-[#BBD0FF] rounded-xl py-24 md:py-[140px] lg:py-[200px] lg:w-[70%] mx-auto px-2">
        <span className="text-[#ADB5BD] font-medium md:text-lg md:text-left md:w-[70%] mb-1">ARRANGE CARE</span>
        <h1 className="font-semibold text-center text-3xl md:text-left md:w-[70%] mb-6">Who are you arranging care for?</h1>
        <Link to="/choose-care-receiver" className="capitalize border mb-4 border-[#8D99AE] hover:border-[#BBD0FF] text-[#8D99AE] hover:text-[#003049] duration-200 py-1 w-[70%] rounded-xl text-xs md:text-lg font-[500] text-center">For Me</Link>
        <Link to="/speak-to-expert" className="capitalize border border-[#8D99AE] hover:border-[#BBD0FF] text-[#8D99AE] hover:text-[#003049] duration-200 py-1 w-[70%] rounded-xl text-xs md:text-lg font-[500] text-center mb-8">For Someone Else</Link>
        <button onClick={goBack} className="capitalize bg-accent hover:bg-red-700 duration-200 text-white py-1 w-[70%] rounded-xl text-xs md:text-lg font-[500] border border-accent text-center">Back</button>
      </div>
    </section>
  )
}

export default ChooseCareReceiver