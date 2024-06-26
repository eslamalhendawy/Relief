import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getData } from "../Services/apiCalls";

import Rating from "@mui/material/Rating";
import Skeleton from "@mui/material/Skeleton";

const ChooseCarer = () => {
  const [hidden, setHidden] = useState(true);
  const [carers, setCarers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const token = localStorage.getItem("token");

  useEffect(() => {
    setLoading(true);
    setCarers([]);
    const fetchData = async () => {
      const response = await getData(filter === "all" ? "caregiver/displayAllCaregivers" : filter === "nearest" ? `nearbyCaregivers?km=10` : "caregiver/displayAllCaregivers", token);
      console.log(response);
      if (filter === "all") {
        setCarers(response);
        setLoading(false);
      } else if (filter === "nearest") {
        setCarers(response.caregiver);
        setLoading(false);
      } else if (filter === "rating") {
        let tempList = response.filter((item) => {
          return item.averageRating === 5 || item.averageRating === 4;
        });
        setCarers(tempList);
        setLoading(false);
      }
    };
    fetchData();
  }, [filter]);

  const handleClick = (e) => {
    setFilter(e);
    setHidden(true);
  };


  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="online-indicator" />
          <p className="text-[#38B000] text-xl font-medium">Available For Work</p>
        </div>
        <div className="relative mb-6">
          <button onClick={() => setHidden(!hidden)} className="relative flex items-center gap-2 text-[#212529] border border-[#00B4D8] hover:hover:bg-[#BBD0FF] duration-200 font-semibold py-2 px-6 rounded-xl text-lg">
            <span>Filter</span>
            <i className="fa-solid fa-filter"></i>
          </button>
          <ul className={`absolute bg-white border bottom-[-130px] right-0 w-[200px] text-center text-[#212529] font-semibold ${hidden && "hidden"}`}>
            <li className="py-2 cursor-pointer border-b-2 hover:bg-[#f6f3ef] duration-200">
              <button onClick={() => handleClick("all")}>All</button>
            </li>
            <li className="py-2 cursor-pointer border-b-2 hover:bg-[#f6f3ef] duration-200">
              <button onClick={() => handleClick("nearest")}>Care Giver Nearest To You</button>
            </li>
            <li className="py-2 cursor-pointer hover:bg-[#f6f3ef] duration-200">
              <button onClick={() => handleClick("rating")}>Highest Rated</button>
            </li>
          </ul>
        </div>
      </div>
      <div>
        {loading && (
          <div className="flex flex-col gap-8">
            <div className="rounded-xl overflow-hidden">
              <Skeleton animation="wave" variant="rectangular" width="100%" height={200} />
            </div>
            <div className="rounded-xl overflow-hidden">
              <Skeleton animation="wave" variant="rectangular" width="100%" height={200} />
            </div>
            <div className="rounded-xl overflow-hidden">
              <Skeleton animation="wave" variant="rectangular" width="100%" height={200} />
            </div>
          </div>
        )}
        {!loading &&
          carers.length !== 0 &&
          carers.map((item, index) => (
            <Link to={`/carer-profile/${item._id}`} key={index}>
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 bg-[#F6F3EF] hover:bg-white duration-200 cursor-pointer border border-[#F6F3EF] hover:border-[#00B4D8] p-6 rounded-xl">
                <div className="flex flex-col md:flex-row items-center gap-4">
                  {item.profilePhoto ? (
                    <img className="size-[150px] rounded-full" src={item.profilePhoto} alt="" />
                  ) : (
                    <div className="size-[150px] rounded-full p-2 flex justify-center items-center bg-accent">
                      <span className="text-xl font-semibold capitalize text-white text-center">{item.userName}</span>
                    </div>
                  )}
                  <div>
                    <p className="text-xl font-medium text-[#003049] mb-2">{item.userName}</p>
                    <p className="text-[#3E5C76] mb-4">Caregiver</p>
                    <div className="flex items-center gap-1">
                      <Rating name="simple-controlled" className="text-2xl" value={item.averageRating} readOnly />
                    </div>
                  </div>
                </div>
                <div className="bg-[#ADB5BD] w-[200px] h-[2px] md:w-[2px] md:h-[100px]" />
                <p className="text-center md:text-left font-medium text-lg basis-1/2">{item.biography}</p>
              </div>
            </Link>
          ))}
        {!loading && carers.length === 0 && <p className="text-center text-2xl font-semibold mt-12">No Caregivers Found</p>}
      </div>
    </section>
  );
};

export default ChooseCarer;
