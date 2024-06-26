import { useState, useEffect } from "react";
import { getData, putData } from "../Services/apiCalls";

import Skeleton from "@mui/material/Skeleton";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CarerProfileHeader from "./CarerProfileHeader";

const CarerNotifactions = () => {
  const [loading, setLoading] = useState(true);
  const [requests, setRequests] = useState([]);
  const id = localStorage.getItem("ID");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchRequests = async () => {
      setLoading(true);
      const response = await getData(`caregiver/${id}/pendingrequest`);
      if (response.message === "No pending requests found for this caregiver") {
        setRequests([]);
        setLoading(false);
      } else if (response) {
        setRequests(response);
        setLoading(false);
      } else {
        setLoading(false);
      }
    };
    fetchRequests();
  }, []);

  const handleCancel = (item) => async () => {
    toast.info("Canceling...");
    const response = await putData(item.role === "specific" ? `/caregiver/specificRequests/reject/${item._id}` : `caregiver/publicrequests/${item._id}/reject`, {}, token);
    console.log(response);
    if (response.message === "Request rejected successfully") {
      toast.success("Request rejected successfully");
      window.location.reload();
    } else {
      toast.error("Something went wrong");
    }
  };

  const handleAccept = (item) => async () => {
    toast.info("Approving...");
    const response = await putData(item.role === "specific" ? `/caregiver/specificRequests/approve/${item._id}` : `caregiver/publicrequests/${item._id}/approve`, {}, token);
    if (response.message === "Request approved successfully") {
      toast.success("Request accepted successfully");
      window.location.reload();
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <CarerProfileHeader />
      <div className="flex flex-col justify-center border-2 border-[#BBD0FF] rounded-xl px-4 lg:px-[50px] py-12 lg:w-[80%] mx-auto">
        <div className="flex flex-col gap-6">
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
            <div className="bg-[#f6f3ef] p-4 rounded-xl text-navyColor">
              <p className="font-semibold text-xl">No Notifications</p>
            </div>
          )}
          {!loading &&
            requests.length !== 0 &&
            requests.map((item, index) => (
              <div key={index}>
                <div className="bg-[#f6f3ef] p-4 rounded-xl text-navyColor mb-4">
                  <p className="font-semibold text-xl mb-2">
                    Patient Name: <span className="font-medium">{item.userNamePatient}</span>
                  </p>
                  <p className="font-semibold text-xl mb-2">
                    Patient Phone: <span className="font-medium">{item.patientPhone}</span>
                  </p>
                  <p className="font-semibold text-xl mb-2 flex flex-col sm:flex-row">
                    <span>Patient Email:</span> <span className="font-medium truncate">{item.userEmail}</span>
                  </p>
                  <p className="font-semibold text-xl">
                    Date And Duration:{" "}
                    <span className="font-medium">
                      {item.appointmentDateTime.day}/{item.appointmentDateTime.month}, {item.appointmentDateTime.hours > 12 ? `${item.appointmentDateTime.hours - 12} PM` : `${item.appointmentDateTime.hours} AM`}, {item.determineThePeriodOfService.amount} {item.determineThePeriodOfService.unit}
                    </span>
                  </p>
                </div>
                <div className="flex justify-end gap-6">
                  <button onClick={handleCancel(item)} className="capitalize border-[#8D99AE] hover:border-[#BBD0FF] text-[#8D99AE] py-2 w-[120px] rounded-xl font-[500] border hover:text-[#003049] duration-200 text-center">
                    Cancel
                  </button>
                  <button onClick={handleAccept(item)} className="capitalize bg-accent hover:bg-red-700 duration-200 text-white py-2 w-[120px] rounded-xl font-[500] border border-accent text-center">
                    Approve
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default CarerNotifactions;
