import { useEffect } from "react";

import CareHero from "./CareHero";

const ShortTermCare = () => {

  useEffect(() => {
    document.title = "Relief | Live In Care";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <CareHero headerNavy="short-term" headerRed="care" pTag="When you need temporary care, relief can connect you with a fully-vetted carer who you can trust to care the way you would." />
    </>
  )
}

export default ShortTermCare