import { useState } from "react";
import { Link } from "react-router-dom";

import Rating from "@mui/material/Rating";

import NeedHelp from "./NeedHelp";

import image from "/assets/dumiCarer.png";

const ChooseCarer = () => {
  const [hidden, setHidden] = useState(true);

  const list = [
    {
      id: 1,
      name: "John Doe",
      rating: 4,
      bio: "khaled ali, I am a compassionate caregiver with over 5 years of experience, dedicated to providing personalized and empathetic care.",
    },
    {
      id: 2,
      name: "John Doe",
      rating: 2,
      bio: "khaled ali, I am a compassionate caregiver with over 5 years of experience, dedicated to providing personalized and empathetic care.",
    },
    {
      id: 3,
      name: "John Doe",
      rating: 1,
      bio: "khaled ali, I am a compassionate caregiver with over 5 years of experience, dedicated to providing personalized and empathetic care.",
    },
  ];
  return (
    <section className="container mx-auto px-4 py-16">
      <NeedHelp />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="online-indicator" />
          <p className="text-[#38B000] text-xl font-medium">Available For Work</p>
        </div>
        <div className="relative">
          <button onClick={() => setHidden(!hidden)} className="relative flex items-center gap-2 text-[#212529] border border-[#00B4D8] hover:hover:bg-[#BBD0FF] duration-200 font-semibold py-2 px-6 rounded-xl text-lg">
            <span>Filter</span>
            <i className="fa-solid fa-filter"></i>
          </button>
          <ul className={`absolute bg-white border bottom-[-90px] left-0 w-[200px] text-center text-[#212529] font-semibold ${hidden && "hidden"}`}>
            <li onClick={() => setHidden(true)} className="py-2 cursor-pointer border-b-2 hover:bg-[#f6f3ef] duration-200">
              Care Giver Nearest To You
            </li>
            <li onClick={() => setHidden(true)} className="py-2 cursor-pointer hover:bg-[#f6f3ef] duration-200">
              Highest Rated
            </li>
          </ul>
        </div>
      </div>
      <div>
        {list.map((item, index) => (
          <Link to={`/carer-profile/${item.id}`} key={index}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8 bg-[#F6F3EF] hover:bg-white duration-200 cursor-pointer border border-[#F6F3EF] hover:border-[#00B4D8] p-6 rounded-xl">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <img src={image} alt="" />
                <div>
                  <p className="text-xl font-medium text-[#003049] mb-2">{item.name}</p>
                  <p className="text-[#3E5C76] mb-4">Caregiver</p>
                  <div className="flex items-center gap-1">
                    <Rating name="simple-controlled" className="text-2xl" value={item.rating} readOnly />
                  </div>
                </div>
              </div>
              <div className="bg-[#ADB5BD] w-[200px] h-[2px] md:w-[2px] md:h-[100px]" />
              <p className="text-center md:text-left font-medium text-lg basis-1/2">{item.bio}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ChooseCarer;
