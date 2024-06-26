import card from "/assets/CreditCard.png";

const LiveInPricing = () => {
  const list = [
    {
      title: "Household tasks",
      text: "vacuuming and laundry",
      image: "/assets/pricing1.png",
    },
    {
      title: "Meal times",
      text: "preparing meals to taste and dietary requirements",
      image: "/assets/pricing2.png",
    },
    {
      title: "Personal care",
      text: "help with washing, toileting, and prompting medication",
      image: "/assets/pricing3.png",
    },
    {
      title: "Companionship",
      text: "daily company, and help getting out and about to see friends",
      image: "/assets/pricing4.png",
    },
    {
      title: "Up to two nightly wake-ups",
      text: "Occasional help with things like getting to the toilet or providing reassurance.",
      image: "/assets/pricing5.png",
    },
  ];

  return (
    <section id="pricing" className="bg-[#F6F3EF]">
      <div className="container mx-auto py-16 px-4 flex flex-col lg:flex-row md:items-center gap-12">
        <div className="md:basis-1/2">
          <h1 className="text-navyColor font-[600] text-4xl md:text-6xl xl:text-[70px] text-center md:text-left mb-4 capitalize">
            Full Time <span className="text-accent">Care</span>
          </h1>
          <p className="text-[#3E5C76] font-medium text-center md:text-left text-lg xl:text-xl lg:w-[83%] hidden lg:block mb-24">The rate below is the usual cost of full-time live-in care for one person. This price should be used as a guide only, as rates are personalised to individual care needs. Call our care advisors for a personalised quote.</p>
          <div className="border border-[#212529] rounded-xl lg:flex items-center justify-between hidden w-[60%] px-3 py-2">
            <div className="flex items-center gap-4 ">
              <img src={card} alt="" />
              <span className="text-[#003049] font-medium text-xl capitalize">per month</span>
            </div>
            <span className="text-[#3E5C76] font-medium text-[25px]">2000 EGP</span>
          </div>
        </div>
        <div className="md:basis-1/2 flex flex-col gap-6">
          {list.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center gap-4 md:gap-12 bg-[#FFFFFC] rounded-xl p-3">
              <img src={item.image} alt="" />
              <div>
                <h6 className="text-pColor font-medium text-xl text-center md:text-left">{item.title}</h6>
                <p className="text-[#8D99AE] font-medium text-center md:text-left capitalize">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="border border-[#212529] rounded-3xl lg:hidden items-center justify-between flex px-3 py-1 min-w-[290px]">
          <div className="flex items-center gap-4 ">
            <img src={card} alt="" />
            <span className="text-[#003049] font-medium text-xl capitalize">per month</span>
          </div>
          <span className="text-[#3E5C76] font-medium text-[25px]">2000 EGP</span>
        </div>
      </div>
    </section>
  );
};

export default LiveInPricing;
