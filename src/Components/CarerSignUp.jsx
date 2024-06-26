import { useState, useEffect } from "react";
import { useAppContext } from "../Context/AppContext";
import { Link, useNavigate } from "react-router-dom";
import { postData } from "../Services/apiCalls";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import image from "/assets/loginCarer.png";
import flag from "/assets/egypt.png";

const CarerSignUp = () => {
  const [stage, setStage] = useState(1);
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [re_password, setPasswordConfirm] = useState("");
  const [phone, setPhone] = useState("");
  const [longitude, setLong] = useState("");
  const [latitude, setLat] = useState("");
  const [biography, setBio] = useState("");
  const [hidden, setHidden] = useState(true);
  const [hidden2, setHidden2] = useState(true);
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [tempDate, setTempDate] = useState("");
  const [doYouSmoke, setSmoker] = useState(null);
  const [canYouDrive, setDriver] = useState(null);
  const { setUserData } = useAppContext();
  const navigate = useNavigate();

  const regNumbers = /^[0-9]+$/;
  const regEmail = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
  const regPassword = /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*]).+$/;

  useEffect(() => {
    document.title = "Relief | Sign Up";
    window.scrollTo(0, 0);
  }, []);

  const handleClick = () => {
    if (userName === "" || email === "" || password === "" || re_password === "" || phone === "" || longitude === "" || latitude === "" || biography === "") {
      return toast.error("Please fill all the fields");
    }
    if (!email.match(regEmail)) {
      return toast.error("Please enter a valid email address");
    }
    if (password.length < 8) {
      return toast.error("Password must be at least 8 characters long");
    }
    if (!password.match(regPassword)) {
      return toast.error("Password must contain at least one letter, one number and one special character");
    }
    if (password !== re_password) {
      return toast.error("Passwords do not match");
    }
    if (!phone.match(regNumbers) || phone.length !== 11) {
      return toast.error("Please enter a valid phone number");
    }
    setStage(2);
  };

  useEffect(() => {
    const date = new Date(tempDate);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    setDateOfBirth(`${year}/${month}/${day}`);
  }, [tempDate]);

  const handleSignup = async () => {
    if (gender === "" || tempDate === "" || doYouSmoke === null || canYouDrive === null) {
      return toast.error("Please fill all the fields");
    }
    toast.info("Creating account...");
    const response = await postData("caregiver/signup", { userName, email, password, re_password, gender, dateOfBirth, phone, doYouSmoke, canYouDrive, longitude, latitude, biography });
    toast.info("Creating account...");
    if (response.token) {
      navigate("/");
      toast.success("Account created successfully");
      localStorage.setItem("token", response.token);
      localStorage.setItem("role", "carer");
      localStorage.setItem("ID", response.UserData._id);
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
      });
    }
  };

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        setLong(long);
        setLat(lat);
      });
    }
  };

  return (
    <section className="container mx-auto px-4 py-16 minHeight flex justify-center items-center">
      <div className="lg:flex items-center gap-12">
        {stage === 1 && (
          <div className="basis-1/2">
            <h1 className="text-[#212529] font-semibold text-[40px] md:text-[65px] mb-6">Create Account</h1>
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
              <label htmlFor="confirmPassword" className="font-semibold text-[22px]">
                Confirm Password
              </label>
              <div className="relative">
                <input onChange={(e) => setPasswordConfirm(e.target.value)} className="outline-none border border-[#BBD0FF] focus:border-[1.5px] focus:border-[#00B4D8] focus:placeholder:opacity-0 placeholder:duration-200 duration-200 px-2 py-1 text-lg rounded-xl w-full" type={hidden2 ? "password" : "text"} id="confirmPassword" placeholder="Enter your password" />
                <button onClick={() => setHidden2(!hidden2)} className="absolute right-2 top-[50%] translate-y-[-50%] text-[#ADB5BD] hover:text-black duration-300">
                  <i className={`fa-solid  text-lg ${hidden2 ? "fa-eye" : "fa-eye-slash"}`}></i>
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
              <div className="relative mb-4">
                {/* <input onChange={(e) => setLocation(e.target.value)} className="w-full outline-none border border-[#BBD0FF] focus:border-[1.5px] focus:placeholder:opacity-0 placeholder:duration-200 focus:border-[#00B4D8] duration-200 pl-[38px] pr-2 py-1 text-lg rounded-xl" type="text" id="location" placeholder="Enter your location" /> */}
                <button onClick={handleLocation} className={`w-full text-left outline-none border border-[#BBD0FF] focus:border-[1.5px] focus:placeholder:opacity-0 placeholder:duration-200 focus:border-[#00B4D8] duration-200 pl-[38px] pr-2 py-1 text-lg rounded-xl ${longitude !== "" && "bg-[#BBD0FF]"}`}>
                  {latitude === "" || longitude === "" ? "Enter your location" : "Location Saved"}
                </button>
                <img src={flag} className="absolute text-[#6C757D] left-1 top-[50%] translate-y-[-50%] border-r border-[#6C757D] pr-1" />
              </div>
              <div className="flex flex-col gap-2 mb-4">
                <label htmlFor="bio" className="font-semibold text-[22px]">
                  Biography
                </label>
                <input onChange={(e) => setBio(e.target.value)} className="outline-none border border-[#BBD0FF] focus:border-[1.5px] focus:placeholder:opacity-0 placeholder:duration-200 focus:border-[#00B4D8] duration-200 px-2 py-1 text-lg rounded-xl" type="text" id="bio" placeholder="Write A Biography" />
              </div>
            </div>
            <div className="h-[1px] w-[50%] mx-auto bg-[#6C757D] mb-4" />
            <div className="mb-4">
              <button onClick={handleClick} className="bg-accent hover:bg-red-700 duration-200 text-white w-full py-2 text-2xl rounded-xl font-medium">
                Next
              </button>
            </div>
            <div>
              <p className="text-center font-medium text-[#212529] text-lg">
                Already have an account?{" "}
                <Link to="/carer-login" className="font-bold text-accent hover:text-red-700 duration-200 text-lg">
                  Log in
                </Link>
              </p>
            </div>
          </div>
        )}
        {stage === 2 && (
          <div className="basis-1/2">
            <h1 className="text-[#212529] font-semibold text-[40px] md:text-[65px] mb-6 capitalize">Answer these questions</h1>
            <div className="mb-8">
              <h3 className="font-semibold mb-3 md:text-xl capitalize">gender</h3>
              <div className="flex gap-6">
                <button onClick={() => setGender("male")} className={`text-center border w-[50%] border-[#BBD0FF] hover:bg-[#BBD0FF] duration-200 p-2 rounded-xl font-medium ${gender === "male" && "bg-[#BBD0FF]"}`}>
                  Male
                </button>
                <button onClick={() => setGender("female")} className={`text-center border w-[50%]  border-[#BBD0FF] hover:bg-[#BBD0FF] duration-200 p-2 rounded-xl font-medium ${gender === "female" && "bg-[#BBD0FF]"}`}>
                  Female
                </button>
              </div>
            </div>
            <div className="mb-8">
              <h3 className="font-semibold mb-3 md:text-xl capitalize">date of birth</h3>
              <input onChange={(e) => setTempDate(e.target.value)} type="date" className="w-full outline-none border border-[#BBD0FF] focus:border-[1.5px] focus:placeholder:opacity-0 placeholder:duration-200 focus:border-[#00B4D8] duration-200 px-4 py-1 text-lg rounded-xl" />
            </div>
            <div className="mb-8">
              <h3 className="font-semibold mb-3 md:text-xl capitalize">Do you smoke ?</h3>
              <div className="flex gap-6">
                <button onClick={() => setSmoker("yes")} className={`text-center border w-[50%] border-[#BBD0FF] hover:bg-[#BBD0FF] duration-200 p-2 rounded-xl font-medium ${doYouSmoke === "yes" && "bg-[#BBD0FF]"}`}>
                  Yes
                </button>
                <button onClick={() => setSmoker("no")} className={`text-center border w-[50%]  border-[#BBD0FF] hover:bg-[#BBD0FF] duration-200 p-2 rounded-xl font-medium ${doYouSmoke === "no" && "bg-[#BBD0FF]"}`}>
                  No
                </button>
              </div>
            </div>
            <div className="mb-8">
              <h3 className="font-semibold mb-3 md:text-xl capitalize">Can You drive ?</h3>
              <div className="flex gap-6">
                <button onClick={() => setDriver("yes")} className={`text-center border w-[50%] border-[#BBD0FF] hover:bg-[#BBD0FF] duration-200 p-2 rounded-xl font-medium ${canYouDrive === "yes" && "bg-[#BBD0FF]"}`}>
                  Yes
                </button>
                <button onClick={() => setDriver("no")} className={`text-center border w-[50%]  border-[#BBD0FF] hover:bg-[#BBD0FF] duration-200 p-2 rounded-xl font-medium ${canYouDrive === "no" && "bg-[#BBD0FF]"}`}>
                  No
                </button>
              </div>
            </div>
            <div className="h-[1px] w-[50%] mx-auto bg-[#6C757D] mb-4" />
            <div className="mb-4">
              <button onClick={handleSignup} className="bg-accent hover:bg-red-700 duration-200 text-white w-full py-2 text-2xl rounded-xl font-medium">
                Create Account
              </button>
            </div>
            <div>
              <p className="text-center font-medium text-[#212529] text-lg">
                Already have an account?{" "}
                <Link to="/carer-login" className="font-bold text-accent hover:text-red-700 duration-200 text-lg">
                  Log in
                </Link>
              </p>
            </div>
          </div>
        )}
        <div className="basis-1/2 hidden lg:block">
          <img src={image} alt="" />
        </div>
      </div>
    </section>
  );
};

export default CarerSignUp;
