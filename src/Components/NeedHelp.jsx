import logo from "/assets/needHelpLogo.png";
import phone from "/assets/needHelpPhone.png";

const NeedHelp = () => {
  return (
    <div className="bg-[#f6f3ef] flex items-center justify-between py-2 px-4 rounded-xl mb-16">
      <img className="size-[35px] sm:size-[45px]" src={logo} alt="" />
      <div className="flex gap-1 md:gap-3 items-center text-sm sm:text-xl">
        <span className="text-navyColor font-medium">Need Help ?</span>
        <span className="flex text-[#00B4D8] items-center gap-2 font-medium">
          <img className="size-[28px]" src={phone} alt="" /> 01028293040
        </span>
      </div>
    </div>
  );
};

export default NeedHelp;
