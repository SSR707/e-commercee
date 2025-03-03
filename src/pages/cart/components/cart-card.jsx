import React, { useState } from "react";
import CartImg from "../../../assets/cartImg.svg";
import KozinkaImg from "../../../assets/dalateKorzinka.svg";
import Minus from "../../../assets/minus.svg";
import Plus from "../../../assets/plus.svg";
import { useDispatch } from "react-redux";
import {
  deleteProduct,
  toggleAmount,
} from "../../../store/slices/cart-reducer";

export const CartCard = ({
  id,
  img,
  title,
  size,
  collor,
  price,
  userCount,
  borderChek,
}) => {
  const dispatch = useDispatch();
  const deleteP = () => {
    dispatch(deleteProduct({ id }));
  };
  return (
    <>
      <div className="flex gap-[14px] md:max-w-full">
        <div className="w-[99px] h-[99px]">
          <img src={img} alt="" />
        </div>
        <div className="grow">
          <div className=" flex gap-[15px] md:justify-between ">
            <h3 className="font-bold text-[16px] text-[#000] md:text-[20px]">
              {title}
            </h3>
            <img
              onClick={deleteP}
              src={KozinkaImg}
              alt=""
              className="md:w-[24px] md:h-[24px]"
            />
          </div>
          <p className="font-normal text-[12px] text-[#000] md:text-[14px]">
            Size: <span className=" text-gray">{size}</span>
          </p>
          <p className="font-normal text-[12px] text-[#000] md:text-[14px]">
            Color: <span className=" text-gray">{collor}</span>
          </p>
          <div className="flex justify-between items-center">
            <h4 className=" font-bold text-[20px] text-[#000] text-2xl">
              ${price}
            </h4>
            <div className="">
              <p className=" font-bold text-[20px] text-[#000] text-2xl">{}</p>
              <button className="flex items-center gap-[20px] bg-[#f0f0f0] py-[5px] px-[16px] rounded-[62px] md:py-[12px] md:px-[20px]">
                <img
                  onClick={() =>
                    dispatch(toggleAmount({ id: id, type: false }))
                  }
                  src={Minus}
                  alt=""
                  className="w-[16px] h-[16px] md:w-[20px] md:h-[20px] cursor-pointer"
                />
                <p>{userCount}</p>
                <img
                  onClick={() => dispatch(toggleAmount({ id: id, type: true }))}
                  src={Plus}
                  alt=""
                  className="w-[16px] h-[16px] md:w-[20px] md:h-[20px] cursor-pointer"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      {borderChek ? (
        <div className=" my-[16px] border-1 border-silver-gray md:my-[24px]"></div>
      ) : null}
    </>
  );
};
