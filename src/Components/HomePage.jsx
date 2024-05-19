import { useEffect } from "react";

import Hero from "./Hero";
import Features from "./Features";
import CareSection from "./CareSection";
import TypesOfCare from "./TypesOfCare";
import Recommendations from "./Recommendations";
import HowItWorks from "./HowItWorks";
import Benefits from "./Benefits";

const HomePage = () => {
  useEffect(() => {
    document.title = "Relief";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <Features />
      <CareSection />
      <TypesOfCare />
      <Recommendations />
      <HowItWorks />
      <Benefits />
    </>
  );
};

export default HomePage;
