import check from "/assets/check.png"

const CareBenefits = () => {
  const list = [
    {
      image: "/assets/careBenefits1.png",
      text: "No surcharges on Holidays or weekends",
      odd: true,
    },
    {
      image: "/assets/careBenefits2.png",
      text: "A one week trial period Cancel care anytime in the first 7 days",
      odd: false,
    },
    {
      image: "/assets/careBenefits3.png",
      text: "An agreed weekly rate, with no unexpected extra costs",
      odd: true,
    },
    {
      image: "/assets/careBenefits4.png",
      text: "No lengthy contracts We only require a two week notice period",
      odd: false,
    },
    {
      image: "/assets/careBenefits5.png",
      text: "No exit fees",
      odd: true,
    },
    {
      image: "/assets/careBenefits6.png",
      text: "Up to 2x nightly wake-ups included",
      odd: false,
    },
  ]

  return (
    <section id="benefits" className='container mx-auto px-4 py-12'>
      <h4 className='text-navyColor text-center font-bold text-4xl lg:text-6xl capitalize mb-12'>The benefits of choosing relief</h4>
      <div className="flex flex-col gap-3">
        {list.map((item, index) => (
          <div className={`flex items-center justify-between gap-2 p-3 rounded-2xl ${item.odd && "bg-[#F6F3EF]"}`} key={index}>
            <div className="flex items-center gap-2">
              <img className="size-[40px]" src={item.image} alt="" />
              <p className="text-navyColor font-medium text-sm md:text-xl capitalize">{item.text}</p>
            </div>
            <img className="size-[40px]" src={check} alt="" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default CareBenefits