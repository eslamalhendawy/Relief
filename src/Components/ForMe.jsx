import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../Context/AppContext";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import NeedHelp from "./NeedHelp";

const ForMe = () => {
  const [stage, setStage] = useState(1);
  const [q1, setQ1] = useState(null);
  const [q2, setQ2] = useState(null);
  const [q3, setQ3] = useState(null);
  const [q4, setQ4] = useState(null);
  const [q5, setQ5] = useState(null);
  const [q6, setQ6] = useState(null);
  const [q7, setQ7] = useState(null);
  const [q8, setQ8] = useState(null);
  const [q9, setQ9] = useState(null);
  const [q10, setQ10] = useState(null);
  const { userData } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Relief | Care For Me";
    window.scrollTo(0, 0);
  }, [stage]);

  const handleStage1 = () => {
    if (!q1 || !q2 || !q3 || !q4) {
      return toast.error("Please answer all questions");
    }
    setStage(2);
  };

  const sendRequest = () => {
    if (!q5 || !q6 || !q7 || !q8 || !q9 || !q10) {
      return toast.error("Please answer all questions");
    }
    toast.info("Your Request Has Been Sent");
    navigate("/");
  };

  return (
    <section className="container mx-auto px-4 py-16">
      {/* <NeedHelp /> */}
      {stage === 1 && (
        <div className="border border-[#BBD0FF] md:w-[80%] lg:w-[70%] md:mx-auto p-3 md:p-6 rounded-xl">
          <div className="lg:w-[80%] xl:w-[70%] lg:mx-auto mb-8">
            <span className="text-[#ADB5BD] font-medium text-sm md:text-base">YOUR RELATIONSHIP</span>
            <h3 className="font-semibold mb-3 md:text-xl">How many people are you arranging care for?</h3>
            <div className="flex flex-col gap-3">
              <button onClick={() => setQ1(1)} className={`text-left border border-[#BBD0FF] hover:bg-[#BBD0FF] duration-200 p-2 rounded-xl font-medium ${q1 === 1 && "bg-[#BBD0FF]"}`}>
                1
              </button>
              <button onClick={() => setQ1(2)} className={`text-left border border-[#BBD0FF] hover:bg-[#BBD0FF] duration-200 p-2 rounded-xl font-medium ${q1 === 2 && "bg-[#BBD0FF]"}`}>
                2
              </button>
            </div>
          </div>
          <div className="lg:w-[80%] xl:w-[70%] lg:mx-auto mb-8">
            <span className="text-[#ADB5BD] font-medium text-sm md:text-base">WEEKS OF CARE</span>
            <h3 className="font-semibold mb-3 md:text-xl">How many weeks of care are required?</h3>
            <div className="flex flex-col gap-3">
              <button onClick={() => setQ2(1)} className={`text-left border border-[#BBD0FF] hover:bg-[#BBD0FF] duration-200 p-2 rounded-xl font-medium ${q2 === 1 && "bg-[#BBD0FF]"}`}>
                1-3 Weeks
              </button>
              <button onClick={() => setQ2(2)} className={`text-left border border-[#BBD0FF] hover:bg-[#BBD0FF] duration-200 p-2 rounded-xl font-medium ${q2 === 2 && "bg-[#BBD0FF]"}`}>
                4-8 Weeks
              </button>
              <button onClick={() => setQ2(3)} className={`text-left border border-[#BBD0FF] hover:bg-[#BBD0FF] duration-200 p-2 rounded-xl font-medium ${q2 === 3 && "bg-[#BBD0FF]"}`}>
                Ongoing
              </button>
            </div>
          </div>
          <div className="lg:w-[80%] xl:w-[70%] lg:mx-auto mb-8">
            <span className="text-[#ADB5BD] font-medium text-sm md:text-base">START DATE</span>
            <h3 className="font-semibold mb-3 md:text-xl">When would you like the care to start?</h3>
            <div className="flex flex-col gap-3">
              <button onClick={() => setQ3(1)} className={`text-left border capitalize border-[#BBD0FF] hover:bg-[#BBD0FF] duration-200 p-2 rounded-xl font-medium ${q3 === 1 && "bg-[#BBD0FF]"}`}>
                Immediately
              </button>
              <button onClick={() => setQ3(2)} className={`text-left border capitalize border-[#BBD0FF] hover:bg-[#BBD0FF] duration-200 p-2 rounded-xl font-medium ${q3 === 2 && "bg-[#BBD0FF]"}`}>
                Within A Week
              </button>
              <button onClick={() => setQ3(3)} className={`text-left border capitalize border-[#BBD0FF] hover:bg-[#BBD0FF] duration-200 p-2 rounded-xl font-medium ${q3 === 3 && "bg-[#BBD0FF]"}`}>
                1-3 month
              </button>
            </div>
          </div>
          <div className="lg:w-[80%] xl:w-[70%] lg:mx-auto mb-8">
            <span className="text-[#ADB5BD] font-medium text-sm md:text-base">ARRANGE CARE</span>
            <h3 className="font-semibold mb-3 md:text-xl">Does the property have a private bedroom for the carer?</h3>
            <div className="flex flex-col gap-3">
              <button onClick={() => setQ4(1)} className={`text-left border border-[#BBD0FF] hover:bg-[#BBD0FF] duration-200 p-2 rounded-xl font-medium ${q4 === 1 && "bg-[#BBD0FF]"}`}>
                Yes
              </button>
              <button onClick={() => setQ4(2)} className={`text-left border border-[#BBD0FF] hover:bg-[#BBD0FF] duration-200 p-2 rounded-xl font-medium ${q4 === 2 && "bg-[#BBD0FF]"}`}>
                No
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between lg:w-[80%] xl:w-[70%] lg:mx-auto">
            <button onClick={() => navigate(-1)} className="capitalize border border-[#8D99AE] hover:border-[#BBD0FF] text-[#8D99AE] hover:text-[#003049] duration-200 py-1 px-12 rounded-xl font-[500] text-center">
              Back
            </button>
            <button onClick={handleStage1} className="capitalize bg-accent hover:bg-red-700 duration-200 text-white py-1 px-12 rounded-xl font-[500] border border-accent text-center">
              Next
            </button>
          </div>
        </div>
      )}
      {stage === 2 && (
        <div className="border border-[#BBD0FF] md:w-[80%] lg:w-[70%] md:mx-auto p-3 md:p-6 rounded-xl py-24 md:py-[140px]">
          <div className="lg:w-[80%] xl:w-[70%] lg:mx-auto mb-8">
            <div>
              <span className="text-[#ADB5BD] font-medium text-sm md:text-base">COMMUNITY POLICY</span>
              <h3 className="font-semibold mb-8 md:text-xl">relief is committed to equality of opportunity for all: caregivers and customers</h3>
              <p className="text-[#495057] text-lg mb-16">Relief offers freedom of choice: caregivers and customers are free to choose who they work for and who they work with, based on transparency, honesty and mutual respect. relief is a diverse and vibrant community with caregivers and customers . relief cannot -and will not- discriminate or tolerate any discrimination against any caregivers or customer.</p>
            </div>
          </div>
          <div className="flex items-center justify-between lg:w-[80%] xl:w-[70%] lg:mx-auto">
            <button onClick={() => setStage(1)} className="capitalize border border-[#8D99AE] hover:border-[#BBD0FF] text-[#8D99AE] hover:text-[#003049] duration-200 py-1 px-12 rounded-xl font-[500] text-center">
              Back
            </button>
            <button onClick={() => setStage(3)} className="capitalize bg-accent hover:bg-red-700 duration-200 text-white py-1 px-12 rounded-xl font-[500] border border-accent text-center">
              Next
            </button>
          </div>
        </div>
      )}
      {stage === 3 && (
        <div className="border border-[#BBD0FF] md:w-[80%] lg:w-[70%] md:mx-auto p-3 md:p-6 rounded-xl py-24 md:py-[140px]">
          <div className="lg:w-[80%] xl:w-[70%] lg:mx-auto mb-8">
            <div>
              <span className="text-[#ADB5BD] font-medium text-sm md:text-base uppercase">Start arranging care</span>
              <h3 className="font-semibold mb-8 md:text-xl">Select the type of care you would like for {userData.name}</h3>
              <div className="flex flex-col gap-3 mb-12">
                <button onClick={() => navigate("/choose-carer")} className={`text-center border border-[#BBD0FF] hover:bg-[#BBD0FF] duration-200 p-2 rounded-xl capitalize font-medium`}>Find out and choose a caregiver</button>
                <button onClick={() => setStage(4)} className={`text-center border border-[#BBD0FF] hover:bg-[#BBD0FF] duration-200 p-2 rounded-xl capitalize font-medium`}>
                  share your care request
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between lg:w-[80%] xl:w-[70%] lg:mx-auto">
            <button onClick={() => setStage(2)} className="capitalize border border-[#8D99AE] hover:border-[#BBD0FF] text-[#8D99AE] hover:text-[#003049] duration-200 py-1 px-12 rounded-xl font-[500] text-center">
              Back
            </button>
          </div>
        </div>
      )}
      {stage === 4 && (
        <div className="border border-[#BBD0FF] md:w-[80%] lg:w-[70%] md:mx-auto p-3 md:p-6 rounded-xl">
          <div className="lg:w-[80%] xl:w-[70%] lg:mx-auto mb-8">
            <span className="text-[#ADB5BD] font-medium text-sm md:text-base uppercase">Care preferences</span>
            <h3 className="font-semibold mb-3 md:text-xl">Fill in {userData.name}'s preferences and share your care request.</h3>
          </div>
          
          <div className="lg:w-[80%] xl:w-[70%] lg:mx-auto mb-8">
            <h3 className="font-semibold mb-3 md:text-xl">Does {userData.name} have any preference on the gender of their carer?</h3>
            <div className="flex flex-col gap-3">
              <button onClick={() => setQ5(1)} className={`text-left border border-[#BBD0FF] hover:bg-[#BBD0FF] duration-200 p-2 rounded-xl font-medium ${q5 === 1 && "bg-[#BBD0FF]"}`}>
                Male
              </button>
              <button onClick={() => setQ5(2)} className={`text-left border border-[#BBD0FF] hover:bg-[#BBD0FF] duration-200 p-2 rounded-xl font-medium ${q5 === 2 && "bg-[#BBD0FF]"}`}>
                Female
              </button>
              <button onClick={() => setQ5(3)} className={`text-left border border-[#BBD0FF] hover:bg-[#BBD0FF] duration-200 p-2 rounded-xl font-medium ${q5 === 3 && "bg-[#BBD0FF]"}`}>
                No Preference
              </button>
            </div>
          </div>

          <div className="lg:w-[80%] xl:w-[70%] lg:mx-auto mb-8">
            <h3 className="font-semibold mb-3 md:text-xl">Would you accept a carer who smokes?</h3>
            <div className="flex flex-col gap-3">
              <button onClick={() => setQ6(1)} className={`text-left border border-[#BBD0FF] hover:bg-[#BBD0FF] duration-200 p-2 rounded-xl font-medium ${q6 === 1 && "bg-[#BBD0FF]"}`}>
                Yes
              </button>
              <button onClick={() => setQ6(2)} className={`text-left border border-[#BBD0FF] hover:bg-[#BBD0FF] duration-200 p-2 rounded-xl font-medium ${q6 === 2 && "bg-[#BBD0FF]"}`}>
                No
              </button>
            </div>
          </div>

          <div className="lg:w-[80%] xl:w-[70%] lg:mx-auto mb-8">
            <h3 className="font-semibold mb-3 md:text-xl">Do you need a carer that can drive?</h3>
            <div className="flex flex-col gap-3">
              <button onClick={() => setQ7(1)} className={`text-left border border-[#BBD0FF] hover:bg-[#BBD0FF] duration-200 p-2 rounded-xl font-medium ${q7 === 1 && "bg-[#BBD0FF]"}`}>
                Yes
              </button>
              <button onClick={() => setQ7(2)} className={`text-left border border-[#BBD0FF] hover:bg-[#BBD0FF] duration-200 p-2 rounded-xl font-medium ${q7 === 2 && "bg-[#BBD0FF]"}`}>
                No
              </button>
            </div>
          </div>

          <div className="lg:w-[80%] xl:w-[70%] lg:mx-auto mb-8">
            <h3 className="font-semibold mb-3 md:text-xl">Is there WiFi at the property?</h3>
            <div className="flex flex-col gap-3">
              <button onClick={() => setQ8(1)} className={`text-left border border-[#BBD0FF] hover:bg-[#BBD0FF] duration-200 p-2 rounded-xl font-medium ${q8 === 1 && "bg-[#BBD0FF]"}`}>
                Yes
              </button>
              <button onClick={() => setQ8(2)} className={`text-left border border-[#BBD0FF] hover:bg-[#BBD0FF] duration-200 p-2 rounded-xl font-medium ${q8 === 2 && "bg-[#BBD0FF]"}`}>
                No
              </button>
            </div>
          </div>

          <div className="lg:w-[80%] xl:w-[70%] lg:mx-auto mb-8">
            <h3 className="font-semibold mb-3 md:text-xl">What is the full address of {userData.name}'s home?</h3>
            <div className="flex flex-col gap-3">
            <input onChange={(e) => setQ9(e.target.value)} className="outline-none border border-[#BBD0FF] focus:border-[1.5px] focus:placeholder:opacity-0 placeholder:duration-200 focus:border-[#00B4D8] duration-200 px-2 py-1 text-lg rounded-xl" type="text" id="location" placeholder={`Enter ${userData.name}'s Location`} />
            </div>
          </div>

          <div className="lg:w-[80%] xl:w-[70%] lg:mx-auto mb-8">
            <h3 className="font-semibold mb-3 md:text-xl">Please click to confirm the following:</h3>
            <div className="flex flex-col gap-3">
              <button onClick={() => setQ10(1)} className={`text-left border border-[#BBD0FF] hover:bg-[#BBD0FF] duration-200 p-2 rounded-xl font-medium ${q10 === 1 && "bg-[#BBD0FF]"}`}>
              No cameras are located in the carer's sleeping area or private spaces like bathrooms
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between lg:w-[80%] xl:w-[70%] lg:mx-auto">
            <button onClick={() => setStage(3)} className="capitalize border border-[#8D99AE] hover:border-[#BBD0FF] text-[#8D99AE] hover:text-[#003049] duration-200 py-1 w-[150px] rounded-xl font-[500] text-center">
              Back
            </button>
            <button onClick={sendRequest} className="capitalize bg-accent hover:bg-red-700 duration-200 text-white py-1 w-[150px] rounded-xl font-[500] border border-accent text-center">
              Send Request
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ForMe;
