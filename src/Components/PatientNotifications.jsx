import { useState, useEffect } from "react";
import { getData } from "../Services/apiCalls";

import Skeleton from "@mui/material/Skeleton";

const PatientNotifications = () => {
  const [loading, setLoading] = useState(true);
  const [requests, setRequests] = useState([]);
  const id = localStorage.getItem("ID");

  useEffect(() => {
    const fetchRequests = async () => {
      setLoading(true);
      const response = await getData(`patient/${id}/requests`);
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
      <div className="flex flex-col justify-center border-2 border-[#BBD0FF] rounded-xl px-4 lg:px-[50px] py-12 lg:w-[80%] mx-auto">
        <div className="flex flex-col gap-6">
          {!loading &&
            requests.length !== 0 &&
            requests.map((item, index) => (
              <div key={index}>
                <div className="bg-[#f6f3ef] p-4 rounded-xl text-navyColor mb-4">
                  <p className="font-semibold text-xl mb-2">
                    Name: <span className="font-medium">{item.userNamePatient}</span>
                  </p>
                  <p className="font-semibold text-xl mb-2">
                    Phone: <span className="font-medium">{item.caregiverPhone}</span>
                  </p>
                  <p className="font-semibold text-xl">
                    Date And Duration:{" "}
                    <span className="font-medium">
                      {item.appointmentDateTime.day}/{item.appointmentDateTime.month}, {item.appointmentDateTime.hours > 12 ? `${item.appointmentDateTime.hours - 12} PM` : `${item.appointmentDateTime.hours} AM`}, {item.determineThePeriodOfService.amount} {item.determineThePeriodOfService.unit}
                    </span>
                  </p>
                </div>
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
          {!loading && requests.length === 0 && (
            <div className="bg-[#f6f3ef] p-4 rounded-xl text-navyColor mb-4">
              <p className="font-semibold text-xl mb-2">No Notifications</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PatientNotifications;
