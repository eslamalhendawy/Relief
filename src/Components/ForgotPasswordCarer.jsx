import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postData } from "../Services/apiCalls";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import image from "/assets/passwordLogo.png";

const ForgotPasswordCarer = () => {
  const [email, setEmail] = useState("");
  const regEmail = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Relief | Forgot Password";
    window.scrollTo(0, 0);
  }, []);

  const handleClick = async () => {
    if (email === "") {
      return toast.error("Please fill the email field");
    }
    if (!email.match(regEmail)) {
      return toast.error("Please enter a valid email address");
    }
    localStorage.setItem("email", email);
    toast.info("Sending OTP to your email...");
    const response = await postData("caregiver/forgot-password", { email });
    if (response.message === "Verification code sent successfully") {
      toast.success("OTP sent successfully");
      localStorage.setItem("token", response.token);
      navigate("/otp-carer");
    } else {
      toast.error("Email not registered");
    }
  };

  return (
    <section className="container flex mx-auto px-4 py-16">
      <div className="flex flex-col items-center justify-center border-2 border-[#BBD0FF] rounded-xl py-12 lg:py-[120px] md:w-[70%] mx-auto px-4 mt-16">
        <img className="mb-10 w-[80px] md:w-[120px]" src={image} alt="" />
        <div className="w-full md:w-[70%] xl:w-[60%] flex flex-col gap-2 mb-8">
          <label htmlFor="email" className="font-semibold text-[22px]">
            Email Address
          </label>
          <input onChange={(e) => setEmail(e.target.value)} className="outline-none border border-[#BBD0FF] focus:border-[1.5px] focus:placeholder:opacity-0 placeholder:duration-200 focus:border-[#00B4D8] duration-200 px-2 py-1 text-lg rounded-xl" type="text" id="email" placeholder="Enter your email" />
        </div>
        <div className="h-[1px] w-[70%] md:w-[50%] xl:w-[30%] mx-auto bg-[#6C757D] mb-8" />
        <div className="mb-4 w-full md:w-[70%] xl:w-[60%]">
          <button onClick={handleClick} className="bg-accent hover:bg-red-700 duration-200 text-white w-full py-2 text-2xl rounded-xl font-medium">
            Send Code
          </button>
        </div>
        <div>
          <p className="text-center font-medium text-[#212529] text-lg">
            Don't have an account?{" "}
            <Link to="/carer-sign-up" className="font-bold text-accent hover:text-red-700 duration-200 text-lg">
              Register
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default ForgotPasswordCarer