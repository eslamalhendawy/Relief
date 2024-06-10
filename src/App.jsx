import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useAppContext } from "./Context/AppContext";
import { useEffect } from "react";
import { getData } from "./Services/apiCalls";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import Footer from "./Components/Footer";
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

function App() {
  const loggedIn = Boolean(localStorage.getItem("userToken"));
  const { setUserData } = useAppContext();

  useEffect(() => {
    if (loggedIn) {
      const token = localStorage.getItem("userToken");
      setUserData({
        name: "John Doe",
        email: "test@test.com",
        phone: "01012609957",
        address: "123, Random Street",
        avatar: "random",
        loggedIn: true,
      });
      // getData("users", token).then((response) => {
      //   if(response.status === "success") {
      //     setUserData({
      //       name: response.data.user.name,
      //       email: response.data.user.email,
      //       phone: response.data.user.phone,
      //       address: response.data.user.address,
      //       avatar: response.data.user.photo,
      //       loggedIn: true,
      //     });
      //   }
      // });
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
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/speak-to-expert" element={<SpeakToExpert />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/choose-care-receiver" element={<ChooseCareReceiver />} />
          <Route path="/for-me" element={<ForMe />} />
          <Route path="/for-someone" element={<ForSomeone />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </Router>
      <ToastContainer autoClose={2500} theme="dark" newestOnTop={true} />
    </>
  );
}

export default App;
