import MenuIcon from "../../assets/menuIcon.svg";
import HeaderIcon from "../../assets/headerIcon.svg";
import SearchIcon from "../../assets/searchIcon.svg";
import KorzinaIcon from "../../assets/korzinkaIcon.svg";
import ProfileIcon from "../../assets/profileIcon.svg";
import XIcon from "../../assets/x-icon.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

export const Header = () => {
  const [toggle, setToggle] = useState(false);
  const { productCount } = useSelector((state) => state.product);
  return (
    <div className="border-b-1 border-silver-gray">
      <div className=" bg-primary py-[9px] text-center">
        <p className=" font-normal text-[12px] text-[#fff]">
          Sign up and get 20% off to your first order.{" "}
          <a href="">Sign Up Now</a>
        </p>
      </div>
      <div className="container">
        <div
          className={` flex  items-center justify-between ${
            toggle ? "py-[10px]" : "py-[23px]"
          }`}
        >
          <div
            className={`flex  w-[100%] gap-[18px] items-center md:gap-[40px] `}
          >
            <button
              className={` py-[5px] px-[2px] md:hidden ${
                toggle ? "hidden" : "flex"
              }`}
            >
              <img className="w-[24px] h-[24px]" src={MenuIcon} alt="" />
            </button>
            <Link to="/" className={`xl:block ${toggle ? "hidden" : "block"}`}>
              <img className="xl:w-[160px]" src={HeaderIcon} alt="" />
            </Link>
            <ul className=" hidden xl:flex xl:gap-[24px]">
              <li className="font-normal text-[16px] text-[#000]">Shop</li>
              <li className="font-normal text-[16px] text-[#000]">On Sale</li>
              <li className="font-normal text-[16px] text-[#000]">
                New Arrivals
              </li>
              <li className="font-normal text-[16px] text-[#000]">Brand</li>
            </ul>
            <div
              className={` w-full md:flex items-center md:w-[550px] lg:w-[577px] relative transition-all duration-300 ease-in-out ${
                toggle ? "flex " : "hidden"
              }`}
            >
              <button className=" absolute left-[16px] ">
                <img src={SearchIcon} alt="" />
              </button>
              <input
                type="text"
                placeholder="Search for products..."
                className="pt-[12px] pb-[14px] pl-[52px] pr-[20px] rounded-[62px]  w-full flex-grow focus:outline-none bg-[#f0f0f0] transition-all duration-300 ease-in-out"
              />
            </div>
            <button
              className={` xl:hidden ${toggle ? "flex" : "hidden "}`}
              onClick={() => setToggle(false)}
            >
              <img src={XIcon} alt="" className="w-[24px] h-[24px]" />
            </button>
          </div>
          <div
            className={` flex items-center gap-[12px] xl:flex ${
              toggle ? "hidden" : "flex"
            } `}
          >
            <button onClick={() => setToggle(!toggle)} className="md:hidden">
              <img className="w-[32px] h-[32px]" src={SearchIcon} alt="" />
            </button>
            <div className=" relative">
              <Link to={"cart"}>
                <img className="w-[32px] h-[32px]" src={KorzinaIcon} alt="" />
              </Link>
              {productCount ? (
                <p className=" absolute top-[-7px] right-[-5px] px-[8px] text-[14px] rounded-2xl bg-red-600 text-[#fff]">
                  {productCount}
                </p>
              ) : null}
            </div>

            <button>
              <img className="w-[32px] h-[32px]" src={ProfileIcon} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
