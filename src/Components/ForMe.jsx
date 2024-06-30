import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../Context/AppContext";
import { postData } from "../Services/apiCalls";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select from "react-select";

const days = Array.from({ length: 31 }, (_, i) => ({ value: i + 1, label: i + 1 }));
const months = Array.from({ length: 12 }, (_, i) => ({ value: i + 1, label: i + 1 }));
const type = [
  { value: "day", label: "Days" },
  { value: "month", label: "Months" },
];

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    border: "1px solid #BBD0FF",
    borderRadius: "12px",
    padding: "4px 6px",
    boxShadow: state.isFocused ? "0 0 0 2px #2868c7" : null,
    outline: "none",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#2868c7" : null,
    color: state.isSelected ? "#fff" : null,
  }),
};

const ForMe = () => {
  const [stage, setStage] = useState(1);
  const [HowManyPeopleAreYouArrangingCareFor, setHowManyPeopleAreYouArrangingCareFor] = useState(null);
  const [HowManyWeeksOfCareAreRequired, setHowManyWeeksOfCareAreRequired] = useState(null);
  const [WhenWouldYouLikeTheCareToStart, setWhenWouldYouLikeTheCareToStart] = useState(null);
  const [DoesThePropertyHaveAPrivateBedroomForTheCarer, setDoesThePropertyHaveAPrivateBedroomForTheCarer] = useState(null);
  const [DoYouHaveAnyPreferenceOnTheGenderOfTheirCarer, setDoYouHaveAnyPreferenceOnTheGenderOfTheirCarer] = useState(null);
  const [WouldYouAcceptACarerWhoSmokes, setWouldYouAcceptACarerWhoSmokes] = useState(null);
  const [DoYouNeedACarerThatCanDrive, setDoYouNeedACarerThatCanDrive] = useState(null);
  const [q10, setQ10] = useState(null);
  const [day, setDay] = useState(null);
  const [month, setMonth] = useState(null);
  const [hour, setHour] = useState(null);
  const [minutes, setMinutes] = useState(null);
  const [amount, setAmount] = useState(null);
  const [unit, setUnit] = useState(null);
  const { userData } = useAppContext();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const input1 = useRef(null);
  const input2 = useRef(null);

  const hourHandler = (e) => {
    if (e.target.value.length == 2) {
      input1.current.nextSibling.focus();
      setHour(e.target.value);
    }
  };

  const minutesHandler = (e) => {
    if (e.target.value.length == 0) {
      input2.current.previousSibling.focus();
      setMinutes(e.target.value);
    }
    if (e.target.value.length > 2) {
      input2.current.value = input2.current.value.slice(0, 2);
      setMinutes(e.target.value);
    }
    if (e.target.value.length == 2) {
      setMinutes(e.target.value);
    }
  };

  useEffect(() => {
    document.title = "Relief | Care For Me";
    window.scrollTo(0, 0);
  }, [stage]);

  const handleStage1 = () => {
    if (!HowManyPeopleAreYouArrangingCareFor || !setHowManyWeeksOfCareAreRequired || !WhenWouldYouLikeTheCareToStart || !setDoesThePropertyHaveAPrivateBedroomForTheCarer) {
      return toast.error("Please answer all questions");
    }
    setStage(2);
  };

  const sendRequest = async () => {
    if (!DoYouHaveAnyPreferenceOnTheGenderOfTheirCarer || !WouldYouAcceptACarerWhoSmokes || !DoYouNeedACarerThatCanDrive || !q10 || !day || !month || !hour || !minutes || !amount || !unit) {
      return toast.error("Please answer all questions");
    }
    const tempHours = Number(hour);
    const tempMinutes = Number(minutes);
    const tempAmount = Number(amount);
    const data = { HowManyPeopleAreYouArrangingCareFor, HowManyWeeksOfCareAreRequired, WhenWouldYouLikeTheCareToStart, DoesThePropertyHaveAPrivateBedroomForTheCarer, DoYouHaveAnyPreferenceOnTheGenderOfTheirCarer, WouldYouAcceptACarerWhoSmokes, DoYouNeedACarerThatCanDrive, appointmentDateTime: { day, month, hours: tempHours, minutes: tempMinutes }, determineThePeriodOfService: { amount: tempAmount, unit } };
    toast.info("Sending Request...");
    const response = await postData("patient/publicrequests", data, token);
    if(response){
      toast.success("Request Sent Successfully");
      navigate("/");
    }else{
      toast.error("Failed to send request");
    }
  };

  return (
    <section className="container mx-auto px-4 py-16">
      {stage === 1 && (
        <div className="border border-[#BBD0FF] md:w-[80%] lg:w-[70%] md:mx-auto p-3 md:p-6 rounded-xl">
          <div className="lg:w-[80%] xl:w-[70%] lg:mx-auto mb-8">
            <span className="text-[#ADB5BD] font-medium text-sm md:text-base">YOUR RELATIONSHIP</span>
            <h3 className="font-semibold mb-3 md:text-xl">How many people are you arranging care for?</h3>
            <div className="flex flex-col gap-3">
              <button onClick={() => setHowManyPeopleAreYouArrangingCareFor(1)} className={`text-left border border-[#BBD0FF] hover:bg-[#BBD0FF] duration-200 p-2 rounded-xl font-medium ${HowManyPeopleAreYouArrangingCareFor === 1 && "bg-[#BBD0FF]"}`}>
                1
              </button>
              <button onClick={() => setHowManyPeopleAreYouArrangingCareFor(2)} className={`text-left border border-[#BBD0FF] hover:bg-[#BBD0FF] duration-200 p-2 rounded-xl font-medium ${HowManyPeopleAreYouArrangingCareFor === 2 && "bg-[#BBD0FF]"}`}>
                2
              </button>
            </div>
          </div>
          <div className="lg:w-[80%] xl:w-[70%] lg:mx-auto mb-8">
            <span className="text-[#ADB5BD] font-medium text-sm md:text-base">WEEKS OF CARE</span>
            <h3 className="font-semibold mb-3 md:text-xl">How many weeks of care are required?</h3>
            <div className="flex flex-col gap-3">
              <button onClick={() => setHowManyWeeksOfCareAreRequired("1-3 weeks")} className={`text-left border border-[#BBD0FF] hover:bg-[#BBD0FF] duration-200 p-2 rounded-xl font-medium ${HowManyWeeksOfCareAreRequired === "1-3 weeks" && "bg-[#BBD0FF]"}`}>
                1-3 Weeks
              </button>
              <button onClick={() => setHowManyWeeksOfCareAreRequired("4-8 weeks")} className={`text-left border border-[#BBD0FF] hover:bg-[#BBD0FF] duration-200 p-2 rounded-xl font-medium ${HowManyWeeksOfCareAreRequired === "4-8 weeks" && "bg-[#BBD0FF]"}`}>
                4-8 Weeks
              </button>
              <button onClick={() => setHowManyWeeksOfCareAreRequired("Ongoing")} className={`text-left border border-[#BBD0FF] hover:bg-[#BBD0FF] duration-200 p-2 rounded-xl font-medium ${HowManyWeeksOfCareAreRequired === "Ongoing" && "bg-[#BBD0FF]"}`}>
                Ongoing
              </button>
            </div>
          </div>
          <div className="lg:w-[80%] xl:w-[70%] lg:mx-auto mb-8">
            <span className="text-[#ADB5BD] font-medium text-sm md:text-base">START DATE</span>
            <h3 className="font-semibold mb-3 md:text-xl">When would you like the care to start?</h3>
            <div className="flex flex-col gap-3">
              <button onClick={() => setWhenWouldYouLikeTheCareToStart("Immediately")} className={`text-left border capitalize border-[#BBD0FF] hover:bg-[#BBD0FF] duration-200 p-2 rounded-xl font-medium ${WhenWouldYouLikeTheCareToStart === "Immediately" && "bg-[#BBD0FF]"}`}>
                Immediately
              </button>
              <button onClick={() => setWhenWouldYouLikeTheCareToStart("within a week")} className={`text-left border capitalize border-[#BBD0FF] hover:bg-[#BBD0FF] duration-200 p-2 rounded-xl font-medium ${WhenWouldYouLikeTheCareToStart === "within a week" && "bg-[#BBD0FF]"}`}>
                Within A Week
              </button>
              <button onClick={() => setWhenWouldYouLikeTheCareToStart("1-3 month")} className={`text-left border capitalize border-[#BBD0FF] hover:bg-[#BBD0FF] duration-200 p-2 rounded-xl font-medium ${WhenWouldYouLikeTheCareToStart === "1-3 month" && "bg-[#BBD0FF]"}`}>
                1-3 month
              </button>
            </div>
          </div>
          <div className="lg:w-[80%] xl:w-[70%] lg:mx-auto mb-8">
            <span className="text-[#ADB5BD] font-medium text-sm md:text-base">ARRANGE CARE</span>
            <h3 className="font-semibold mb-3 md:text-xl">Does the property have a private bedroom for the carer?</h3>
            <div className="flex flex-col gap-3">
              <button onClick={() => setDoesThePropertyHaveAPrivateBedroomForTheCarer("yes")} className={`text-left border border-[#BBD0FF] hover:bg-[#BBD0FF] duration-200 p-2 rounded-xl font-medium ${DoesThePropertyHaveAPrivateBedroomForTheCarer === "yes" && "bg-[#BBD0FF]"}`}>
                Yes
              </button>
              <button onClick={() => setDoesThePropertyHaveAPrivateBedroomForTheCarer("no")} className={`text-left border border-[#BBD0FF] hover:bg-[#BBD0FF] duration-200 p-2 rounded-xl font-medium ${DoesThePropertyHaveAPrivateBedroomForTheCarer === "no" && "bg-[#BBD0FF]"}`}>
                No
              </button>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 lg:w-[80%] xl:w-[70%] lg:mx-auto">
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
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 lg:w-[80%] xl:w-[70%] lg:mx-auto">
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
                <button onClick={() => navigate("/choose-carer")} className={`text-center border border-[#BBD0FF] hover:bg-[#BBD0FF] duration-200 p-2 rounded-xl capitalize font-medium`}>
                  Find out and choose a caregiver
                </button>
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
              <button onClick={() => setDoYouHaveAnyPreferenceOnTheGenderOfTheirCarer("male")} className={`text-left border border-[#BBD0FF] hover:bg-[#BBD0FF] duration-200 p-2 rounded-xl font-medium ${DoYouHaveAnyPreferenceOnTheGenderOfTheirCarer === "male" && "bg-[#BBD0FF]"}`}>
                Male
              </button>
              <button onClick={() => setDoYouHaveAnyPreferenceOnTheGenderOfTheirCarer("female")} className={`text-left border border-[#BBD0FF] hover:bg-[#BBD0FF] duration-200 p-2 rounded-xl font-medium ${DoYouHaveAnyPreferenceOnTheGenderOfTheirCarer === "female" && "bg-[#BBD0FF]"}`}>
                Female
              </button>
              <button onClick={() => setDoYouHaveAnyPreferenceOnTheGenderOfTheirCarer("no preference")} className={`text-left border border-[#BBD0FF] hover:bg-[#BBD0FF] duration-200 p-2 rounded-xl font-medium ${DoYouHaveAnyPreferenceOnTheGenderOfTheirCarer === "no preference" && "bg-[#BBD0FF]"}`}>
                No Preference
              </button>
            </div>
          </div>
          <div className="lg:w-[80%] xl:w-[70%] lg:mx-auto mb-8">
            <h3 className="font-semibold mb-3 md:text-xl">Would you accept a carer who smokes?</h3>
            <div className="flex flex-col gap-3">
              <button onClick={() => setWouldYouAcceptACarerWhoSmokes("yes")} className={`text-left border border-[#BBD0FF] hover:bg-[#BBD0FF] duration-200 p-2 rounded-xl font-medium ${WouldYouAcceptACarerWhoSmokes === "yes" && "bg-[#BBD0FF]"}`}>
                Yes
              </button>
              <button onClick={() => setWouldYouAcceptACarerWhoSmokes("no")} className={`text-left border border-[#BBD0FF] hover:bg-[#BBD0FF] duration-200 p-2 rounded-xl font-medium ${WouldYouAcceptACarerWhoSmokes === "no" && "bg-[#BBD0FF]"}`}>
                No
              </button>
            </div>
          </div>
          <div className="lg:w-[80%] xl:w-[70%] lg:mx-auto mb-8">
            <h3 className="font-semibold mb-3 md:text-xl">Do you need a carer that can drive?</h3>
            <div className="flex flex-col gap-3">
              <button onClick={() => setDoYouNeedACarerThatCanDrive("yes")} className={`text-left border border-[#BBD0FF] hover:bg-[#BBD0FF] duration-200 p-2 rounded-xl font-medium ${DoYouNeedACarerThatCanDrive === "yes" && "bg-[#BBD0FF]"}`}>
                Yes
              </button>
              <button onClick={() => setDoYouNeedACarerThatCanDrive("no")} className={`text-left border border-[#BBD0FF] hover:bg-[#BBD0FF] duration-200 p-2 rounded-xl font-medium ${DoYouNeedACarerThatCanDrive === "no" && "bg-[#BBD0FF]"}`}>
                No
              </button>
            </div>
          </div>

          <div className="lg:w-[80%] xl:w-[70%] lg:mx-auto mb-8">
            <h3 className="font-semibold mb-3 md:text-xl">Determine the period of service</h3>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <input type="text" onChange={(e) => setAmount(e.target.value)} className="outline-none border border-[#BBD0FF] focus:border-[1.5px] focus:placeholder:opacity-0 placeholder:duration-200 focus:border-[#00B4D8] duration-200 px-2 py-[6px] text-lg rounded-xl block w-full" placeholder="Enter Number Of Days Or Months" />
                <Select className="basis-1/2" onChange={(e) => setUnit(e.value)} styles={customStyles} options={type} placeholder="Select" />
              </div>
            </div>
          </div>
          <div className="lg:w-[80%] xl:w-[70%] lg:mx-auto mb-8">
            <h3 className="font-semibold mb-3 md:text-xl">Appointment Date</h3>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <Select className="basis-1/3" onChange={(e) => setDay(e.value)} styles={customStyles} options={days} placeholder="Select Day" />
                <Select className="basis-1/3" onChange={(e) => setMonth(e.value)} styles={customStyles} options={months} placeholder="Select Month" />
                <div className="basis-1/3 outline-none border border-[#BBD0FF] focus:border-[1.5px] focus:placeholder:opacity-0 placeholder:duration-200 focus:border-[#00B4D8] duration-200 px-2 py-1 text-lg rounded-xl flex gap-1">
                  <input onChange={hourHandler} className="outline-none focus:placeholder:opacity-0 placeholder:duration-200 w-[35px]" placeholder="HH :" type="number" ref={input1} />
                  <input ref={input2} onChange={minutesHandler} className="outline-none focus:placeholder:opacity-0 placeholder:duration-200 w-[30px]" placeholder="MM" type="number" />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[80%] xl:w-[70%] lg:mx-auto mb-8">
            <h3 className="font-semibold mb-3 md:text-xl">Please click to confirm the following:</h3>
            <div className="flex flex-col gap-3">
              <button onClick={() => setQ10(1)} className={`text-left border border-[#BBD0FF] hover:bg-[#BBD0FF] duration-200 p-2 rounded-xl font-medium ${q10 === 1 && "bg-[#BBD0FF]"}`}>
                No cameras are located in the carer&apos;s sleeping area or private spaces like bathrooms
              </button>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 lg:w-[80%] xl:w-[70%] lg:mx-auto">
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
