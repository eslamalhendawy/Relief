import { useState, useEffect } from "react";
import { getData } from "../Services/apiCalls";

import CarerProfileHeader from "./CarerProfileHeader";

import Skeleton from "@mui/material/Skeleton";

const CarerSchedule = () => {
  const [loading, setLoading] = useState(true);
  const [requests, setRequests] = useState([]);
  const id = localStorage.getItem("ID");

  useEffect(() => {
    const fetchRequests = async () => {
      setLoading(true);
      const response = await getData(`caregiver/${id}/requests`);
      console.log(response);
      if (response) {
        setRequests(response);
        setLoading(false);
      }
    };
    fetchRequests();
  }, []);

  return (
    <section className="container mx-auto px-4 py-16">
      <CarerProfileHeader />
      <div className="flex flex-col justify-center border-2 border-[#BBD0FF] rounded-xl px-4 lg:px-[50px] py-12 lg:w-[80%] mx-auto">
        <div className="flex flex-col gap-6">
          {!loading && requests.length !== 0 && requests.map((item, index) => (
            <div key={index}>
              <div className="bg-[#f6f3ef] p-4 rounded-xl text-navyColor mb-4">
                <p className="font-semibold text-xl mb-2">
                  Name: <span className="font-medium">{item.userNamePatient}</span>
                </p>
                {/* <p className="font-semibold text-xl mb-2">
                  Location: <span className="font-medium">{item.location}</span>
                </p> */}
                <p className="font-semibold text-xl mb-2">
                  Phone: <span className="font-medium">{item.caregiverPhone}</span>
                </p>
                <p className="font-semibold text-xl">
                  Date And Duration: <span className="font-medium">{item.appointmentDateTime.day}/{item.appointmentDateTime.month}, {item.appointmentDateTime.hours > 12 ? `${item.appointmentDateTime.hours - 12} PM` : `${item.appointmentDateTime.hours} AM`}, {item.determineThePeriodOfService.amount} {item.determineThePeriodOfService.unit}</span>
                </p>
              </div>
              {/* <div className="flex justify-end gap-6">
                <button className="capitalize border-[#8D99AE] hover:border-[#BBD0FF] text-[#8D99AE] py-2 w-[120px] rounded-xl font-[500] border hover:text-[#003049] duration-200 text-center">Cancel</button>
                <button className="capitalize bg-accent hover:bg-red-700 duration-200 text-white py-2 w-[120px] rounded-xl font-[500] border border-accent text-center">Approve</button>
              </div> */}
            </div>
          ))}
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
        </div>
      </div>
    </section>
  );
};

export default CarerSchedule;
