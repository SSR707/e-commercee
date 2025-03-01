import MenuIcon from "../../assets/menuIcon.svg";
import HeaderIcon from "../../assets/headerIcon.svg";
import SearchIcon from "../../assets/searchIcon.svg";
import KorzinaIcon from "../../assets/korzinkaIcon.svg";
import ProfileIcon from "../../assets/profileIcon.svg";

export const Header = () => {
  return (
    <div className="border-b-1 border-silver-gray">
      <div className=" bg-primary py-[9px] text-center">
        <p className=" font-normal text-[12px] text-[#fff]">
          Sign up and get 20% off to your first order.{" "}
          <a href="">Sign Up Now</a>
        </p>
      </div>
      <div className="container">
        <div className=" flex py-[23px] items-center justify-between ">
          <div className=" flex gap-[18px] items-center md:gap-[40px]">
            <button className=" py-[5px] px-[2px] md:hidden">
              <img className="w-[24px] h-[24px]" src={MenuIcon} alt="" />
            </button>
            <a href="">
              <img className="xl:w-[160px]" src={HeaderIcon} alt="" />
            </a>
            <ul className=" hidden xl:flex xl:gap-[24px]">
              <li className="font-normal text-[16px] text-[#000]">Shop</li>
              <li className="font-normal text-[16px] text-[#000]">On Sale</li>
              <li className="font-normal text-[16px] text-[#000]">
                New Arrivals
              </li>
              <li className="font-normal text-[16px] text-[#000]">Brand</li>
            </ul>
            <div className=" hidden lg:flex lg:items-center lg:w-[577px] lg:relative">
              <button className=" lg:absolute lg:left-[16px]">
                <img src={SearchIcon} alt="" />
              </button>
              <input
                type="text"
                placeholder="Search for products..."
                className="lg:pt-[12px] lg:pb-[14px] lg:pl-[52px] lg:pr-[20px] lg:rounded-[62px]  lg:w-full lg:flex-grow lg:bg-[#f0f0f0]"
              />
            </div>
          </div>
          <div className=" flex items-center gap-[12px]">
            <button className="lg:hidden">
              <img className="w-[24px] h-[24px]" src={SearchIcon} alt="" />
            </button>
            <button>
              <img className="w-[24px] h-[24px]" src={KorzinaIcon} alt="" />
            </button>
            <button>
              <img className="w-[24px] h-[24px]" src={ProfileIcon} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
