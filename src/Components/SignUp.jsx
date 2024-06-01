import { useState, useEffect } from "react";
import { useAppContext } from "../Context/AppContext";
import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import image from "/assets/loginImage.png";
import flag from "/assets/egypt.png";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [long, setLong] = useState("");
  const [lat, setLat] = useState("");
  const [hidden, setHidden] = useState(true);
  const { setUserData } = useAppContext();
  const navigate = useNavigate();

  const regNumbers = /^[0-9]+$/;
  const regEmail = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;

  useEffect(() => {
    document.title = "Relief | Sign Up";
    window.scrollTo(0, 0);
  }, []);

  const handleClick = async () => {
    if (username === "" || email === "" || password === "" || phone === "" || long === "" || lat === "") {
      return toast.error("Please fill all the fields");
    }
    if (!email.match(regEmail)) {
      return toast.error("Please enter a valid email address");
    }
    if (password.length < 8) {
      return toast.error("Password must be at least 8 characters long");
    }
    if (!phone.match(regNumbers) || phone.length !== 11) {
      return toast.error("Please enter a valid phone number");
    }
    toast.info("Creating account...");
    setUserData({
      name: "John Doe",
      email: "test@test.com",
      phone: "01012609957",
      address: "123, Random Street",
      avatar: "random",
      loggedIn: true,
    });
    localStorage.setItem("userToken", "123");
    navigate("/");
  };

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        setLong(long);
        setLat(lat);
        // window.open(`https://www.google.com/maps/dir/${lat},${long}/${place.latitude},${place.longitude}`, "_blank");
      });
    }
  };

  return (
    <section className="container mx-auto px-4 py-16 minHeight flex justify-center items-center">
      <div className="lg:flex items-center gap-12">
        <div className="basis-1/2">
          <h1 className="text-[#212529] font-semibold text-[40px] md:text-[65px] mb-10">Sign Up</h1>
          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="username" className="font-semibold text-[22px]">
              Username
            </label>
            <input onChange={(e) => setUsername(e.target.value)} className="outline-none border border-[#BBD0FF] focus:border-[1.5px] focus:placeholder:opacity-0 placeholder:duration-200 focus:border-[#00B4D8] duration-200 px-2 py-1 text-lg rounded-xl" type="text" id="username" placeholder="Enter your name" />
          </div>
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
          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="phone" className="font-semibold text-[22px]">
              Phone Number
            </label>
            <div className="relative">
              <input onChange={(e) => setPhone(e.target.value)} className="w-full outline-none border border-[#BBD0FF] focus:border-[1.5px] focus:placeholder:opacity-0 placeholder:duration-200 focus:border-[#00B4D8] duration-200 pl-[38px] pr-2 py-1 text-lg rounded-xl" type="text" id="phone" placeholder="Enter your phone number" />
              <span className="absolute text-[#6C757D] left-1 top-[50%] translate-y-[-50%] border-r border-[#6C757D] pr-1">+20</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="location" className="font-semibold text-[22px]">
              Location
            </label>
            <div className="relative">
              {/* <input onChange={(e) => setLocation(e.target.value)} className="w-full outline-none border border-[#BBD0FF] focus:border-[1.5px] focus:placeholder:opacity-0 placeholder:duration-200 focus:border-[#00B4D8] duration-200 pl-[38px] pr-2 py-1 text-lg rounded-xl" type="text" id="location" placeholder="Enter your location" /> */}
              <button onClick={handleLocation} className={`w-full text-left outline-none border border-[#BBD0FF] focus:border-[1.5px] focus:placeholder:opacity-0 placeholder:duration-200 focus:border-[#00B4D8] duration-200 pl-[38px] pr-2 py-1 text-lg rounded-xl ${long !== "" && "bg-[#BBD0FF]"}`}>{lat === "" || long === "" ? "Enter your location" : "Location Saved"}</button>
              <img src={flag} className="absolute text-[#6C757D] left-1 top-[50%] translate-y-[-50%] border-r border-[#6C757D] pr-1" />
            </div>
          </div>
          <div className="h-[1px] w-[50%] mx-auto bg-[#6C757D] mb-4" />
          <div className="mb-4">
            <button onClick={handleClick} className="bg-accent hover:bg-red-700 duration-200 text-white w-full py-2 text-2xl rounded-xl font-medium">
              Create Account
            </button>
          </div>
          <div>
            <p className="text-center font-medium text-[#212529] text-lg">
              Already have an account?{" "}
              <Link to="/login" className="font-bold text-accent hover:text-red-700 duration-200 text-lg">
                Log in
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

export default SignUp;
