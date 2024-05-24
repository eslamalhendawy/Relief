import cardLogo from "/assets/cardLogo.png";
import check from "/assets/hollowCheck.png";

const ReliefCost = () => {
  return (
    <section className="bg-[#f6f3ef]">
      <div className="container mx-auto px-4 py-16">
        <h4 className="text-navyColor text-center font-bold text-4xl lg:text-6xl capitalize mb-12">The cost of care at relief</h4>
        <p className="text-center text-pColor font-medium text-lg lg:text-xl sm:w-[70%] mx-auto mb-8 hidden lg:block">The rates below are the usual costs of care for one person. Funding advice is also available from Relief at no extra cost.</p>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="bg-white px-4 py-6 rounded-xl">
            <div className="flex items-center gap-4 mb-6">
              <img src={cardLogo} alt="" />
              <h5 className="text-navyColor font-semibold text-3xl lg:text-4xl">Full Time Care</h5>
            </div>
            <span className="text-[#8D99AE] text-lg">From</span>
            <p className="text-[#0096C7] font-medium text-2xl mb-6">
              1999 EGP <span className="text-[#8D99AE] text-sm font-base">p/w</span>
            </p>
            <p className="text-pColor text-[20px] mb-4">Full time care (also called live-in care) gives people the choice to be cared for in their own homes. Full time care includes: </p>
            <ul className="text-navyColor flex flex-col gap-4 mb-6">
              <li className="flex items-center gap-2">
                <img src={check} alt="" />
                <p className="font-medium text-[20px]">One week trial</p>
              </li>
              <li className="flex items-center gap-2">
                <img src={check} alt="" />
                <p className="font-medium text-[20px]">No weekend or bank holiday surcharge</p>
              </li>
              <li className="flex items-center gap-2">
                <img src={check} alt="" />
                <p className="font-medium text-[20px]">2x nightly wake-ups included</p>
              </li>
              <li className="flex items-center gap-2">
                <img src={check} alt="" />
                <p className="font-medium text-[20px]">No lengthy contracts</p>
              </li>
              <li className="flex items-center gap-2">
                <img src={check} alt="" />
                <p className="font-medium text-[20px]">No joining fees </p>
              </li>
            </ul>
            <button className="capitalize bg-accent hover:bg-red-700 duration-200 text-white py-1 px-12 rounded-xl text-lg border border-accent">Get Started</button>
          </div>
          <div className="bg-white px-4 py-6 rounded-xl">
            <div className="flex items-center gap-4 mb-6">
              <img src={cardLogo} alt="" />
              <h5 className="text-navyColor font-semibold text-3xl lg:text-4xl capitalize">short-term care</h5>
            </div>
            <div className="flex items-center gap-6">
              <div>
                <span className="text-[#8D99AE] text-lg">3 Days From</span>
                <p className="text-[#0096C7] font-medium text-2xl mb-6">650 EGP</p>
              </div>
              <div>
                <span className="text-[#8D99AE] text-lg">From</span>
                <p className="text-[#0096C7] font-medium text-2xl mb-6">
                  1400 EGP <span className="text-[#8D99AE] text-sm font-base">p/w</span>
                </p>
              </div>
            </div>
            <p className="text-pColor text-[20px] mb-4">Relief can arrange short-term respite care for shorter periods. A carer will move into the home and provide expert care.</p>
            <ul className="text-navyColor flex flex-col gap-4 mb-6">
              <li className="flex items-center gap-2">
                <img src={check} alt="" />
                <p className="font-medium text-[20px]">Fast turnaround</p>
              </li>
              <li className="flex items-center gap-2">
                <img src={check} alt="" />
                <p className="font-medium text-[20px]">No weekend or bank holiday surcharge</p>
              </li>
              <li className="flex items-center gap-2">
                <img src={check} alt="" />
                <p className="font-medium text-[20px]">2x nightly wake-ups included</p>
              </li>
              <li className="flex items-center gap-2">
                <img src={check} alt="" />
                <p className="font-medium text-[20px]">No lengthy contracts</p>
              </li>
              <li className="flex items-center gap-2">
                <img src={check} alt="" />
                <p className="font-medium text-[20px]">No joining fees </p>
              </li>
            </ul>
            <button className="capitalize bg-accent hover:bg-red-700 duration-200 text-white py-1 px-12 rounded-xl text-lg border border-accent">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReliefCost;
