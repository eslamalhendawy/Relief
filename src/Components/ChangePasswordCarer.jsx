import { useState } from "react";
import { Link } from "react-router-dom";
import { putData } from "../Services/apiCalls";

import Modal from "@mui/material/Modal";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChangePasswordCarer = () => {
  const [open, setOpen] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const regPassword = /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*]).+$/;

  const handleClick = async () => {
    if(currentPassword === "" || newPassword === "" || confirmPassword === ""){
      toast.error("All fields are required");
      return;
    }
    if(!newPassword.match(regPassword)){
      toast.error("Password must contain at least one letter, one number and one special character");
      return;
    }
    if(newPassword !== confirmPassword){
      toast.error("Passwords do not match");
      return;
    }
    toast.info("Changing Password...");
    const response = await putData("caregiver/changePassword", { currentPassword, newPassword, confirmPassword }, localStorage.getItem("token"));
    if(response.message === "Password changed successfully"){
      toast.success("Password Changed Successfully");
      setOpen(false);
    }
  };

  return (
    <>
      <button onClick={() => setOpen(true)} className="text-[#00B4D8] hover:text-[#4b94a3] duration-200">
        Change Password
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="flex justify-center items-center min-h-screen">
          <div className="bg-white p-6 sm:p-12 rounded-xl w-[300px] sm:w-[450px] lg:w-[650px]">
            <div className="flex flex-col mb-2">
              <h3 className="font-semibold mb-3 md:text-lg">Current Password</h3>
              <input onChange={(e) => setCurrentPassword(e.target.value)} className={`outline-none border grow border-[#BBD0FF] focus:border-[1.5px] focus:placeholder:opacity-0 placeholder:duration-200 focus:border-[#00B4D8] duration-200 px-2 py-1 text-lg rounded-xl mb-2`} placeholder="Enter Current Password" type="password" />
              <Link to="/forgot-password" className="#212529 font-medium hover:text-accent duration-200 text-lg text-right">Forgot Password ?</Link>
            </div>
            <div className="flex flex-col mb-4">
              <h3 className="font-semibold mb-3 md:text-lg">New Password</h3>
              <input onChange={(e) => setNewPassword(e.target.value)} className={`outline-none border grow border-[#BBD0FF] focus:border-[1.5px] focus:placeholder:opacity-0 placeholder:duration-200 focus:border-[#00B4D8] duration-200 px-2 py-1 text-lg rounded-xl`} placeholder="Enter New Password" type="password" />
            </div>
            <div className="flex flex-col mb-4">
              <h3 className="font-semibold mb-3 md:text-lg">Confirm New Password</h3>
              <input onChange={(e) => setConfirmPassword(e.target.value)} className={`outline-none border grow border-[#BBD0FF] focus:border-[1.5px] focus:placeholder:opacity-0 placeholder:duration-200 focus:border-[#00B4D8] duration-200 px-2 py-1 text-lg rounded-xl`} placeholder="Confirm New Password" type="password" />
            </div>
            <div className="flex justify-between items-center mb-4">
              <button onClick={() => setOpen(false)} className="capitalize border border-[#8D99AE] hover:border-[#BBD0FF] text-[#8D99AE] hover:text-[#003049] duration-200 py-1 px-12 rounded-xl font-[500] text-center">
                Cancel
              </button>
              <button onClick={handleClick} className="capitalize bg-accent hover:bg-red-700 duration-200 text-white py-1 px-12 rounded-xl font-[500] border border-accent text-center">
                Save
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default ChangePasswordCarer