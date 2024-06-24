import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postData } from "../Services/apiCalls";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import image from "/assets/passwordLogo.png";

const OTPCarer = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const navigate = useNavigate();
  const emailFromStorage = localStorage.getItem("email");
  const token = localStorage.getItem("token");

  useEffect(() => {
    document.title = "Relief | Forgot Password";
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e, i) => {
    setOtp([...otp.map((data, index) => (index === i ? e.target.value : data))]);
    if (e.target.value.length === 1 && i < 3) {
      e.target.nextElementSibling.focus();
    }
    if (e.target.value.length === 0 && i > 0) {
      e.target.previousElementSibling.focus();
    }
  };

  const handleClick = async () => {
    if (otp.join("") === "") {
      return toast.error("Please fill the OTP field");
    }
    if (otp.join("").length < 4) {
      return toast.error("Please fill the OTP field completely");
    }
    const response = await postData(`caregiver/verify-code/${token}`, { verificationCode: otp.join("") });
    if (response) {
      toast.success("Code verified successfully");
      navigate("/reset-password-carer");
    }else{
      toast.error("Invalid verification code");
    }
  };

  return (
    <section className="container flex mx-auto px-4 py-16">
      <div className="flex flex-col items-center justify-center border-2 border-[#BBD0FF] rounded-xl py-12 lg:py-[120px] md:w-[70%] mx-auto px-4 mt-16">
        <img className="mb-10 w-[80px] md:w-[120px]" src={image} alt="" />
        <div className="w-full md:w-[70%] xl:w-[60%] flex flex-col gap-2 mb-4">
          <label htmlFor="email" className="font-semibold text-[22px] capitalize">
            enter the code we sent at
          </label>
          <span className="text-[#ADB5BD] mb-2 text-lg">{emailFromStorage}</span>
          <div className="w-full flex items-center justify-between mb-8">
            {otp.map((data, index) => (
              <input value={data} onChange={(e) => handleChange(e, index)} maxLength={1} className="w-[20%] px-2 py-3 text-center border-2 outline-none border-[#BBD0FF] focus:border-[#00B4D8] duration-200 text-xl text-black rounded-xl" key={index} type="password" />
            ))}
          </div>
        </div>
        <div className="h-[1px] w-[70%] md:w-[50%] xl:w-[30%] mx-auto bg-[#6C757D] mb-8" />
        <div className="mb-4 w-full md:w-[70%] xl:w-[60%]">
          <button onClick={handleClick} className="bg-accent hover:bg-red-700 duration-200 text-white w-full py-2 text-2xl rounded-xl font-medium">
            Verify Code
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

export default OTPCarer