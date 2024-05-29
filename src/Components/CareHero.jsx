import { useAppContext } from "../Context/AppContext";
import { Link } from "react-router-dom";

import heroImage from "/assets/careHero.png"

const CareHero = ({headerNavy, headerRed, pTag}) => {
  const { userData } = useAppContext();

  return (
    <section className="container mx-auto px-4 py-12 flex gap-6 xl:gap-12 flex-col md:flex-row items-center">
      <div className="md:basis-1/2">
        <h1 className="text-navyColor font-[600] text-4xl md:text-6xl xl:text-[90px] text-center md:text-left mb-4 capitalize">{headerNavy} <span className="text-accent">{headerRed}</span></h1>
        <p className="text-[#3E5C76] font-[500] text-center md:text-left mb-4 lg:mb-24 text-lg xl:text-xl">{pTag}</p>
        <div className="flex flex-col lg:flex-row items-center gap-6">
            <Link to={userData.loggedIn ? "/get-started" : "/login"} className="capitalize bg-accent hover:bg-red-700 duration-200 text-white py-2 px-6 rounded-xl text-lg font-[500] border border-accent">get started online</Link>
            <Link to="/speak-to-expert" className="capitalize border border-[#8D99AE] hover:border-navyColor text-[#8D99AE] hover:text-navyColor duration-200 py-2 px-6 rounded-xl text-lg font-[500]">speak to an expert</Link>
          </div>
      </div>
      <div className="md:basis-1/2">
        <img src={heroImage} alt="" />
      </div>
    </section>
  )
}

export default CareHero