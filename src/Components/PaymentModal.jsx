import { useState, useRef } from "react";

import Modal from "@mui/material/Modal";

import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PaymentModal = () => {
  const [open, setOpen] = useState(false);

  const [state, setState] = useState({
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (e) => {
    setState((prev) => ({ ...prev, focus: e.target.name }));
  };

  const handleSave = async () => {
    if(state.number === "" || state.expiry === "" || state.cvc === "" || state.name === "") {
      return toast.error("Please fill all fields");
    }
    toast.info("Saving...");
    toast.success("Payment Method Saved");
    setOpen(false);
  };

  return (
    <>
      <button onClick={() => setOpen(true)} className="text-left border border-[#BBD0FF] hover:bg-[#BBD0FF] duration-200 p-2 rounded-xl font-medium capitalize grow text-[#ADB5BD]">
        you don’t have any saved payment methods, tap to add one
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="flex justify-center items-center min-h-screen">
          <div className="bg-white p-6 sm:p-12 rounded-xl w-[320px] sm:w-[450px] lg:w-[650px]">
            <div className={`flex items-center justify-between mb-6`}>
              <h3 className="font-semibold text-2xl">Payment Method</h3>
              <i className="fa-solid fa-x text-lg text-[#a3aab5] hover:text-black duration-300 cursor-pointer" onClick={() => setOpen(false)}></i>
            </div>
            <div className="flex justify-center mb-4">
              <Cards number={state.number} expiry={state.expiry} cvc={state.cvc} name={state.name} focused={state.focus} />
            </div>
            <div className="mb-4">
              <h4 className="font-semibold text-[#000814] text-lg mb-2">Card Number</h4>
              <input className="outline-none border border-[#BBD0FF] focus:border-[1.5px] focus:placeholder:opacity-0 placeholder:duration-200 focus:border-[#00B4D8] duration-200 px-2 py-1 text-lg rounded-xl w-full" name="number" required type="text" maxLength={16} onChange={handleInputChange} onFocus={handleInputFocus} placeholder="Enter Card Number" />
            </div>
            <div className="mb-4">
              <h4 className="font-semibold text-[#000814] text-lg mb-2">Name</h4>
              <input className="outline-none border border-[#BBD0FF] focus:border-[1.5px] focus:placeholder:opacity-0 placeholder:duration-200 focus:border-[#00B4D8] duration-200 px-2 py-1 text-lg rounded-xl w-full" name="name" required type="text" value={state.name} onChange={handleInputChange} onFocus={handleInputFocus} placeholder="Enter Name On Card" />
            </div>
            <div className="mb-4 flex gap-4">
              <div className="basis-1/2">
                <h4 className="font-semibold text-[#000814] text-lg mb-2">Expiration Date</h4>
                <input className="outline-none border border-[#BBD0FF] focus:border-[1.5px] focus:placeholder:opacity-0 placeholder:duration-200 focus:border-[#00B4D8] duration-200 px-2 py-1 text-lg rounded-xl w-full" name="expiry" required type="text" maxLength={4} value={state.expiry} onChange={handleInputChange} onFocus={handleInputFocus} placeholder="Valid Thru" pattern="\d\d/\d\d" />
              </div>
              <div className="basis-1/2">
                <h4 className="font-semibold text-[#000814] text-lg mb-2">CVC</h4>
                <input className="outline-none border border-[#BBD0FF] focus:border-[1.5px] focus:placeholder:opacity-0 placeholder:duration-200 focus:border-[#00B4D8] duration-200 px-2 py-1 text-lg rounded-xl w-full" name="cvc" required type="text" maxLength={3} value={state.cvc} onChange={handleInputChange} onFocus={handleInputFocus} placeholder="CVC" />
              </div>
            </div>
            <div className="flex justify-end">
              <button onClick={handleSave} className="text-lg bg-accent hover:bg-red-700 duration-200 text-white py-1 px-12 font-medium rounded-2xl">Save</button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default PaymentModal;
