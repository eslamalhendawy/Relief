import { useEffect } from "react";

import Footer from "./Footer";
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
      <HowItWorks showP={true} />
      <Benefits />
      <Footer />
    </>
  );
};

export default HomePage;
