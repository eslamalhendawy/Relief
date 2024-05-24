import CareHero from "./CareHero";
import Features from "./Features";
import ReliefCost from "./ReliefCost";
import CareBenefits from "./CareBenefits";
import CareFeature from "./CareFeature";
import Expert from "./Expert";

const Pricing = () => {
  return (
    <>
      <CareHero headerNavy="Relief" headerRed="Pricing" pTag="At relief you can invest in quality care, without the hidden costs or fixed-term contracts." />
      <Features />
      <ReliefCost />
      <CareBenefits />
      <CareFeature />
      <Expert />
    </>
  )
}

export default Pricing