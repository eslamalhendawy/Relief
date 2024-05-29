import { Link } from "react-router-dom";

const Expert = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="bg-cover bg-center rounded-xl hidden md:block xl:bg-fixed" style={{ backgroundImage: `url("/assets/expertBG.png")` }}>
        <div className="flex justify-center pb-[100px] pt-[400px] xl:pt-[600px]">
          <Link to="/speak-to-expert" className="capitalize bg-accent hover:bg-red-700 duration-200 text-white py-1 px-12 rounded-xl text-lg border border-accent">Speak To An Expert</Link>
        </div>
      </div>
      <div className="bg-cover bg-center rounded-xl md:hidden" style={{ backgroundImage: `url("/assets/expertBGMobile.png")` }}>
        <div className="flex justify-center pb-[50px] pt-[450px] xl:pt-[600px]">
          <Link to="/speak-to-expert" className="capitalize bg-accent hover:bg-red-700 duration-200 text-white py-1 px-12 rounded-xl text-lg border border-accent">Speak To An Expert</Link>
        </div>
      </div>
    </section>
  );
};

export default Expert;
