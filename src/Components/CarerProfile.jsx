import { useState, useEffect } from "react";
import { getData } from "../Services/apiCalls";
import { useParams } from "react-router-dom";
import { getAddressFromCoordinates } from "../Services/opencage";

import BookAppointmentModel from "./BookAppointmentModel";

import Skeleton from "@mui/material/Skeleton";

import Rating from "@mui/material/Rating";

import cigarette from "/assets/cigaretteEmoji.png";
import gender from "/assets/genderEmoji.png";
import car from "/assets/carEmoji.png";
import calender from "/assets/calenderEmoji.png";

const CarerProfile = () => {
  const [carer, setCarer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [helpful, setHelpful] = useState(false);
  const [notHelpful, setNotHelpful] = useState(false);
  const [address, setAddress] = useState("");
  const [loading2, setLoading2] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getData(`/caregiver/${id}`);
      if (response.message === "Caregiver found") {
        setCarer(response.data);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setLoading2(true);
    const fetchAddress = async () => {
      try {
        const fetchedAddress = await getAddressFromCoordinates(carer.location.coordinates[1], carer.location.coordinates[0]);
        setAddress(fetchedAddress);
        setLoading2(false);
      } catch (error) {
        setAddress("Address not found");
      }
    };
    if (carer !== null) {
      fetchAddress();
    }
  }, [carer]);

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-start gap-12 lg:gap-16">
        <div className="bg-[#F6F3EF] basis-1/3 p-6 rounded-xl">
          <div className="size-[120px] rounded-full mx-auto mb-2 overflow-hidden">
            {loading ? (
              <Skeleton variant="rectangle" width="100%" height={120} />
            ) : (
              <div className="bg-accent rounded-full flex justify-center items-center w-full h-full">
                <span className="text-white text-3xl font-semibold">{carer.userName[0]}</span>
              </div>
            )}
          </div>
          {loading ? <Skeleton className="mx-auto" variant="text" width="40%" height={20} /> : <h1 className="text-center font-semibold text-lg text-[#212529]">{carer.userName}</h1>}
          <p className="text-[#495057] font-medium text-center mb-4 capitalize">caregiver, specialist</p>
          <div className="flex items-center justify-center gap-1 text-lg mb-4">
            {loading ? (
              <>
                <Rating name="simple-controlled" className="text-2xl" value={0} readOnly />
                <Skeleton variant="text" width="20%" height={20} />
              </>
            ) : (
              <>
                <Rating name="simple-controlled" className="text-2xl" value={carer.averageRating} readOnly />
                <span className="font-semibold">{carer.averageRating}</span>
              </>
            )}
          </div>
          {loading ? (
            <div className="mb-8">
              <Skeleton className="mx-auto" variant="text" width="40%" height={20} />
            </div>
          ) : (
            <p className="text-[#ADB5BD] text-center mb-8">Based on {carer.ratings.length} {carer.ratings.length === 1 ? "review" : "reviews"}</p>
          )}
          {loading2 ? (
            <p className="text-[#343A40] mb-1 flex items-center gap-1">
              <i className="fa-solid fa-location-dot mr-1"></i> <Skeleton variant="text" width="25%" height={20} />
            </p>
          ) : (
            <p className="text-[#343A40] mb-1">
              <i className="fa-solid fa-location-dot mr-1"></i>
              {!loading2 && address}
            </p>
          )}
          {loading ? (
            <p className="text-[#343A40] mb-8 flex items-center gap-1">
              <i className="fa-solid fa-phone mr-1"></i> <Skeleton variant="text" width="25%" height={20} />
            </p>
          ) : (
            <p className="text-[#343A40] mb-8">
              <i className="fa-solid fa-phone mr-1"></i> {carer.phone}
            </p>
          )}
          {loading ? (
            <div className="flex items-center gap-2 mb-2 bg-white py-2 px-3 rounded-3xl">
              <img className="size-[25px]" src={cigarette} alt="" />
              <Skeleton variant="text" width="40%" height={20} />
            </div>
          ) : (
            <div className="flex items-center gap-2 mb-2 bg-white py-2 px-3 rounded-3xl">
              <img className="size-[25px]" src={cigarette} alt="" />
              <span className="text-[#3E5C76] font-medium">{carer.doYouSmoke === "no" ? "Non-Smoker" : "Smoker"}</span>
            </div>
          )}
          {loading ? (
            <div className="flex items-center gap-2 mb-2 bg-white py-2 px-3 rounded-3xl">
              <img className="size-[25px]" src={gender} alt="" />
              <Skeleton variant="text" width="40%" height={20} />
            </div>
          ) : (
            <div className="flex items-center gap-2 mb-2 bg-white py-2 px-3 rounded-3xl">
              <img className="size-[25px]" src={gender} alt="" />
              <span className="text-[#3E5C76] font-medium capitalize">{carer.gender}</span>
            </div>
          )}
          {loading ? (
            <div className="flex items-center gap-2 mb-2 bg-white py-2 px-3 rounded-3xl">
              <img className="size-[25px]" src={car} alt="" />
              <Skeleton variant="text" width="40%" height={20} />
            </div>
          ) : (
            <div className="flex items-center gap-2 mb-2 bg-white py-2 px-3 rounded-3xl">
              <img className="size-[25px]" src={car} alt="" />
              <span className="text-[#3E5C76] font-medium capitalize">{carer.canYouDrive === "yes" ? "Can Drive" : "Can't Drive"}</span>
            </div>
          )}
          {loading ? (
            <div className="flex items-center gap-2 mb-2 bg-white py-2 px-3 rounded-3xl">
              <img className="size-[25px]" src={calender} alt="" />
              <Skeleton variant="text" width="40%" height={20} />
            </div>
          ) : (
            <div className="flex items-center gap-2 mb-2 bg-white py-2 px-3 rounded-3xl">
              <img className="size-[25px]" src={calender} alt="" />
              <span className="text-[#3E5C76] font-medium capitalize">{new Date().getFullYear() - new Date(carer.dateOfBirth).getFullYear()} Years Old</span>
            </div>
          )}
          <h5 className="text-[#212529] font-semibold mt-8 mb-2 text-lg">Biography</h5>
          {loading ? (
            <div className="mb-8">
              <Skeleton animation="wave" className="mb-8" variant="text" width="100%" height={20} />
              <Skeleton animation="wave" className="mb-8" variant="text" width="100%" height={20} />
              <Skeleton animation="wave" className="mb-8" variant="text" width="100%" height={20} />
              <Skeleton animation="wave" className="mb-8" variant="text" width="100%" height={20} />
            </div>
          ) : (
            <p className="capitalize text-[#495057] mb-8">{carer.biography}</p>
          )}
          <BookAppointmentModel />
        </div>
        <div className="bg-[#F6F3EF] basis-2/3 p-6 rounded-xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[#212529] font-semibold text-2xl md:text-4xl">Reviews</h2>
          </div>
          <div>
            {!loading &&
              carer.ratings.map((review, index) => (
                <div key={index} className="p-2 mb-2 rounded-xl">
                  <div className="flex gap-1 items-center mb-2">
                    <div className="flex items-center gap-1">
                      <Rating name="read-only" readOnly className="text-2xl" value={review} />
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
            {!loading && carer.ratings.length === 0 && <p className="text-xl font-semibold text-center">No Ratings Found</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

// 66778c7318d68583856caa19
export default CarerProfile;
