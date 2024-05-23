const CareNavigation = () => {
  return (
    <section className='bg-[#F6F3EF]'>
      <div className='bg-sectionColor p-4 w-fit mx-auto mb-6 rounded-b-xl'>
        <ul className='flex items-center justify-center gap-4'>
          <li className='border border-[#BBD0FF] text-center text-[#BBD0FF] rounded-xl w-fit py-1 px-4'>
            <a href="#overview">Overview</a>
          </li>
          <li className='border border-[#BBD0FF] text-center text-[#BBD0FF] rounded-xl w-fit py-1 px-4'>
            <a href="">How It Works</a>
          </li>
          <li className='border border-[#BBD0FF] text-center text-[#BBD0FF] rounded-xl w-fit py-1 px-4'>
            <a href="">Benefits Of Relief</a>
          </li>
          <li className='border border-[#BBD0FF] text-center text-[#BBD0FF] rounded-xl w-fit py-1 px-4'>
            <a href="">Pricing</a>
          </li>
          <li className='border border-[#BBD0FF] text-center text-[#BBD0FF] rounded-xl w-fit py-1 px-4'>
            <a href="">FQA</a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default CareNavigation