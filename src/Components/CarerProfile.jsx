import { useState } from "react";

import NeedHelp from "./NeedHelp";
import BookAppointmentModel from "./BookAppointmentModel";
import AddReviewModal from "./AddReviewModal";

import Rating from "@mui/material/Rating";

import avatar from "/assets/profileImage.png";

const CarerProfile = () => {
  const [helpful, setHelpful] = useState(false);
  const [notHelpful, setNotHelpful] = useState(false);
  const list = [
    {
      text: "Non-Smoker",
      emoji: "/assets/cigaretteEmoji.png",
    },
    {
      text: "Male",
      emoji: "/assets/genderEmoji.png",
    },
    {
      text: "Can Drive",
      emoji: "/assets/carEmoji.png",
    },
    {
      text: "30 Years Old",
      emoji: "/assets/calenderEmoji.png",
    },
  ];

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
      <NeedHelp />
      <div className="flex flex-col md:flex-row items-start gap-12 lg:gap-16">
        <div className="bg-[#F6F3EF] basis-1/3 p-6 rounded-xl">
          <div className="size-[120px] rounded-full mx-auto mb-2">
            <img className="rounded-full" src={avatar} alt="" />
          </div>
          <h1 className="text-center font-semibold text-lg text-[#212529]">John Doe</h1>
          <p className="text-[#495057] font-medium text-center mb-4">caregiver, specialist</p>
          <div className="flex items-center justify-center gap-1 text-lg">
            <Rating name="simple-controlled" className="text-2xl" value={4.5} readOnly />
            <span className="font-semibold">4.5</span>
          </div>
          <p className="text-[#ADB5BD] text-center mb-8">122 Reviews</p>
          <p className="text-[#343A40] mb-1">
            <i className="fa-solid fa-location-dot mr-1"></i> Ismailia, Egypt
          </p>
          <p className="text-[#343A40] mb-8">
            <i className="fa-solid fa-phone mr-1"></i> 01020304025
          </p>
          {list.map((item, index) => (
            <div key={index} className="flex items-center gap-2 mb-2 bg-white py-2 px-3 rounded-3xl">
              <img className="size-[25px]" src={item.emoji} alt="" />
              <span className="text-[#3E5C76] font-medium">{item.text}</span>
            </div>
          ))}
          <h5 className="text-[#212529] font-semibold mt-8 mb-2 text-lg">Biography</h5>
          <p className="capitalize text-[#495057] mb-8">I am a compassionate caregiver with over 5 years of experience, dedicated to providing personalized and empathetic care. </p>
          <BookAppointmentModel />  
        </div>
        <div className="bg-[#F6F3EF] basis-2/3 p-6 rounded-xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[#212529] font-semibold text-2xl md:text-4xl">Reviews</h2>
            <AddReviewModal />  
          </div>
          <div>
            {reviews.map((review, index) => (
              <div key={index} className="p-2 mb-2 rounded-xl">
                <div className="flex gap-1 items-center mb-2">
                  <div className="flex items-center gap-1">
                    <Rating name="read-only" readOnly className="text-2xl" value={review.rating}/>
                  </div>
                  <h3 className="text-[#6C757D] font-medium text-lg">{review.name}</h3>
                </div>
                <p className="text-[#343A40] md:text-xl mb-2">{review.text}</p>
                <div className="flex items-center gap-8">
                  <button className={`text-lg flex items-center gap-1 text-[#6C757D] ${helpful && "text-black"}`} onClick={() => setHelpful(!helpful)}>
                    <i className={`fa-${helpful ? "solid" : "regular"} fa-thumbs-up`}></i>
                    <span>Helpful</span>
                  </button>
                  <button className={`text-lg flex items-center gap-1 text-[#6C757D] ${notHelpful && "text-black"}`} onClick={() => setNotHelpful(!notHelpful)}>
                    <i className={`fa-${notHelpful ? "solid" : "regular"} fa-thumbs-down`}></i>
                    <span>Helpful</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarerProfile;
