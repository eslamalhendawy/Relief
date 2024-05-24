import overview1 from "/assets/overview1.png"
import overview2 from "/assets/overview2.png"
import overview3 from "/assets/overview3.png"
import overview4 from "/assets/overview4.png"

const Overview = ({ headerRed, headerNavy, pTag }) => {
  const list = [
    {
      text: "Only pay for the care you need with our simple pricing structure",
      image: "/assets/overview1.png",
    },
    {
      text: "Choose your carer from a network of friendly, independent carers",
      image: "/assets/overview2.png",
    },
    {
      text: "Easily manage your care within your Myrelief account",
      image: "/assets/overview3.png",
    },
    {
      text: "Receive guidance from a dedicated Family Support Specialist",
      image: "/assets/overview4.png",
    },
  ]


  return (
    <section id="overview" className="bg-[#F6F3EF]">
      <div className="container mx-auto py-16 px-4 flex flex-col md:flex-row md:items-center gap-12">
        <div className="md:basis-1/2">
          <h1 className="text-navyColor font-[600] text-4xl md:text-6xl xl:text-[70px] text-center md:text-left mb-4 capitalize">
            <span className="text-accent">{headerRed}</span> {headerNavy}
          </h1>
          <p className="text-[#3E5C76] font-medium text-center md:text-left text-lg xl:text-xl lg:w-[83%]">{pTag}</p>
        </div>
        <div className="md:basis-1/2 flex flex-col items-center gap-6">
          {list.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center gap-2 bg-[#FFFFFC] rounded-xl w-fit py-2 px-3">
              <img src={item.image} alt="" />
              <p className="text-[#3E5C76] font-medium max-w-[350px] text-center md:text-left capitalize">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;
