import care1 from "/assets/care1.png";
import care2 from "/assets/care2.png";

const CareSection = () => {
  return (
    <section className="container mx-auto py-12 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xl:gap-12 mb-8 lg:mb-24">
        <div className="">
          <img className="h-full w-full" src={care1} alt="" />
        </div>
        <div className="">
          <h3 className="text-navyColor font-semibold text-2xl lg:text-4xl text-center lg:text-left mb-4 2xl:mb-12 capitalize">What is the importance of Elderly care?</h3>
          <p className="text-pColor font-medium text-lg xl:text-xl text-center lg:text-left mb-4 2xl:mb-8 capitalize">Elderly care holds paramount importance in our society, serving as a cornerstone for the well-being and dignity of our senior citizens. As individuals age, they often grapple with health challenges, loneliness, and the complexities of daily life.</p>
          <p className="text-pColor font-medium text-lg xl:text-xl text-center lg:text-left mb-4 2xl:mb-8 capitalize">Dedicated elderly care ensures that they receive the necessary support for their physical, emotional, and social needs. Beyond addressing health issues and assisting with daily activities, elderly care fosters a sense of connection and belonging, combating feelings of isolation.</p>
          <p className="text-pColor font-medium text-lg xl:text-xl text-center lg:text-left capitalize">It upholds the principles of respect and dignity, acknowledging the wealth of experience and wisdom that seniors bring to our communities. In essence, elderly care is not just a service; it is a compassionate commitment to enhancing the quality of life for our elders, enriching their golden years with companionship, security, and the comfort of knowing that they are valued members of our society.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xl:gap-12">
        <div className="">
          <h3 className="text-navyColor font-semibold text-2xl lg:text-4xl text-center lg:text-left mb-4 2xl:mb-12 capitalize">Who would benefit from elderly care service</h3>
          <p className="text-pColor font-medium text-lg xl:text-xl text-center lg:text-left mb-4 2xl:mb-8 capitalize">Elderly care services cater to the needs of older individuals who may require assistance with various aspects of daily living due to age-related challenges or health conditions. This can include seniors facing physical limitations, cognitive impairments, chronic illnesses, or those who simply need companionship and support.</p>
          <p className="text-pColor font-medium text-lg xl:text-xl text-center lg:text-left mb-4 2xl:mb-8 capitalize">Beneficiaries of elderly care services may include older adults who live alone, individuals with limited family support, or families who seek professional assistance to ensure the well-being of their aging loved ones.</p>
          <p className="text-pColor font-medium text-lg xl:text-xl text-center lg:text-left capitalize">These services offer a range of support, including help with personal care, medication management, meal preparation, transportation, and emotional companionship. Ultimately, elderly care services aim to enhance the quality of life for seniors by promoting independence, safety, and overall physical and emotional health</p>
        </div>
        <div className="">
          <img className="h-full w-full" src={care2} alt="" />
        </div>
      </div>
    </section>
  );
};

export default CareSection;
