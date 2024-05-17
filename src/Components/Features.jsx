import check from "/assets/SealCheck.png";
import clock from "/assets/Clock.png";
import strategy from "/assets/Strategy.png"; 
import dollar from "/assets/Money.png";

const Features = () => {
  return (
    <section className='bg-sectionColor'> 
      <div className='container mx-auto px-4 py-12 text-[#E9ECEF] flex flex-col lg:flex-row gap-8'>
        <div className="flex flex-col items-center">
          <img src={check} alt="" />
          <h4 className="text-[#DEE2E6] font-[600] text-lg mt-2 mb-4 text-center">More Choice</h4>
          <p className="text-center xl:w-[70%] mx-auto">Choose your carer from our 5000+ community, and manage care easily with your my elder account.</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={clock} alt="" />
          <h4 className="text-[#DEE2E6] font-[600] text-lg mt-2 mb-4 text-center">More Control</h4>
          <p className="text-center xl:w-[70%] mx-auto">Whether you need care in 24 hours, or are planning ahead, we can help you take control.</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={strategy} alt="" />
          <h4 className="text-[#DEE2E6] font-[600] text-lg mt-2 mb-4 text-center">More Support</h4>
          <p className="text-center xl:w-[70%] mx-auto">Our support specialists and clinical team are here to listen, guide, and empower 7 days a week.</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={dollar} alt="" />
          <h4 className="text-[#DEE2E6] font-[600] text-lg mt-2 mb-4 text-center">More Value</h4>
          <p className="text-center xl:w-[70%] mx-auto">No surcharges, no hidden costs, and no joining fees just truly personalised care.</p>
        </div>
      </div>
    </section>
  )
}

export default Features