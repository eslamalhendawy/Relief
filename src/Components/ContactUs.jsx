import heroImage from "/assets/hero.png";
import phone from "/assets/phone.png"

const ContactUs = () => {
  return (
    <section className="container mx-auto px-4 py-12 flex gap-6 xl:gap-12 flex-col md:flex-row items-center">
      <div className="md:basis-1/2">
        <h1 className="text-navyColor font-[600] text-4xl md:text-6xl xl:text-[90px] text-center md:text-left mb-8 capitalize">
          <span className="text-accent">Get</span> in touch
        </h1>
        <p className="text-[#3E5C76] font-[500] text-center md:text-left mb-4 lg:mb-24 text-lg xl:text-xl">We’re open 8am-6pm on weekdays and 9am-5pm on weekends.</p>
        <div className="border border-[#BBD0FF] py-3 px-24 w-fit rounded-xl">
          <h2 className="text-center text-accent font-semibold text-2xl mb-2">Call Us On</h2>
          <div className="flex items-center justify-center">
            <img className="size-[32px]" src={phone} alt="" />
            <p className="w-fit text-navyColor font-medium text-xl">01028293040</p>
          </div>
        </div>
      </div>
      <div className="md:basis-1/2">
        <img src={heroImage} alt="" />
      </div>
    </section>
  );
};

export default ContactUs;
