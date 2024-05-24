import { useEffect } from "react";

import CareHero from "./CareHero";
import CareNavigation from "./CareNavigation";
import Overview from "./Overview";
import CareFeature from "./CareFeature"
import HowItWorks from "./HowItWorks"
import CareBenefits from "./CareBenefits";
import LiveInPricing from "./LiveInPricing";
import CallAdvisor from "./CallAdvisor";

const LiveInCare = () => {
  useEffect(() => {
    document.title = "Relief | Live-In Care";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <CareHero headerNavy="live-in" headerRed="care" pTag="Getting older shouldn’t mean giving up the things that make you who you are. Live-in care can help you keep the life you know, all while getting the care you need." />
      <CareNavigation />
      <Overview headerRed="Live" headerNavy="later life your way" pTag="ive-in care gives people the choice to be cared for in their own homes. We’ll help you find an experienced and trusted carer who’ll move in, get to know you and how you like things, and provide truly personalized care." />
      <CareFeature />
      <HowItWorks showP={false} />
      <div className="flex justify-center mb-6 lg:mb-12">
        <button className="capitalize bg-accent hover:bg-red-700 duration-200 text-white py-2 px-6 rounded-xl text-lg font-[500] border border-accent">Get Started</button>
      </div>
      <CareBenefits />
      <LiveInPricing />
      <CallAdvisor />
    </>
  );
};

export default LiveInCare;
