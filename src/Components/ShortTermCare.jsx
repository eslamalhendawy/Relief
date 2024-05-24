import { useEffect } from "react";

import CareHero from "./CareHero";
import CareNavigation from "./CareNavigation";
import Overview from "./Overview";
import CareFeature from "./CareFeature";
import HowItWorks from "./HowItWorks";
import CareBenefits from "./CareBenefits";
import ShortTermPricing from "./ShortTermPricing";
import CallAdvisor from "./CallAdvisor";

const ShortTermCare = () => {
  useEffect(() => {
    document.title = "Relief | Short-Term Care";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <CareHero headerNavy="short-term" headerRed="care" pTag="When you need temporary care, relief can connect you with a fully-vetted carer who you can trust to care the way you would." />
      <CareNavigation />
      <Overview headerRed="take" headerNavy="a breather with temporary care" pTag="Elder can arrange short-term respite care for a few days to a few weeks. A fully vetted carer will move into the home, provide care, and maintain a routine in the same way you would." />
      <CareFeature />
      <HowItWorks showP={false} />
      <div className="flex justify-center mb-6 lg:mb-12">
        <button className="capitalize bg-accent hover:bg-red-700 duration-200 text-white py-2 px-6 rounded-xl text-lg font-[500] border border-accent">Get Started</button>
      </div>
      <CareBenefits />
      <ShortTermPricing />
      <CallAdvisor />
    </>
  );
};

export default ShortTermCare;
