import { useState, useEffect } from "react";
import { useAppContext } from "../Context/AppContext";
import { Link, useNavigate } from "react-router-dom";
import { putData } from "../Services/apiCalls";

import UpdatePFPModal from "./UpdatePFPModal";
import PaymentModal from "./PaymentModal";
import ChangePassword from "./ChangePassword";
import ChangePasswordCarer from "./ChangePasswordCarer";
import CarerProfileHeader from "./CarerProfileHeader";

import flag from "/assets/egypt.png";
import { toast } from "react-toastify";

const Profile = () => {
  const { userData, setUserData } = useAppContext();
  const [userName, setUserName] = useState("");
  const [editName, setEditName] = useState(true);
  const [email, setEmail] = useState("");
  const [editEmail, setEditEmail] = useState(true);
  const [phone, setPhone] = useState("");
  const [editPhone, setEditPhone] = useState(true);
  const [editLocation, setEditLocation] = useState(true);
  const [biography, setBiography] = useState("");
  const [editBio, setEditBio] = useState(true);
  const [update, setUpdate] = useState(false);
  const navigate = useNavigate();

  const id = localStorage.getItem("ID");
  const role = localStorage.getItem("role");

  useEffect(() => {
    setUserName(userData.name);
    setBiography(userData.bio);
    setEmail(userData.email);
    setPhone(userData.phone);
  }, [userData]);

  useEffect(() => {
    if (!editName || !editEmail || !editPhone || !editBio || !editLocation) {
      setUpdate(true);
    } else {
      setUpdate(false);
    }
  }, [editName, editEmail, editPhone, editBio, editLocation]);

  useEffect(() => {
    document.title = "Relief | Profile";
    window.scrollTo(0, 0);
  }, []);

  const handleLogout = () => {
    setUserData({ loggedIn: false });
    localStorage.clear();
    navigate("/");
  };

  const handleUpdate = async () => {
    if (role === "patient") {
      toast.info("Updating Patient Profile");
      const response = await putData(`patient/editProfile/${id}`, { userName, email, phone });
      if (response.message === "Patient profile updated successfully") {
        toast.success("Profile Updated Successfully");
        window.location.reload();
      } else {
        toast.error("Profile Update Failed");
      }
    } else if (role === "carer") {
      toast.info("Updating Caregiver Profile");
      const response = await putData(`caregiver/editProfile/${id}`, { userName, email, phone, biography });
      if (response.message === "Caregiver profile updated successfully") {
        toast.success("Profile Updated Successfully");
        window.location.reload();
      } else {
        toast.error("Profile Update Failed");
      }
    }
  };

  return (
    <section className="container mx-auto px-4 py-16">
      {userData.role === "carer" && <CarerProfileHeader />}
      <div className="flex flex-col justify-center border-2 border-[#BBD0FF] rounded-xl px-4 lg:px-[100px] py-12 lg:w-[80%] mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="relative">
              {userData.avatar ? (
                <img className="size-[100px] rounded-full" src={userData.avatar} alt="" />
              ) : (
                <div className="size-[100px] bg-accent rounded-full flex justify-center items-center">
                  <span className="text-white text-3xl font-semibold">{userData.name[0]}</span>
                </div>
              )}
              <UpdatePFPModal />
            </div>
            <div>
              <h1 className="text-xl font-semibold">{userData.name}</h1>
              {userData.role === "carer" ? <p className="text-[#8D99AE] text-lg">{userData.bio}</p> : <p className="text-[#8D99AE] text-lg">{userData.address}</p>}
              {userData.role === "patient" ? <ChangePassword /> : <ChangePasswordCarer />}
            </div>
          </div>
          <div>
            {userData.role === "carer" ? (
              <Link to="/carer-schedule">
                <i className="fa-solid fa-calendar-check  text-3xl hover:text-[#00B4D8] duration-200"></i>
              </Link>
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
            <input disabled={editName} onChange={(e) => setUserName(e.target.value)} className={`outline-none border grow border-[#BBD0FF] focus:border-[1.5px] focus:placeholder:opacity-0 placeholder:duration-200 focus:border-[#00B4D8] duration-200 px-2 py-1 text-lg rounded-xl disabled:text-[#9ca5af]`} type="text" id="username" value={userName} />
            <button onClick={() => setEditName(!editName)} className="absolute right-2 top-[50%] translate-y-[-50%] group">
              <i className="fa-regular fa-pen-to-square text-lg group-hover:text-[#00B4D8] duration-200"></i>
            </button>
          </div>
        </div>
        {userData.role === "carer" && (
          <div className="mb-4">
            <h3 className="font-semibold mb-3 md:text-xl">Biography</h3>
            <div className="flex relative">
              <input disabled={editBio} onChange={(e) => setBiography(e.target.value)} className={`outline-none border grow border-[#BBD0FF] focus:border-[1.5px] focus:placeholder:opacity-0 placeholder:duration-200 focus:border-[#00B4D8] duration-200 px-2 py-1 text-lg rounded-xl disabled:text-[#9ca5af]`} type="text" id="bio" value={biography} />
              <button onClick={() => setEditBio(!editBio)} className="absolute right-2 top-[50%] translate-y-[-50%] group">
                <i className="fa-regular fa-pen-to-square text-lg group-hover:text-[#00B4D8] duration-200"></i>
              </button>
            </div>
          </div>
        )}
        <div className="mb-4">
          <h3 className="font-semibold mb-3 md:text-xl">Email Address</h3>
          <div className="flex relative">
            <input disabled={editEmail} onChange={(e) => setEmail(e.target.value)} className={`outline-none border grow border-[#BBD0FF] focus:border-[1.5px] focus:placeholder:opacity-0 placeholder:duration-200 focus:border-[#00B4D8] duration-200 px-2 py-1 text-lg rounded-xl disabled:text-[#9ca5af]`} type="text" id="email" value={email} />
            <button onClick={() => setEditEmail(!editEmail)} className="absolute right-2 top-[50%] translate-y-[-50%] group">
              <i className="fa-regular fa-pen-to-square text-lg group-hover:text-[#00B4D8] duration-200"></i>
            </button>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold mb-3 md:text-xl">Phone Number</h3>
          <div className="flex relative">
            <input disabled={editPhone} onChange={(e) => setPhone(e.target.value)} className={`outline-none border grow border-[#BBD0FF] focus:border-[1.5px] focus:placeholder:opacity-0 placeholder:duration-200 focus:border-[#00B4D8] duration-200 pl-[38px] pr-2 py-1 text-lg rounded-xl disabled:text-[#9ca5af]`} type="text" id="phone" value={phone} />
            <span className="absolute text-[#6C757D] left-1 top-[50%] translate-y-[-50%] border-r border-[#6C757D] pr-1">+20</span>
            <button onClick={() => setEditPhone(!editPhone)} className="absolute right-2 top-[50%] translate-y-[-50%] group">
              <i className="fa-regular fa-pen-to-square text-lg group-hover:text-[#00B4D8] duration-200"></i>
            </button>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold mb-3 md:text-xl">Location</h3>
          <div className="flex relative">
            <input disabled={editLocation} className={`outline-none border grow border-[#BBD0FF] focus:border-[1.5px] focus:placeholder:opacity-0 placeholder:duration-200 focus:border-[#00B4D8] duration-200 pl-[38px] pr-2 py-1 text-lg rounded-xl disabled:text-[#9ca5af]`} type="text" id="location" value="شارع شبين الاسماعلية" />
            <img src={flag} className="absolute text-[#6C757D] left-1 top-[50%] translate-y-[-50%] border-r border-[#6C757D] pr-1" />
            <button onClick={() => setEditLocation(!editLocation)} className="absolute right-2 top-[50%] translate-y-[-50%] group">
              <i className="fa-regular fa-pen-to-square text-lg group-hover:text-[#00B4D8] duration-200"></i>
            </button>
          </div>
        </div>
        {userData.role === "patient" && (
          <div className="mb-4">
            <h3 className="font-semibold mb-3 md:text-xl">Payment</h3>
            <div className="flex relative">
              <PaymentModal />
            </div>
          </div>
        )}
        <div className="flex justify-end gap-4">
          <button disabled={!update} onClick={handleUpdate} className={`capitalize  duration-200  py-1 px-12 rounded-2xl font-semibold border  text-center text-xl ${!update ? "bg-[#fafafa] hover:bg-[#fafafa] border-[#999999] text-[#bdbbbb]" : "text-white bg-accent hover:bg-red-700 border-accent"}`}>
            Save
          </button>
          <button onClick={handleLogout} className="capitalize bg-accent hover:bg-red-700 duration-200 text-white py-1 px-12 rounded-2xl font-semibold border border-accent text-center text-xl">
            Log Out
          </button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
