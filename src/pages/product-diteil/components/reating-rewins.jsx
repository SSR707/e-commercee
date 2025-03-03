import React from "react";
import ReatingRewisIcon from "../../../assets/reating-rewis-icon.svg";
import Navigate from "../../../assets/navigate.svg";
import { CommentCard } from "./comment-card";
import { CutomersData } from "../../home/data/data";
import { CustumersCard } from "../../home/components/custumers-card";
import { useOutletContext } from "react-router-dom";
export const ReatingRewins = () => {
  const isDesktop = window.innerWidth >= 1024;
  const { product } = useOutletContext();
  return (
    <section className="pb-[64px]">
      <div className="container">
        <div className=" text-center">
          <div className=" flex pt-[32px] lg:pt-[24px] items-center justify-between">
            <div className="flex gap-[6px] lg:gap-[8px] items-center ">
              <h3 className="font-bold text-[20px] lg:text-[24px] text-[#000]">
                All Reviews{" "}
              </h3>
              <p className="font-normal text-[14px] lg:text-[16px] text-gray leading-[137%] mt-[6px]">
                (451)
              </p>
            </div>
            <div className="flex gap-[10px]">
              <button className="bg-[#f0f0f0] rounded-[62px] p-[16px]">
                <img
                  src={ReatingRewisIcon}
                  alt=""
                  className="w-[20px] h-[20px]"
                />
              </button>
              <button className="bg-[#f0f0f0] rounded-[62px] py-[12px] px-[22px]  gap-[21px] font-medium text-[16px] text-[#000] hidden lg:flex">
                <p>Latest</p>
                <img src={Navigate} alt="" />
              </button>
              <button className=" rounded-[62px] py-[12px] px-[16px] lg:py-[13px] lg:px-[22px]  font-medium text-[12px] lg:text-[16px] text-[#fff] bg-primary">
                Write a Review
              </button>
            </div>
          </div>
          <div className=" grid  grid-cols-1 gap-[16px] lg:grid-cols-[1fr_1fr] lg:gap-[20px] pt-[32px] text-start">
            {product?.comments?.slice(0, isDesktop ? 6 : 3).map((item) => (
              <CommentCard
                date={item.date}
                key={item.id}
                name={item.name}
                description={item.description}
              />
            ))}
          </div>
          <button className="py-[16px]  px-[54px] border-1 rounded-[62px] mt-[36px]">
            Load More Reviews
          </button>
        </div>
      </div>
    </section>
  );
};
