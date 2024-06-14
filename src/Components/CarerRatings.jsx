import CarerProfileHeader from "./CarerProfileHeader";

import Rating from "@mui/material/Rating";

const CarerRatings = () => {
  const reviews = [
    {
      rating: 5,
      name: "John Doe",
      text: "The caregiver provided exceptional support, demonstrating compassion, professionalism, and unwavering dedication to their duties.",
    },
    {
      rating: 3,
      name: "John Doe",
      text: "The caregiver provided exceptional support, demonstrating compassion, professionalism, and unwavering dedication to their duties.",
    },
    {
      rating: 4.6,
      name: "John Doe",
      text: "The caregiver provided exceptional support, demonstrating compassion, professionalism, and unwavering dedication to their duties.",
    },
    {
      rating: 3,
      name: "John Doe",
      text: "The caregiver provided exceptional support, demonstrating compassion, professionalism, and unwavering dedication to their duties.",
    },
    {
      rating: 5,
      name: "John Doe",
      text: "The caregiver provided exceptional support, demonstrating compassion, professionalism, and unwavering dedication to their duties.",
    },
    {
      rating: 3,
      name: "John Doe",
      text: "The caregiver provided exceptional support, demonstrating compassion, professionalism, and unwavering dedication to their duties.",
    },
    {
      rating: 4.6,
      name: "John Doe",
      text: "The caregiver provided exceptional support, demonstrating compassion, professionalism, and unwavering dedication to their duties.",
    },
    {
      rating: 3,
      name: "John Doe",
      text: "The caregiver provided exceptional support, demonstrating compassion, professionalism, and unwavering dedication to their duties.",
    },
  ];
  return (
    <section className="container mx-auto px-4 py-16">
      <CarerProfileHeader />
      <div className="flex flex-col justify-center border-2 border-[#BBD0FF] rounded-xl px-4 lg:px-[50px] py-12 lg:w-[80%] mx-auto">
        {reviews.map((review, index) => (
          <div key={index} className="p-2 mb-2 rounded-xl">
            <div className="flex gap-1 items-center mb-2">
              <div className="flex items-center gap-1">
                <Rating name="read-only" readOnly className="text-2xl" value={review.rating} />
              </div>
              <h3 className="text-[#6C757D] font-medium text-lg">{review.name}</h3>
            </div>
            <p className="text-[#343A40] md:text-xl mb-2">{review.text}</p>
            <div className="flex items-center gap-8">
              <div className={`text-xl flex items-center gap-1 text-[#6C757D] `}>
                <i className="fa-regular fa-thumbs-up"></i>
                {/* <span>Helpful</span> */}
              </div>
              {/* <button className={`text-lg flex items-center gap-1 text-[#6C757D] `}>
                <i className="fa-regular fa-thumbs-down"></i>
                <span>Helpful</span>
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarerRatings;
