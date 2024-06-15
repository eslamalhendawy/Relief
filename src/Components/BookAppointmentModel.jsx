import { useState, useRef, useEffect } from "react";

import Modal from "@mui/material/Modal";
import Select from "react-select";

const days = Array.from({ length: 31 }, (_, i) => ({ value: i + 1, label: i + 1 }));
const months = Array.from({ length: 12 }, (_, i) => ({ value: i + 1, label: i + 1 }));
const type = [
  { value: "days", label: "Days" },
  { value: "months", label: "Months" },
];

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    border: "1px solid #BBD0FF",
    borderRadius: "20px",
    padding: "4px 6px",
    boxShadow: state.isFocused ? "0 0 0 2px #2868c7" : null,
    outline: "none",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#2868c7" : null,
    color: state.isSelected ? "#fff" : null,
  }),
};

const BookAppointmentModel = () => {
  const [open, setOpen] = useState(false);
  const [day, setDay] = useState(null);
  const [month, setMonth] = useState(null);
  const [time, setTime] = useState(null);
  const [hour, setHour] = useState(null);
  const [minutes, setMinutes] = useState(null);
  const [duration, setDuration] = useState(null);

  const input1 = useRef(null);
  const input2 = useRef(null);

  const hourHandler = (e) => {
    if (e.target.value.length == 2) {
      input1.current.nextSibling.focus();
      setHour(e.target.value);
    }
  };

  const minutesHandler = (e) => {
    if (e.target.value.length == 0) {
      input2.current.previousSibling.focus();
      setMinutes(e.target.value);
    }
    if (e.target.value.length > 2) {
      input2.current.value = input2.current.value.slice(0, 2);
      setMinutes(e.target.value);
    }
    if (e.target.value.length == 2) {
      setMinutes(e.target.value);
    }
  };

  useEffect(() => {
    setTime(`${hour}:${minutes}`);
  }, [hour, minutes]);

  return (
    <>
      <button onClick={() => setOpen(true)} className="bg-accent hover:bg-red-700 duration-200 text-white w-[60%] py-2 block mx-auto font-semibold rounded-2xl">
        Book Appointment
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="flex justify-center items-center min-h-screen">
          <div className="bg-white p-6 sm:p-12 rounded-xl w-[300px] sm:w-[450px] md:w-[550px]">
            <div className={`flex items-center justify-end mb-6`}>
              <button onClick={() => setOpen(false)}>
                <i className="fa-solid fa-x text-lg text-[#a3aab5] hover:text-black duration-300 cursor-pointer"></i>
              </button>
            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-4 text-[#212529]">Day</h3>
              <Select onChange={(e) => setDay(e.value)} styles={customStyles} options={days} placeholder="Select Day" />
            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-4 text-[#212529]">Month</h3>
              <Select onChange={(e) => setMonth(e.value)} styles={customStyles} options={months} placeholder="Select Month" />
            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-4 text-[#212529]">Hour</h3>
              <div className="outline-none border border-[#BBD0FF] focus:border-[1.5px] focus:placeholder:opacity-0 placeholder:duration-200 focus:border-[#00B4D8] duration-200 px-2 py-1 text-lg rounded-xl mb-4 flex gap-1">
                <input onChange={hourHandler} className="outline-none focus:placeholder:opacity-0 placeholder:duration-200 w-[35px]" placeholder="HH :" type="number" ref={input1} />
                <input ref={input2} onChange={minutesHandler} className="outline-none focus:placeholder:opacity-0 placeholder:duration-200 w-[30px]" placeholder="MM" type="number" />
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-4 text-[#212529] capitalize ">Determine the period of service</h3>
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <input type="text" className="outline-none border border-[#BBD0FF] focus:border-[1.5px] focus:placeholder:opacity-0 placeholder:duration-200 focus:border-[#00B4D8] duration-200 px-2 py-[6px] text-lg rounded-xl block w-full" placeholder="Enter Number Of Days Or Months" />
                  <Select className="basis-1/2" onChange={(e) => setDuration(e.value)} styles={customStyles} options={type} placeholder="Select" />
                </div>
              </div>
              <div className="flex justify-end">
                <button className="bg-accent hover:bg-red-700 duration-200 text-white px-16 py-2 font-semibold rounded-2xl">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default BookAppointmentModel;
