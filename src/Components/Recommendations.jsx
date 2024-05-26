import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import user from "/assets/user.png";

const Recommendations = () => {
  const list = [
    {
      name: "mohamed khaled",
      firstLine: "Standard & Hygienic",
      comment: "We chose this care home because of the light spacious, airy rooms and the friendliness of the L. staff, not only to us but towards each other.",
    },
    {
      name: "mohamed khaled",
      firstLine: "Standard & Hygienic",
      comment: "We chose this care home because of the light spacious, airy rooms and the friendliness of the L. staff, not only to us but towards each other.",
    },
    {
      name: "mohamed khaled",
      firstLine: "Standard & Hygienic",
      comment: "We chose this care home because of the light spacious, airy rooms and the friendliness of the L. staff, not only to us but towards each other.",
    },
    {
      name: "mohamed khaled",
      firstLine: "Standard & Hygienic",
      comment: "We chose this care home because of the light spacious, airy rooms and the friendliness of the L. staff, not only to us but towards each other.",
    },
    {
      name: "mohamed khaled",
      firstLine: "Standard & Hygienic",
      comment: "We chose this care home because of the light spacious, airy rooms and the friendliness of the L. staff, not only to us but towards each other.",
    },
  ];

  return (
    <section className="relative mb-12">
      <div className="px-4">
        <h4 className="text-navyColor text-center font-bold text-4xl lg:text-6xl pt-24 pb-12 capitalize">Available for work</h4>
        <Swiper
          className="relative z-[2]"
          spaceBetween={50}
          slidesPerView={1}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          loop={true}
        >
          {list.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="p-6 rounded-xl bg-[#BBD0FF]">
                <div className="flex items-center gap-2 mb-4">
                  <img src={user} alt="" className="cursor-pointer" />
                  <div>
                    <h4 className="text-2xl text-white capitalize mb-2">{item.name}</h4>
                    <div className="space-x-2">
                      <i className="fa-solid fa-star text-[#FFC300]"></i>
                      <i className="fa-solid fa-star text-[#FFC300]"></i>
                      <i className="fa-solid fa-star text-[#FFC300]"></i>
                      <i className="fa-solid fa-star text-[#FFC300]"></i>
                      <i className="fa-solid fa-star text-[#FFC300]"></i>
                    </div>
                  </div>
                </div>
                <h5 className="font-semibold text-2xl text-navyColor capitalize mb-4">{item.firstLine}</h5>
                <div className="flex gap-2 justify-start text-pColor">
                  <i className="fa-solid fa-quote-left"></i>
                  <p className="text-pColor capitalize text-lg mb-4 sm:mb-0">{item.comment}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="absolute bg-[#212529] w-full h-[150px] bottom-[-50px]" />
    </section>
  );
};

export default Recommendations;
