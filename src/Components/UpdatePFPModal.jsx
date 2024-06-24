import { useState, useRef } from "react";
import { putData } from "../Services/apiCalls";

import Modal from "@mui/material/Modal";

import "react-profile/themes/default";
import { openEditor } from "react-profile";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import camera from "/assets/camera.png";

const UpdatePFPModal = () => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null);
  const fileInput = useRef(null);
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const handleChange = async (e) => {
    const image = await openEditor({ src: fileInput.current.files[0], square: true, size: 200 });
    setImage(image?.editedImage?.getDataURL());
  };

  const handleUpload = async () => {
    if(image === null) {
      return toast.error("Please select an image");
    }
    console.log(image);
    toast.info("Uploading...");
    if(role === "carer") {
      const response = await putData(`caregiver/editProfile/${token}`, { profilePhoto: image });
      console.log(response);
      toast.success("Profile Picture Updated");
      return;
    }else if(role === "patient") {
      const response = await putData(`patient/editProfile/${token}`, { profilePhoto: image });
      console.log(response);
      toast.success("Profile Picture Updated");
      return;
    }
  };

  return (
    <>
      <button onClick={() => setOpen(true)} className="bg-[#212529] hover:bg-black duration-200 absolute p-1 rounded-full right-[-2px] bottom-[10px]">
        <img className="size-[22px]" src={camera} alt="" />
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="flex justify-center items-center min-h-screen">
          <div className="bg-white p-6 sm:p-12 rounded-xl w-[300px] sm:w-[450px] lg:w-[650px]">
            <div className={`flex items-center justify-between mb-6`}>
              <h3 className="font-semibold text-2xl">Update Profile Picture</h3>
              <i className="fa-solid fa-x text-lg text-[#a3aab5] hover:text-black duration-300 cursor-pointer" onClick={() => setOpen(false)}></i>
            </div>
            <div className="flex justify-center items-center mb-4">
              <button onClick={() => fileInput.current.click()} className="text-lg bg-accent hover:bg-red-700 duration-200 text-white py-2 w-[200px] font-medium">
                Choose Image
              </button>
              <input onChange={handleChange} ref={fileInput} type="file" className="hidden" accept="image/*" />
            </div>
            <div className="flex justify-center mb-4">
              {image ? <img src={image} alt="new profile photo" className="rounded-full size-[250px]" /> : "No Image Selected"}
            </div>
            <div className="flex justify-center items-center mb-4">
              <button onClick={handleUpload} className="text-lg bg-accent hover:bg-red-700 duration-200 text-white py-2 w-[200px] font-medium">
                Upload
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default UpdatePFPModal;
