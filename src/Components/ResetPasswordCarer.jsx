import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postData } from "../Services/apiCalls";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import image from "/assets/passwordLogo.png";

const ResetPasswordCarer = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [hidden, setHidden] = useState(true);
  const [hidden2, setHidden2] = useState(true);
  const navigate = useNavigate();
  const regPassword = /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*]).+$/;
  const token = localStorage.getItem("token");

  useEffect(() => {
    document.title = "Relief | Forgot Password";
    window.scrollTo(0, 0);
  }, []);

  const handleClick = async () => {
    if (newPassword === "" || confirmPassword === "") {
      return toast.error("Please fill all the fields");
    }
    if (newPassword.length < 8) {
      return toast.error("Password must be atleast 8 characters long");
    }
    if (!newPassword.match(regPassword)) {
      return toast.error("Password must contain at least one special character, one number and one alphabet");
    }
    if (newPassword !== confirmPassword) {
      return toast.error("Passwords do not match");
    }
    toast.info("Changing password...");
    const response = await postData(`caregiver/reset-password/${token}`, { newPassword, confirmPassword });
    if(response){
      toast.success("Password changed successfully");
      localStorage.clear();
      navigate("/carer-login");
    }else{
      toast.error("Something went wrong");
    }
  };

  return (
    <section className="container flex mx-auto px-4 py-16">
      <div className="flex flex-col items-center justify-center border-2 border-[#BBD0FF] rounded-xl py-12 lg:py-[120px] md:w-[70%] mx-auto px-4 mt-16">
        <img className="mb-10 w-[80px] md:w-[120px]" src={image} alt="" />
        <div className="w-full md:w-[70%] xl:w-[60%] flex flex-col gap-2 mb-4">
          <label htmlFor="password" className="font-semibold text-[22px]">
            New Password
          </label>
          <div className="relative">
            <input onChange={(e) => setNewPassword(e.target.value)} className="outline-none border border-[#BBD0FF] focus:border-[1.5px] focus:placeholder:opacity-0 placeholder:duration-200 focus:border-[#00B4D8] duration-200 px-2 py-1 text-lg rounded-xl w-full" type={hidden ? "password" : "text"} id="password" placeholder="Enter new password" />
            <button onClick={() => setHidden(!hidden)} className="absolute right-2 top-[50%] translate-y-[-50%] text-[#ADB5BD] hover:text-black duration-300">
              <i className={`fa-solid  text-lg ${hidden ? "fa-eye" : "fa-eye-slash"}`}></i>
            </button>
          </div>
        </div>
        <div className="w-full md:w-[70%] xl:w-[60%] flex flex-col gap-2 mb-8">
          <label htmlFor="confirmPassword" className="font-semibold text-[22px]">
            Confirm New Password
          </label>
          <div className="relative">
            <input onChange={(e) => setConfirmPassword(e.target.value)} className="outline-none border border-[#BBD0FF] focus:border-[1.5px] focus:placeholder:opacity-0 placeholder:duration-200 focus:border-[#00B4D8] duration-200 px-2 py-1 w-full text-lg rounded-xl" type={hidden2 ? "password" : "text"} id="confirmPassword" placeholder="Retype your password" />
            <button onClick={() => setHidden2(!hidden2)} className="absolute right-2 top-[50%] translate-y-[-50%] text-[#ADB5BD] hover:text-black duration-300">
              <i className={`fa-solid  text-lg ${hidden2 ? "fa-eye" : "fa-eye-slash"}`}></i>
            </button>
          </div>
        </div>
        <div className="h-[1px] w-[70%] md:w-[50%] xl:w-[30%] mx-auto bg-[#6C757D] mb-8" />
        <div className="mb-4 w-full md:w-[70%] xl:w-[60%]">
          <button onClick={handleClick} className="bg-accent hover:bg-red-700 duration-200 text-white w-full py-2 text-2xl rounded-xl font-medium">
            Save
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

export default ResetPasswordCarer