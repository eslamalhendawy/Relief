import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getData } from "../Services/apiCalls";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Rating from "@mui/material/Rating";
import Skeleton from "@mui/material/Skeleton";

import user from "/assets/user.png";

const Recommendations = () => {
  const [loading, setLoading] = useState(true);
  const [carers, setCarers] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    setLoading(true);
    setCarers([]);
    const fetchData = async () => {
      const response = await getData("caregiver/displayAllCaregivers", token);
      setCarers(response);
      setLoading(false);
    };
    fetchData();
  }, []);

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
            1920: {
              slidesPerView: 5,
            },
          }}
          loop={true}
        >
          {loading && (
            <>
            <SwiperSlide>
              <div className="p-6 rounded-xl bg-[#BBD0FF]">
                <div className="flex items-center gap-2 mb-4">
                  <Skeleton variant="circular" width={70} height={70} />
                  <div>
                    <Skeleton variant="text" width={200} height={30} />
                    <Skeleton variant="text" width={200} height={30} />
                  </div>
                </div>
                <Skeleton variant="text" width={300} height={30} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-6 rounded-xl bg-[#BBD0FF]">
                <div className="flex items-center gap-2 mb-4">
                  <Skeleton variant="circular" width={70} height={70} />
                  <div>
                    <Skeleton variant="text" width={200} height={30} />
                    <Skeleton variant="text" width={200} height={30} />
                  </div>
                </div>
                <Skeleton variant="text" width={300} height={30} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-6 rounded-xl bg-[#BBD0FF]">
                <div className="flex items-center gap-2 mb-4">
                  <Skeleton variant="circular" width={70} height={70} />
                  <div>
                    <Skeleton variant="text" width={200} height={30} />
                    <Skeleton variant="text" width={200} height={30} />
                  </div>
                </div>
                <Skeleton variant="text" width={300} height={30} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-6 rounded-xl bg-[#BBD0FF]">
                <div className="flex items-center gap-2 mb-4">
                  <Skeleton variant="circular" width={70} height={70} />
                  <div>
                    <Skeleton variant="text" width={200} height={30} />
                    <Skeleton variant="text" width={200} height={30} />
                  </div>
                </div>
                <Skeleton variant="text" width={300} height={30} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-6 rounded-xl bg-[#BBD0FF]">
                <div className="flex items-center gap-2 mb-4">
                  <Skeleton variant="circular" width={70} height={70} />
                  <div>
                    <Skeleton variant="text" width={200} height={30} />
                    <Skeleton variant="text" width={200} height={30} />
                  </div>
                </div>
                <Skeleton variant="text" width={300} height={30} />
              </div>
            </SwiperSlide>
            </>
          )}
          {!loading &&
            carers.map((item, index) => (
              <SwiperSlide key={index}>
                <Link to={`/carer-profile/${item._id}`}>
                  <div className="p-6 rounded-xl bg-[#BBD0FF]">
                    <div className="flex items-center gap-2 mb-4">
                      {item.profilePhoto ? (
                        <img src={item.profilePhoto} alt="" className="cursor-pointer size-[70px] rounded-full" />
                      ) : (
                        <div className="size-[70px] rounded-full bg-accent flex justify-center items-center">
                          <span className="text-xl font-semibold text-white capitalize">{item.userName[0]}</span>
                        </div>
                      )}
                      <div>
                        <h4 className="text-xl text-white font-bold capitalize mb-2 truncate">{item.userName}</h4>
                        <Rating name="simple-controlled" className="text-2xl" value={item.averageRating} readOnly />
                      </div>
                    </div>
                    <p className="font-semibold text-navyColor capitalize mb-4 truncate-paragraph">{item.biography}</p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <div className="absolute bg-[#212529] w-full h-[150px] bottom-[-50px]" />
    </section>
  );
};

export default Recommendations;
