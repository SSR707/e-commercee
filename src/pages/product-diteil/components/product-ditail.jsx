import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PrductImg1 from "../../../assets/product-1-img.svg";
import PrductImg2 from "../../../assets/product-2-img.svg";
import PrductImg3 from "../../../assets/product-3-img.svg";
import PrductImg4 from "../../../assets/product-4-img.svg";
import Reating from "../../../assets/reateing.svg";
import Minus from "../../../assets/minus.svg";
import Plus from "../../../assets/plus.svg";

export const ProductDitail = ({ data }) => {
  useEffect(() => {
    window.scrollTo({ top: 130, behavior: "smooth" });
  }, [data?.id]);
  const [page, setPage] = useState(["/", "Shop", "Man", "T-shirts"]);
  return (
    <section className="">
      <div className="container">
        <div className="box">
          <div className=" flex gap-[16px] items-center pt-[24px] pb-[36px]">
            {page.map((item, index) => (
              <Link
                key={index}
                to={item}
                className={`flex items-center font-medium text-[13px] leading-[167%] xl:text-[16px] xl:leading-[171%] ${
                  page.length === index + 1
                    ? "text-[#121212]"
                    : "text-[#605f5f]"
                }`}
              >
                {item === "/" ? "Home" : item}
                {page.length !== index + 1 ? " >" : ""}
              </Link>
            ))}
          </div>

          <div className=" flex product gap-[40px]">
            <div className=" flex gap-[14px] ">
              <div className=" flex flex-col gap-[14px] ">
                <img src={PrductImg1} alt="" className="w-[152px] h-[167px]" />
                <img src={PrductImg2} alt="" className="w-[152px] h-[167px]" />
                <img src={PrductImg3} alt="" className="w-[152px] h-[167px]" />
              </div>
              <div className=" w-[444px] h-[530px] ">
                <img src={PrductImg4} alt="" className="w-full object-cover" />
              </div>
            </div>
            <div className="">
              <div className="pb-[20px] border-b-1 border-gray">
                <h2 className="secondFont font-bold text-[39px] text-[#000]">
                  {data?.name}
                </h2>
                <div className="flex mt-[14px] gap-[16px]">
                  <img src={Reating} alt="" className="w-[139px]" />
                  <p className="font-normal text-[16px] text-[#000]">4.5/5</p>
                </div>
                <div className=" flex gap-3 mt-[14px] items-center">
                  <h4 className="font-bold text-[32px] text-[#000]">
                    ${data?.price}
                  </h4>
                  <h4 className="font-bold text-[32px] text-gray line-through">
                    ${data?.old_price}
                  </h4>
                  <div className="py-[6px] px-[14px] bg-pink rounded-[62px]">
                    <p className="font-medium text-[16px] text-danger">
                      -{data?.skidka}%
                    </p>
                  </div>
                </div>
                <p className="font-normal text-[16px] leading-[137%] text-[#000] w-[590px] mt-[16px]">
                  {data?.description}
                </p>
              </div>
              <div className="py-[20px] border-b-1 border-gray">
                <p className="font-normal text-[16px] text-[#000]">
                  Select Colors
                </p>
                <div className="flex mt-[14px] gap-[16px]">
                  <div className="w-[37px] h-[37px] rounded-[100%] bg-[#4f4631]"></div>
                  <div className="w-[37px] h-[37px] rounded-[100%] bg-[#314f4a]"></div>
                  <div className="w-[37px] h-[37px] rounded-[100%] bg-[#31344f]"></div>
                </div>
              </div>
              <div className="py-[20px] border-b-1 border-gray">
                <p className="font-normal text-[16px] text-[#000]">
                  Choose Size
                </p>
                <div className="flex mt-[16px] gap-[12px]">
                  <button className="px-[24px] py-[12px] bg-[#f0f0f0] rounded-[64px] font-normal text-[16px]">
                    Small
                  </button>
                  <button className="px-[24px] py-[12px] bg-[#f0f0f0] rounded-[64px] font-normal text-[16px]">
                    Medium
                  </button>
                  <button className="px-[24px] py-[12px] bg-[#f0f0f0] rounded-[64px] font-normal text-[16px]">
                    Large
                  </button>
                  <button className="px-[24px] py-[12px] bg-[#f0f0f0] rounded-[64px] font-normal text-[16px]">
                    X-Large
                  </button>
                </div>
              </div>
              <div className="pt-[20px] flex gap-[20px]">
                <button className=" flex gap-[38px] py-[14px] px-[20px] bg-[#f0f0f0] rounded-[64px] items-center">
                  <img src={Minus} alt="" className="w-[22px] h-[22px]" />
                  <p className="font-medium text-[16px]">1</p>
                  <img src={Plus} alt="" className="w-[22px] h-[22px]" />
                </button>
                <button className="py-[16px] px-[54px] bg-[#000000] rounded-[64px] font-medium text-[16px] text-[#fff] w-[400px]">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
