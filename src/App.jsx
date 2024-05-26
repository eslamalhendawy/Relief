import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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

function App() {


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
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
