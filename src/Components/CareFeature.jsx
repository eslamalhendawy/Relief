
const CareFeature = () => {
  const list = [
    {
      title: "Unlimited carer matching",
      text: "Using our technology and expertise, we’ll uniquely match you to carers with the right experience, skills and character.",
      image: "/assets/feature1.png",
    },
    {
      title: "Emergency support",
      text: "We can put care in place in as little as 24 hours if your needs are urgent",
      image: "/assets/feature2.png",
    },
    {
      title: "On-going family support",
      text: "You’ll have your own Family Support Specialist who’ll understand you, your family and your situation",
      image: "/assets/feature3.png",
    },
    {
      title: "Your own Myrelief account",
      text: "an intuitive online account where you and your family can manage every aspect of care and access carer information.",
      image: "/assets/feature4.png",
    },
  ];

  return (
    <section className="bg-sectionColor py-12 px-4">
      <h3 className="text-center text-white font-bold mb-8 text-3xl capitalize">
        Care with Elder will always include<span className="hidden md:inline">...</span>
      </h3>
      <div className="container mx-auto text-[#E9ECEF] flex flex-col lg:flex-row gap-8">
        {list.map((item, index) => (
          <div key={index} className="flex flex-col items-center basis-1/4">
            <img src={item.image} alt="" />
            <h2 className="text-[#DEE2E6] font-[600] text-lg mt-2 mb-4 text-center capitalize">{item.title}</h2>
            <p className="text-center xl:w-[70%] mx-auto">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareFeature;
