import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PrductImg1 from "../../../assets/product-1-img.svg";
import PrductImg3 from "../../../assets/product-3-img.svg";
import PrductImg2 from "../../../assets/product-4-img.svg";
import SelectIcon from "../../../assets/selectIcon.svg";
import Reating from "../../../assets/reateing.svg";
import Minus from "../../../assets/minus.svg";
import Plus from "../../../assets/plus.svg";
import { useDispatch } from "react-redux";
import { addProductList } from "../../../store/slices/cart-reducer";

export const ProductDitail = ({ data }) => {
  const [count, setCount] = useState(1);
  useEffect(() => {
    window.scrollTo({ top: 130, behavior: "smooth" });
    setCount(1);
  }, [data?.id]);

  const [page, setPage] = useState(["/", "Shop", "Man", "T-shirts"]);
  const dispatch = useDispatch();
  const [selectImg, setSeletImg] = useState(data?.sub_img[0]);
  useEffect(() => {
    setSeletImg(data?.sub_img[0]);
  }, [data?.sub_img[0]]);

  const [selectCollor, setSelectCollor] = useState(0);
  const [selectSize, setSelectSize] = useState(0);

  const [error, setError] = useState(false);
  const addToCart = () => {
    if (count > 0) {
      dispatch(addProductList({ ...data, count, selectCollor, selectSize }));
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };
  return (
    <section className="">
      <div className="container">
        <div className="box">
          <div className=" flex gap-[6px] items-center py-[22px] md:pt-[24px] md:pb-[36px] md:gap-[12px]">
            {page.map((item, index) => (
              <Link
                key={index}
                to={item}
                className={`flex items-center font-medium text-[14px] leading-[167%] md:text-[16px] xl:leading-[171%]  ${
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

          <div className=" flex flex-col gap-[20px] lg:flex-row lg:gap-[40px] ">
            <div className="flex flex-col gap-[12px] lg:flex-row lg:w-[50%]">
              <div className="h-[325px] md:h-[530px] lg:hidden">
                <img
                  src={selectImg}
                  alt=""
                  className="w-full h-full object-cover rounded-[20px]"
                />
              </div>
              <div className=" flex gap-[12px] lg:flex-col">
                {data?.sub_img.map((item, index) => (
                  <img
                    src={item}
                    key={index}
                    onClick={() => setSeletImg(item)}
                    alt=""
                    className={`w-[106px] h-[106px] object-cover rounded-[20px] lg:w-[152px] lg:h-[167px] ${
                      item === selectImg ? "border-2" : ""
                    }`}
                  />
                ))}
              </div>
              <div className="h-[530px] w-[444px]  hidden lg:flex">
                <img
                  src={selectImg}
                  alt=""
                  className="w-full h-full object-cover rounded-[20px]"
                />
              </div>
            </div>
            <div className="lg:w-[50%]">
              <div className="pb-[24px] border-b-1 border-gray">
                <h2 className="secondFont font-bold text-[24px] text-[#000] lg:text-[39px] lg:max-w-[600px] lg:overflow-hidden lg:whitespace-nowrap lg:text-ellipsis ">
                  {data?.name}
                </h2>
                <div className="flex mt-[12px] gap-[16px] lg:mt-[14px]">
                  <img
                    src={Reating}
                    alt=""
                    className="w-[105px] lg:w-[139px]"
                  />
                  <p className="font-normal text-[14px] text-[#000] lg:text-[16px]">
                    {data?.otziv}
                  </p>
                </div>
                <div className=" flex gap-2.5 mt-[12px] items-center lg:gap-[13px]">
                  <h4 className="font-bold text-[24px] text-[#000] lg:text-[32px] ">
                    ${data?.price}
                  </h4>
                  <h4 className="font-bold text-[24px] text-gray line-through lg:text-[32px] ">
                    ${data?.old_price}
                  </h4>
                  <div className="py-[6px] px-[12px] bg-pink rounded-[62px] lg:px-[14px]">
                    <p className="font-medium text-[12px] text-danger lg:text-[16px] ">
                      -{data?.skidka}%
                    </p>
                  </div>
                </div>
                <p className="font-normal text-[14px] leading-[143%] text-gray max-w-[343px] mt-[20px] lg:max-w-[590px] lg:mt-[16px] lg:text-[16px]">
                  {data?.description}
                </p>
              </div>
              <div className="py-[24px] border-b-1 border-gray lg:py-[20px]">
                <p className="font-normal text-[14px] text-gray lg:text-[16px]">
                  Select Colors
                </p>
                <div className="flex mt-[16px] gap-[12px]">
                  {data?.collor?.map((item, index) => (
                    <div
                      key={index}
                      className="w-[37px] h-[37px] rounded-full flex items-center justify-center"
                      style={{ backgroundColor: item }}
                      onClick={() => setSelectCollor(index)}
                    >
                      {index === selectCollor ? (
                        <img src={SelectIcon} alt="" />
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
              <div className="py-[24px] border-b-1 border-gray lg:py-[20px]">
                <p className="font-normal text-[14px] text-gray lg:text-[16px]">
                  Choose Size
                </p>
                <div className="flex mt-[16px] gap-[8px] lg:gap-[12px]">
                  {data?.size.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectSize(index)}
                      className={`px-[20px] py-[10px]  rounded-[64px] font-normal text-[13px] lg:px-[24px] lg:py-[12px] lg:text-[16px] ${
                        selectSize === index
                          ? "bg-primary text-[#fff]"
                          : "bg-[#f0f0f0]"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
              <div className="pt-[24px] flex gap-[12px] lg:pt-[20px]">
                <button
                  className={` flex gap-[18px] py-[12px] px-[26px] bg-[#f0f0f0] rounded-[64px] items-center w-[40%] lg:w-[29%] lg:gap-[38px] lg:py-[16px] ${
                    error ? "border-2 border-red-600" : ""
                  }`}
                >
                  <img
                    src={Minus}
                    alt=""
                    className="w-[20px] h-[20px]"
                    onClick={() => (count > 0 ? setCount(count - 1) : count)}
                  />
                  <p className="font-medium text-[14px] lg:text-[16px]">
                    {count}
                  </p>
                  <img
                    src={Plus}
                    alt=""
                    className="w-[20px] h-[20px]"
                    onClick={() => setCount(count + 1)}
                  />
                </button>
                <button
                  onClick={addToCart}
                  className="py-[12px] px-[54px] bg-[#000000] rounded-[64px] font-medium text-[16px] text-[#fff] w-[60%] lg:w-[71%] lg:py-[16px] lg:text-[16px]"
                >
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
