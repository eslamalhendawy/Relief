import { useEffect } from "react";

import CareHero from "./CareHero";
import CareNavigation from "./CareNavigation";

const LiveInCare = () => {
  useEffect(() => {
    document.title = "Relief | Live In Care";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <CareHero headerNavy="live-in" headerRed="care" pTag="Getting older shouldn’t mean giving up the things that make you who you are. Live-in care can help you keep the life you know, all while getting the care you need." />
      <CareNavigation />
    </>
  );
};

export default LiveInCare;
