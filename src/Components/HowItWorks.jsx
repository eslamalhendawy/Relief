const HowItWorks = ({ showP }) => {
  const list = [
    {
      image: "/assets/hiw1.png",
      firstLine: "Tell us what you need",
      special: "firstly",
      paragraph: "Give us a call or get started online. We'll ask you some simple questions and based on your answers we'll begin to match you with carers over the next 24 hours, for you to review in your MyRelief account.",
    },
    {
      image: "/assets/hiw2.png",
      firstLine: "Shape your solution",
      special: "secondly",
      paragraph: "Complete your care profile this allows our clinical team to confirm whether care can go ahead safely. At this step you'll also receive details of the most suitable carers.",
    },
    {
      image: "/assets/hiw3.png",
      firstLine: "Stay in control",
      special: "Thirdly",
      paragraph: "Once care is in place you and your family can manage it from anywhere with your MyRelief account. And if you ever need to speak to someone, you'll be assigned your own Family Support Specialist who'll happily answer any questions.",
    },
  ];

  return (
    <section id="howItWorks" className="container mx-auto py-24 px-4">
      <h4 className={`text-navyColor text-center font-bold text-4xl lg:text-6xl capitalize ${showP ? "mb-8" : "mb-24"}`}>how it works</h4>
      {showP && <p className="text-center text-pColor font-medium text-lg lg:text-xl sm:w-[70%] xl:w-[50%] mx-auto mb-8">Combining care expertise and intuitive online tools, we’ll work with you to make arranging care as smooth as possible.</p>}
      <div className="flex flex-col lg:flex-row items-center gap-8 xl:gap-20">
        {list.map((item, index) => (
          <div className="flex flex-col lg:basis-1/3 max-w-[500px]" key={index}>
            <img className="" src={item.image} alt="" />
            <div className="bg-[#F6F3EF] p-4 rounded-b-xl lg:h-[300px] xl:h-[265px] 2xl:h-[240px]">
              <h5 className="text-navyColor font-semibold text-2xl mb-3 text-center lg:text-left">{item.firstLine}</h5>
              <p className="capitalize text-[#8D99AE] font-medium text-lg text-center lg:text-left">
                <span className="text-navyColor">{item.special} </span>
                {item.paragraph}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
