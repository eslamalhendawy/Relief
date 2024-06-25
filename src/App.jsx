import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useAppContext } from "./Context/AppContext";
import { useEffect } from "react";
import { getData } from "./Services/apiCalls";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import LiveInCare from "./Components/LiveInCare";
import ShortTermCare from "./Components/ShortTermCare";
import Pricing from "./Components/Pricing";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import SpeakToExpert from "./Components/SpeakToExpert";
import GetStarted from "./Components/GetStarted";
import ChooseCareReceiver from "./Components/ChooseCareReceiver";
import ForMe from "./Components/ForMe";
import ForSomeone from "./Components/ForSomeone";
import Profile from "./Components/Profile";
import CarerSignUp from "./Components/CarerSignUp";
import CarerSchedule from "./Components/CarerSchedule";
import CarerNotifactions from "./Components/CarerNotifactions";
import ChooseCarer from "./Components/ChooseCarer";
import CarerProfile from "./Components/CarerProfile";
import CarerRatings from "./Components/CarerRatings";
import CarerLogin from "./Components/CarerLogin";
import ForgotPassword from "./Components/ForgotPassword";
import OTP from "./Components/OTP";
import ResetPassword from "./Components/ResetPassword";
import ForgotPasswordCarer from "./Components/ForgotPasswordCarer";
import OTPCarer from "./Components/OTPCarer";
import ResetPasswordCarer from "./Components/ResetPasswordCarer";
import PatientNotifications from "./Components/PatientNotifications";

function App() {
  const loggedIn = Boolean(localStorage.getItem("token"));
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const { setUserData } = useAppContext();

  useEffect(() => {
    if (loggedIn) {
      if (role === "patient") {
        const fetchData = async () => {
          const response = await getData(`/patient/getPatientByToken/${token}`);
          if(response){
            setUserData({
              name: response.UserData.userName,
              email: response.UserData.email,
              phone: response.UserData.phone,
              avatar: response.UserData.profilePhoto,
              healthRecord: response.UserData.healthRecord,
              long: response.UserData.location.coordinates.long,
              lat: response.UserData.location.coordinates.lat,
              dateOfBirth: response.UserData.dateOfBirth,
              role: "patient",
              id: response.UserData._id,
              loggedIn: true,
            }); 
          }
        };
        fetchData();
      } else if (role === "carer") {
        const fetchData = async () => {
          const response = await getData(`/caregiver/getCaregiverByToken/${token}`);
          if(response){
            setUserData({
              name: response.UserData.userName,
              email: response.UserData.email,
              phone: response.UserData.phone,
              avatar: response.UserData.profilePhoto,
              bio: response.UserData.biography,
              canYouDrive: response.UserData.canYouDrive,
              dateOfBirth: response.UserData.dateOfBirth,
              doYouSmoke: response.UserData.doYouSmoke,
              long: response.UserData.location.coordinates.long,
              lat: response.UserData.location.coordinates.lat,
              role: "carer",
              id: response.UserData._id,
              loggedIn: true,
            })
          }
        };
        fetchData();
      }
    }
  }, []);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/live-in-care" element={<LiveInCare />} />
          <Route path="/short-term-care" element={<ShortTermCare />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/carer-login" element={<CarerLogin />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/speak-to-expert" element={<SpeakToExpert />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/choose-care-receiver" element={<ChooseCareReceiver />} />
          <Route path="/for-me" element={<ForMe />} />
          <Route path="/for-someone" element={<ForSomeone />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/carer-sign-up" element={<CarerSignUp />} />
          <Route path="/carer-schedule" element={<CarerSchedule />} />
          <Route path="/carer-notifications" element={<CarerNotifactions />} />
          <Route path="/choose-carer" element={<ChooseCarer />} />
          <Route path="/carer-profile/:id" element={<CarerProfile />} />
          <Route path="/carer-ratings" element={<CarerRatings />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/forgot-password-carer" element={<ForgotPasswordCarer />} />
          <Route path="/otp-carer" element={<OTPCarer />} />
          <Route path="/reset-password-carer" element={<ResetPasswordCarer />} />
          <Route path="/patient-notifications" element={<PatientNotifications />} />
        </Routes>
      </Router>
      <ToastContainer autoClose={2000} theme="dark" newestOnTop={true} />
    </>
  );
}

export default App;
