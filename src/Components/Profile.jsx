import { useState, useEffect } from "react";
import { useAppContext } from "../Context/AppContext";
import { Link, useNavigate } from "react-router-dom";

import UpdatePFPModal from "./UpdatePFPModal";
import PaymentModal from "./PaymentModal";
import ChangePassword from "./ChangePassword";
import CarerProfileHeader from "./CarerProfileHeader";

import avatar from "/assets/randomUser.png";
import flag from "/assets/egypt.png";

const Profile = () => {
  const { userData, setUserData } = useAppContext();
  const [tempName, setTempName] = useState("");
  const [editName, setEditName] = useState(true);
  const [editEmail, setEditEmail] = useState(true);
  const [editPhone, setEditPhone] = useState(true);
  const [editLocation, setEditLocation] = useState(true);
  const [editBio, setEditBio] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Relief | Profile";
    window.scrollTo(0, 0);
  }, []);

  const handleLogout = () => {
    setUserData({ loggedIn: false });
    localStorage.removeItem("userToken");
    navigate("/");
  };

  return (
    <section className="container mx-auto px-4 py-16">
      {userData.role === "carer" && <CarerProfileHeader />}
      <div className="flex flex-col justify-center border-2 border-[#BBD0FF] rounded-xl px-4 lg:px-[100px] py-12 lg:w-[80%] mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img className="size-[100px] rounded-full" src={avatar} alt="" />
              <UpdatePFPModal />
            </div>
            <div>
              <h1 className="text-xl font-semibold">{userData.name}</h1>
              {userData.role === "carer" ? <p className="text-[#8D99AE] text-lg">{userData.bio}</p> : <p className="text-[#8D99AE] text-lg">{userData.address}</p>}
              <ChangePassword />
            </div>
          </div>
          <div>
            {userData.role === "carer" ? (
              <button>
                <i className="fa-solid fa-calendar-check  text-3xl hover:text-[#00B4D8] duration-200"></i>
              </button>
            ) : (
              <button>
                <i className="fa-regular fa-bell text-3xl hover:text-[#00B4D8] duration-200"></i>
              </button>
            )}
          </div>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold mb-3 md:text-xl">Username</h3>
          <div className="flex relative">
            <input disabled={editName} className={`outline-none border grow border-[#BBD0FF] focus:border-[1.5px] focus:placeholder:opacity-0 placeholder:duration-200 focus:border-[#00B4D8] duration-200 px-2 py-1 text-lg rounded-xl ${!editName && "placeholder:text-black"}`} type="text" id="username" placeholder={userData.name} />
            <button onClick={() => setEditName(!editName)} className="absolute right-2 top-[50%] translate-y-[-50%] group">
              <i className="fa-regular fa-pen-to-square text-lg group-hover:text-[#00B4D8] duration-200"></i>
            </button>
          </div>
        </div>
        {userData.role === "carer" && (
          <div className="mb-4">
            <h3 className="font-semibold mb-3 md:text-xl">Biography</h3>
            <div className="flex relative">
              <input disabled={editBio} className={`outline-none border grow border-[#BBD0FF] focus:border-[1.5px] focus:placeholder:opacity-0 placeholder:duration-200 focus:border-[#00B4D8] duration-200 px-2 py-1 text-lg rounded-xl ${!editBio && "placeholder:text-black"}`} type="text" id="username" placeholder={userData.bio} />
              <button onClick={() => setEditBio(!editBio)} className="absolute right-2 top-[50%] translate-y-[-50%] group">
                <i className="fa-regular fa-pen-to-square text-lg group-hover:text-[#00B4D8] duration-200"></i>
              </button>
            </div>
          </div>
        )}
        <div className="mb-4">
          <h3 className="font-semibold mb-3 md:text-xl">Email Address</h3>
          <div className="flex relative">
            <input disabled={editEmail} className={`outline-none border grow border-[#BBD0FF] focus:border-[1.5px] focus:placeholder:opacity-0 placeholder:duration-200 focus:border-[#00B4D8] duration-200 px-2 py-1 text-lg rounded-xl ${!editEmail && "placeholder:text-black"}`} type="text" id="email" placeholder={userData.email} />
            <button onClick={() => setEditEmail(!editEmail)} className="absolute right-2 top-[50%] translate-y-[-50%] group">
              <i className="fa-regular fa-pen-to-square text-lg group-hover:text-[#00B4D8] duration-200"></i>
            </button>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold mb-3 md:text-xl">Phone Number</h3>
          <div className="flex relative">
            <input disabled={editPhone} className={`outline-none border grow border-[#BBD0FF] focus:border-[1.5px] focus:placeholder:opacity-0 placeholder:duration-200 focus:border-[#00B4D8] duration-200 pl-[38px] pr-2 py-1 text-lg rounded-xl ${!editPhone && "placeholder:text-black"}`} type="text" id="phone" placeholder={userData.phone} />
            <span className="absolute text-[#6C757D] left-1 top-[50%] translate-y-[-50%] border-r border-[#6C757D] pr-1">+20</span>
            <button onClick={() => setEditPhone(!editPhone)} className="absolute right-2 top-[50%] translate-y-[-50%] group">
              <i className="fa-regular fa-pen-to-square text-lg group-hover:text-[#00B4D8] duration-200"></i>
            </button>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold mb-3 md:text-xl">Location</h3>
          <div className="flex relative">
            <input disabled={editLocation} className={`outline-none border grow border-[#BBD0FF] focus:border-[1.5px] focus:placeholder:opacity-0 placeholder:duration-200 focus:border-[#00B4D8] duration-200 pl-[38px] pr-2 py-1 text-lg rounded-xl ${!editLocation && "placeholder:text-black"}`} type="text" id="location" placeholder={userData.address} />
            <img src={flag} className="absolute text-[#6C757D] left-1 top-[50%] translate-y-[-50%] border-r border-[#6C757D] pr-1" />
            <button onClick={() => setEditLocation(!editLocation)} className="absolute right-2 top-[50%] translate-y-[-50%] group">
              <i className="fa-regular fa-pen-to-square text-lg group-hover:text-[#00B4D8] duration-200"></i>
            </button>
          </div>
        </div>
        {userData.role === "elder" && (
          <div className="mb-4">
            <h3 className="font-semibold mb-3 md:text-xl">Payment</h3>
            <div className="flex relative">
              <PaymentModal />
            </div>
          </div>
        )}
        <div className="flex justify-end">
          <button onClick={handleLogout} className="capitalize bg-accent hover:bg-red-700 duration-200 text-white py-1 px-12 rounded-2xl font-semibold border border-accent text-center text-xl">
            Log Out
          </button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
