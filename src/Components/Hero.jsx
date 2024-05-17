import heroImage from "/assets/hero.png"

const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-12 flex gap-6 flex-col md:flex-row items-center">
      <div className="md:basis-1/2">
        <h1 className="text-navyColor font-[600] text-4xl md:text-6xl lg:text-8xl text-center md:text-left mb-4 capitalize">keep living hope still <span className="text-accent">alive</span></h1>
        <p className="text-[#3E5C76] font-[500] text-center md:text-left mb-4 text-lg">Elders desire a life with good health, dignity, economic independence and finally a peaceful death. Understanding their needs and concerns, will ensure their good health.</p>
        <ul className="text-center flex flex-col gap-4">
          <li>
            <span className="font-[600] text-xl text-navyColor">650</span>
            <p className="text-[#8D99AE] text-lg capitalize">happy customer</p>
          </li>
          <li>
            <span className="font-[600] text-xl text-navyColor">400+</span>
            <p className="text-[#8D99AE] text-lg capitalize">Specialists</p>
          </li>
          <li>
            <span className="font-[600] text-xl text-navyColor">205</span>
            <p className="text-[#8D99AE] text-lg capitalize">award winning </p>
          </li>
        </ul>
      </div>
      <div className="md:basis-1/2">
        <img src={heroImage} alt="" />
      </div>
    </section>
  )
}

export default Hero