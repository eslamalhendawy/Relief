import { Link } from "react-router-dom";

import logo from "/assets/needHelpLogo.png";

const CarerProfileHeader = () => {
  return (
    <div className="bg-[#f6f3ef] flex items-center justify-between py-2 px-4 md:px-6 rounded-xl mb-16">
      <Link to="/profile">
        <img className="size-[35px] sm:size-[45px]" src={logo} alt="" />
      </Link>
      <div className="flex gap-3 md:gap-6 items-center text-sm sm:text-xl">
        <Link to="/carer-notifications">
          <i className="fa-regular fa-bell text-3xl text-[#212529] hover:text-[#00B4D8] duration-200"></i>
        </Link>
        <Link to="/carer-ratings">
          <i className="fa-regular fa-message text-3xl text-[#212529] hover:text-[#00B4D8] duration-200"></i>
        </Link>
      </div>
    </div>
  );
};

export default CarerProfileHeader;
