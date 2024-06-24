import { useState } from "react";
import { postData } from "../Services/apiCalls";
import { useParams } from "react-router-dom";

import Modal from "@mui/material/Modal";
import Rating from "@mui/material/Rating";

const AddReviewModal = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [comment, setComment] = useState("");
  const { id } = useParams();
  const token = localStorage.getItem("token");


  const handleClick = async () => {
    const response = await postData(`requests/${id}/rate`, { rating: value, messageRating: comment }, token);
    console.log(response);
  };

  return (
    <>
      <button onClick={() => setOpen(true)} className="outline-none flex items-center justify-center gap-2 border border-[#BBD0FF] hover:bg-[#BBD0FF] rounded-2xl duration-200 p-2">
        <span className="text-[#000814] font-medium text-lg">Add Review</span> <i className="fa-solid fa-plus text-[#00B4D8]"></i>
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="flex justify-center items-center min-h-screen">
          <div className="bg-white p-6 sm:p-12 rounded-xl w-[300px] sm:w-[450px]">
            <div className={`flex items-center justify-between mb-6`}>
              <h3 className="font-semibold text-2xl">Tap To Rate</h3>
              <i className="fa-solid fa-x text-lg text-[#a3aab5] hover:text-black duration-300 cursor-pointer" onClick={() => setOpen(false)}></i>
            </div>
            <div className="flex justify-center mb-6">
              <Rating name="simple-controlled" className="text-2xl" value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </div>
            <h3 className="font-semibold text-2xl mb-4">Tell Us More (Optional)</h3>
            <input onChange={(e) => setComment(e.target.value)} className="outline-none border border-[#BBD0FF] focus:border-[1.5px] focus:placeholder:opacity-0 placeholder:duration-200 focus:border-[#00B4D8] duration-200 px-2 py-1 text-lg rounded-xl w-full mb-6" type="text" placeholder="Why This Rating" />
            <div className="flex justify-end">
              <button onClick={handleClick} className="bg-accent hover:bg-red-700 duration-200 text-white px-16 py-2 font-semibold rounded-2xl">Submit</button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default AddReviewModal