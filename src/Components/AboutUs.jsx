import { useEffect } from "react";
import { useAppContext } from "../Context/AppContext";
import { Link } from "react-router-dom";

import Features from "./Features";

import heroImage from "/assets/hero.png";
import about1 from "/assets/aboutUs1.png";
import about2 from "/assets/aboutUs2.png";
import about3 from "/assets/aboutUs3.png";
import Footer from "./Footer";

const AboutUs = () => {
  const { userData } = useAppContext();
  
  useEffect(() => {
    document.title = "Relief | About Us";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="container mx-auto px-4 py-12 flex gap-6 xl:gap-12 flex-col md:flex-row items-center">
        <div className="md:basis-1/2">
          <h1 className="text-navyColor font-[600] text-4xl md:text-6xl xl:text-[90px] text-center md:text-left mb-8 capitalize">
            <span className="text-accent">Why</span> relief?
          </h1>
          <p className="text-[#3E5C76] font-[500] text-center md:text-left mb-4 lg:mb-24 text-lg xl:text-xl">Find out what makes us different, and how we can help, no matter where you are in your journey.</p>
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <Link to={userData.loggedIn ? "/get-started" : "/login"} className="capitalize bg-accent hover:bg-red-700 duration-200 text-white py-2 px-6 rounded-xl text-lg font-[500] border border-accent">get started online</Link>
            <Link to="/speak-to-expert" className="capitalize border border-[#8D99AE] hover:border-navyColor text-[#8D99AE] hover:text-navyColor duration-200 py-2 px-6 rounded-xl text-lg font-[500]">speak to an expert</Link>
          </div>
        </div>
        <div className="md:basis-1/2">
          <img src={heroImage} alt="" />
        </div>
      </section>
      <Features />
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-navyColor font-semibold text-2xl text-center mb-6 md:text-left md:text-5xl capitalize">We understand every care story is personal, because ours is no different.</h2>
        <p className="text-pColor font-medium text-lg text-center md:text-left md:w-[90%] mb-6">The elder care system is a crucial component of any society, reflecting its values and commitments to its older population. As demographics shift towards an aging population globally, the importance of robust elder care systems becomes increasingly evident. These systems encompass a wide range of services and support mechanisms designed to ensure the well-being, dignity, and quality of life of elderly individuals.</p>
        <h2 className="text-navyColor font-semibold text-2xl text-center mb-6 md:text-left md:text-5xl capitalize">Our mission</h2>
        <p className="text-pColor font-medium text-lg text-center md:text-left mb-8">Our mission is to reinvent what it means to age. To change conversations and perceptions, so that getting older doesn’t mean giving up choice, independence, or the things that make us who we are.</p>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <img className="" src={about1} alt="" />
          <div>
            <h3 className="text-navyColor font-semibold text-2xl text-center mb-6 md:text-left md:text-5xl capitalize">seeking excellence</h3>
            <p className="text-pColor font-medium text-lg text-center md:text-left xl:w-[85%]">We’re always seeking excellence – We raise the bar, break the mould, and commit to solving complex problems for customers, caregivers, and partners.</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div>
            <h3 className="text-navyColor font-semibold text-2xl text-center mb-6 md:text-left md:text-5xl capitalize">together</h3>
            <p className="text-pColor font-medium text-lg text-center md:text-left xl:w-[85%]">We do this by coming together. We’re powered by insight, ambition and purpose. We work together at pace, and ensure everyone has a voice.</p>
          </div>
          <img className="" src={about2} alt="" />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <img className="" src={about3} alt="" />
          <div>
            <h3 className="text-navyColor font-semibold text-2xl text-center mb-6 md:text-left md:text-5xl capitalize">change society</h3>
            <p className="text-pColor font-medium text-lg text-center md:text-left xl:w-[85%]">And, we’re passionate about supporting people in their own homes as they age. We value those who care, and we’re working to change society for the better.</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
