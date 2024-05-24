const CareNavigation = () => {
  return (
    <section className='bg-[#F6F3EF] px-6'>
      <div className='bg-sectionColor p-4 mx-auto rounded-b-xl rounded-t-xl md:rounded-t-none overflow-scroll md:overflow-hidden md:w-fit'>
        <ul className='flex items-center md:justify-center gap-4'>
          <li className='border border-[#8D99AE]  hover:border-[#BBD0FF] text-center text-[#8D99AE] hover:text-[#BBD0FF] duration-200 cursor-pointer rounded-xl w-fit py-1 px-4 text-nowrap'>
            <a href="#overview">Overview</a>
          </li>
          <li className='border border-[#8D99AE]  hover:border-[#BBD0FF] text-center text-[#8D99AE] hover:text-[#BBD0FF] duration-200 cursor-pointer rounded-xl w-fit py-1 px-4 text-nowrap'>
            <a href="#howItWorks">How It Works</a>
          </li>
          <li className='border border-[#8D99AE]  hover:border-[#BBD0FF] text-center text-[#8D99AE] hover:text-[#BBD0FF] duration-200 cursor-pointer rounded-xl w-fit py-1 px-4 text-nowrap'>
            <a href="#benefits">Benefits Of Relief</a>
          </li>
          <li className='border border-[#8D99AE]  hover:border-[#BBD0FF] text-center text-[#8D99AE] hover:text-[#BBD0FF] duration-200 cursor-pointer rounded-xl w-fit py-1 px-4 text-nowrap'>
            <a href="#pricing">Pricing</a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default CareNavigation