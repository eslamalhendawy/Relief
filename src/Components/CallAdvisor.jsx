import { Link } from "react-router-dom";
import advisor from "/assets/advisor.png";

const CallAdvisor = () => {
  return (
    <section className="bg-[#669BBC]">
      <div className="hidden lg:block container mx-auto px-4 py-12 text-white text-center">
        <div className="flex justify-center mb-8">
          <img src={advisor} alt="" />
        </div>
        <h6 className="font-bold text-[45px] mb-4 capitalize">Why not discuss your needs with an Elder care advisor?</h6>
        <p className="text-[25px] font-medium mb-6">Click the button below to Give us a call, We’re here for you seven days a week.</p>
        <div>
          <Link to="/contact-us" className="capitalize bg-accent hover:bg-red-700 duration-200 text-white py-2 px-8 rounded-xl text-lg font-[500] border border-accent">Call Us</Link>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12 lg:hidden text-white text-center">
        <h6 className="font-bold text-[30px] mb-4 capitalize">discuss with an advisor</h6>
        <Link to="/contact-us" className="capitalize bg-accent hover:bg-red-700 duration-200 text-white py-1 px-8 rounded-xl text-lg font-[500] border border-accent">Call Us</Link>
      </div>
    </section>
  );
};

export default CallAdvisor;
