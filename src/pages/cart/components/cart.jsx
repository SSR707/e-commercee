import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CartCard } from "./cart-card";
import PromoCode from "../../../assets/promocode.svg";
import BtnNavigate from "../../../assets/btn-navigate.svg";
import { useSelector } from "react-redux";
import ShoppingCart from "../../../assets/shopping-cart.png";
export const Cart = () => {
  const { products, totalPrice } = useSelector((state) => state.product);
  const [page, setPage] = useState(["/", "/Cart"]);

  return (
    <section className="pb-[200px]">
      <div className="container">
        <div className="">
          <div className=" flex gap-[6px] items-center pt-[20px] pb-[8px]">
            {page.map((item, index) => (
              <Link
                key={index}
                to={item === "/" ? "/" : item.toLowerCase()}
                className={`flex items-center font-medium text-[14px] leading-[167%] xl:text-[16px] xl:leading-[171%] ${
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
          <h2 className="secondFont font-bold text-[32px] text-[#000]">
            YOUR CART
          </h2>
          <div className="md:flex md:gap-[20px] ">
            <div
              className="mt-[24px] rounded-[20px] p-[14px] border border-silver-gray md:w-full"
              style={
                products.length === 0
                  ? {
                      backgroundImage: `url(${ShoppingCart})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "400px",
                      backgroundPosition: "center",
                    }
                  : {}
              }
            >
              {products.map((item, index) => (
                <CartCard
                  key={item.id}
                  id={item.id}
                  title={item?.name}
                  collor={item?.collor_name[item?.selectCollor]}
                  img={item.sub_img[0]}
                  userCount={item.userCount}
                  price={item.price}
                  size={item.size[item.selectSize]}
                  count={item.count}
                  borderChek={index === products.length - 1 ? false : true}
                />
              ))}
            </div>
            <div className="mt-[20px] rounded-[20px] p-[20px] border border-silver-gray md:h-[100%] ">
              <h4 className="font-bold text-[19px] text-[#000] md:text-xl">
                Order Summary
              </h4>
              <div className=" flex justify-between mt-[16px] md:mt-[24px]">
                <p className="font-normal text-gray text-[16px] md:text-[20px]">
                  Subtotal
                </p>
                <p className="font-bold  text-[16px] text-[#000] md:text-[20px]">
                  ${totalPrice ? totalPrice : 0}
                </p>
              </div>
              <div className=" flex justify-between mt-[20px]">
                <p className="font-normal text-gray text-[16px] md:text-[20px]">
                  Discount (-20%)
                </p>
                <p className="font-bold  text-[16px] text-red-500 md:text-[20px]">
                  ${(totalPrice / 100) * 20}
                </p>
              </div>
              <div className=" flex justify-between mt-[20px]">
                <p className="font-normal text-gray text-[16px]  md:text-[20px]">
                  Delivery Fee
                </p>
                <p className="font-bold text-[16px] text-[#000] md:text-[20px]">
                  $0
                </p>
              </div>
              <div className=" border-1 my-[20px] border-silver-gray"></div>
              <div className=" flex justify-between mt-[20px]">
                <p className="font-normal text-[#000] text-[16px] md:text-[20px]">
                  Total
                </p>
                <p className="font-bold text-[16px] text-[#000] md:text-[20px]">
                  ${totalPrice - (totalPrice / 100) * 20}
                </p>
              </div>
              <div className="mt-[16px] relative flex gap-[12px] md:mt-[24px]">
                <img
                  src={PromoCode}
                  alt=""
                  className=" absolute top-[14px] left-[14px]"
                />
                <input
                  type="text"
                  className="py-[12px] pl-[44px] rounded-[62px] bg-[#f0f0f0] focus:outline-none md:w-[70%]"
                  placeholder="Add promo code"
                />
                <button className="py-[12px] px-[19px] bg-primary text-[#fff] rounded-[62px] md:w-[30%]">
                  Apply
                </button>
              </div>
              <button className="mt-[16px] border py-[16px] px-[54px] w-full rounded-[64px] flex bg-primary text-[#fff] justify-center text-[14px] font-medium gap-[12px] md:min-w-[300px] md:w-auto lg:min-w-[457px]">
                Go to Checkout
                <img src={BtnNavigate} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
