import { useState, useEffect } from "react";
import { getData } from "../Services/apiCalls";

import Skeleton from "@mui/material/Skeleton";

import CarerProfileHeader from "./CarerProfileHeader";

import Rating from "@mui/material/Rating";

const CarerRatings = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const id = localStorage.getItem("ID");

  useEffect(() => {
    const fetchReviews = async () => {
      const data = await getData(`caregiver/${id}/messageRatingse`);
      console.log(data);
      setReviews(data);
      setLoading(false);
    };
    fetchReviews();
  }, []);

  return (
    <section className="container mx-auto px-4 py-16">
      <CarerProfileHeader />
      <div className="flex flex-col justify-center border-2 border-[#BBD0FF] rounded-xl px-4 lg:px-[50px] py-12 lg:w-[80%] mx-auto">
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
        {!loading && reviews.length === 0 && (
          <div className="p-4 rounded-xl text-navyColor">
            <p className="font-semibold text-xl">No Ratings</p>
          </div>
        )}
        {!loading &&
          reviews.length !== 0 &&
          reviews.map((review, index) => (
            <div key={index} className="p-2 mb-2 rounded-xl">
              <div className="flex flex-col-reverse sm:flex-row gap-1 items-center mb-2">
                <div className="flex items-center gap-1">
                  <Rating name="read-only" readOnly className="text-2xl" value={review.Info.rating} />
                </div>
                <h3 className="text-[#6C757D] font-medium text-lg">{review.PatientData.userNamePatient}</h3>
              </div>
              <p className="text-[#343A40] md:text-xl mb-2 text-center sm:text-left">{review.Info.messageRating}</p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default CarerRatings;
