import { useAppContext } from "../Context/AppContext";
import { Link } from "react-router-dom";

import benefits1 from "/assets/benefits1.png";
import benefits2 from "/assets/benefits2.png";
import benefits3 from "/assets/benefits3.png";

const Benefits = () => {
  const { userData } = useAppContext();
  const role = localStorage.getItem("role");

  return (
    <section className="bg-[#f6f3ef] py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center md:flex-row gap-8 mb-8">
          <div className="basis-1/2">
            <h5 className="text-navyColor font-semibold text-2xl md:text-4xl lg:text-6xl xl:text-7xl text-center md:text-left mb-6 capitalize">We’ve provided home care to over 20 towns and cities across egypt</h5>
            <p className="text-[#8D99AE] text-lg lg:text-xl mb-8 capitalize text-center md:text-left">Whether you’re looking for long-term live-in care or respite care, we’ll connect you to trusted Egyptians carers with the right skills and experience.</p>
            {role === "carer" ? null : (
              <Link to={userData.loggedIn ? "/get-started" : "/login"} className="capitalize bg-accent hover:bg-red-700 duration-200 text-white py-2 px-6 rounded-xl text-lg font-medium block w-fit mx-auto md:mx-0">
                find care near you
              </Link>
            )}
          </div>
          <div className="basis-1/2 xl:max-w-[550px] xl:mx-auto">
            <img className="" src={benefits1} alt="" />
          </div>
        </div>
        <div className={`flex flex-col lg:flex-row items-stretch gap-8 xl:gap-16 ${!userData.loggedIn && "2xl:justify-center"}`}>
          {!userData.loggedIn && (
            <div className="flex flex-col lg:basis-1/2 xl:max-w-[650px]">
              <div className="w-full">
                <img className="w-full" src={benefits2} alt="" />
              </div>
              <div className="bg-white p-4 rounded-b-xl">
                <span className="text-pColor text-xs">FOR CARERS</span>
                <h4 className="font-semibold text-2xl lg:text-4xl text-navyColor capitalize mb-6">Become a Carer</h4>
                <p className="text-pColor text-[16px] mb-12 lg:h-[120px] xl:h-[96px] 2xl:h-[72px]">Are you looking for an opportunity to transform the life of an older person? As a self-employed carer with relief, you can build a career that works for you, while accessing exclusive third-party rewards and support from a dedicated team</p>
                <Link to="carer-sign-up" className="capitalize bg-accent hover:bg-red-700 duration-200 text-white py-2 px-6 rounded-xl text-lg font-medium mb-4 block w-fit">
                  apply now
                </Link>
              </div>
            </div>
          )}
          <div className="flex flex-col lg:basis-1/2 h-full xl:max-w-[650px]">
            <div className="w-full">
              <img className="w-full" src={benefits3} alt="" />
            </div>
            <div className="bg-white p-4 rounded-b-xl">
              <span className="text-pColor text-xs">FOR BUSINESS</span>
              <h4 className="font-semibold text-2xl lg:text-4xl text-navyColor capitalize mb-6">Work with relief</h4>
              <p className="text-pColor text-[16px] mb-12">Arranging care can be challenging – from understanding all the options, to getting legal affairs and funding in order. Join our care network and together, we can provide older people with the right care, at the right time – while providing the right support too.</p>
              <Link className="capitalize bg-accent hover:bg-red-700 duration-200 text-white py-2 px-6 rounded-xl text-lg font-medium mb-4 block w-fit">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
