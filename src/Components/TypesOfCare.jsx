import type1 from "/assets/type1.png";
import type2 from "/assets/type2.png";
import type3 from "/assets/type3.png";
import share from "/assets/share.png";

const TypesOfCare = () => {
  return (
    <section className="bg-[#f6f3ef]">
      <div className="container mx-auto px-4">
        <h4 className="text-navyColor text-center font-bold text-4xl lg:text-6xl pt-24 pb-12">
          Care with <span className="text-accent">R</span>elief
        </h4>
        <div className="flex flex-col lg:flex-row items-stretch gap-8 xl:gap-16 mb-24">
          <div className="flex flex-col lg:basis-1/2">
            <div className="bg-white p-4 rounded-t-xl">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-2xl lg:text-4xl text-navyColor capitalize">Live-in care</h4>
                <img src={share} alt="" className="cursor-pointer" />
              </div>
              <p className="text-pColor text-[16px] h-[80px] mb-12 sm:mb-0">Getting older shouldn’t mean giving up the things that make you who you are. Live-in care can help you keep the life you know, all while getting the care you need.</p>
            </div>
            <div className="w-full">
              <img className="w-full" src={type1} alt="" />
            </div>
          </div>
          <div className="flex flex-col lg:basis-1/2 h-full">
            <div className="bg-white p-4 rounded-t-xl">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-2xl lg:text-4xl text-navyColor capitalize">short-term care</h4>
                <img src={share} alt="" className="cursor-pointer" />
              </div>
              <p className="text-pColor text-[16px] h-[80px] mb-4 sm:mb-0">When you need temporary care, Elder can connect you with a fully-vetted carer who you can trust to care the way you would.</p>
            </div>
            <div className="w-full">
              <img className="w-full" src={type2} alt="" />
            </div>
          </div>
        </div>
        <h4 className="text-center text-navyColor font-bold text-4xl lg:text-6xl mb-8">Supports that Old Care Provided</h4>
        <h5 className="capitalize text-pColor font-medium text-center text-2xl lg:text-4xl mb-8">Daily personal activities & mental support</h5>
        <p className="capitalize mb-8 text-center md:w-[70%] xl:w-[50%] mx-auto text-[#8D99AE] text-lg xl:text-xl">Mental health and psychosocial support includes any support that people receive to protect or promote their mental health and psychosocial wellbeing. One major component is treatment and prevention of psychiatric disorders.</p>
        <div className="flex justify-center">
          <img className="lg:max-w-[70%] xl:max-w-[50%]" src={type3} alt="" />
        </div>
      </div>
    </section>
  );
};

export default TypesOfCare;
