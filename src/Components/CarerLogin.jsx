import { useState, useEffect } from "react";
import { useAppContext } from "../Context/AppContext";
import { Link, useNavigate } from "react-router-dom";
import { postData } from "../Services/apiCalls";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import image from "/assets/loginImage.png";

const CarerLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidden, setHidden] = useState(true);
  const { userData, setUserData } = useAppContext();
  const navigate = useNavigate();
  const regEmail = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;

  useEffect(() => {
    document.title = "Relief | Login";
    window.scrollTo(0, 0);
  }, []);

  const handleClick = async () => {
    if (email === "" || password === "") {
      return toast.error("Please fill all the fields");
    }
    if (!email.match(regEmail)) {
      return toast.error("Please enter a valid email address");
    }
    toast.info("Logging in...");
    const response = await postData("caregiver/signin", { email, password });
    console.log(response);
    if (response.token) {
      navigate("/");
      toast.success("Account created successfully");
      localStorage.setItem("token", response.token);
      localStorage.setItem("role", "carer");
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
        loggedIn: true,
      });
    } else {
      toast.error("Invalid email or password");
    }
  };

  return (
    <section className="container mx-auto px-4 py-16 minHeight flex justify-center items-center">
      <div className="lg:flex items-center gap-12">
        <div className="basis-1/2">
          <h1 className="text-[#212529] font-semibold text-[40px] md:text-[65px] mb-12 text-center">Welcome Back</h1>
          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="email" className="font-semibold text-[22px]">
              Email Address
            </label>
            <input onChange={(e) => setEmail(e.target.value)} className="outline-none border border-[#BBD0FF] focus:border-[1.5px] focus:placeholder:opacity-0 placeholder:duration-200 focus:border-[#00B4D8] duration-200 px-2 py-1 text-lg rounded-xl" type="text" id="email" placeholder="Enter your email" />
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="password" className="font-semibold text-[22px]">
              Password
            </label>
            <div className="relative">
              <input onChange={(e) => setPassword(e.target.value)} className="outline-none border border-[#BBD0FF] focus:border-[1.5px] focus:border-[#00B4D8] focus:placeholder:opacity-0 placeholder:duration-200 duration-200 px-2 py-1 text-lg rounded-xl w-full" type={hidden ? "password" : "text"} id="password" placeholder="Enter your password" />
              <button onClick={() => setHidden(!hidden)} className="absolute right-2 top-[50%] translate-y-[-50%] text-[#ADB5BD] hover:text-black duration-300">
                <i className={`fa-solid  text-lg ${hidden ? "fa-eye" : "fa-eye-slash"}`}></i>
              </button>
            </div>
          </div>
          <div className="text-right mb-4">
            <Link to="/forgot-password" className="#212529 font-medium hover:text-accent duration-200 text-lg">
              Forgot Password ?
            </Link>
          </div>
          <div className="h-[1px] w-[50%] mx-auto bg-[#6C757D] mb-4" />
          <div className="mb-4">
            <button onClick={handleClick} className="bg-accent hover:bg-red-700 duration-200 text-white w-full py-2 text-2xl rounded-xl font-medium">
              Log In
            </button>
          </div>
          <div>
            <p className="text-center font-medium text-[#212529] text-lg">
              Don't have an account?{" "}
              <Link to="/sign-up" className="font-bold text-accent hover:text-red-700 duration-200 text-lg">
                Register
              </Link>
            </p>
          </div>
        </div>
        <div className="basis-1/2 hidden lg:block">
          <img src={image} alt="" />
        </div>
      </div>
    </section>
  );
};

export default CarerLogin;
