import React from "react";
import ReatingRewisIcon from "../../../assets/reating-rewis-icon.svg";
import Navigate from "../../../assets/navigate.svg";
import { CommentCard } from "./comment-card";
import { CutomersData } from "../../home/data/data";
import { CustumersCard } from "../../home/components/custumers-card";
export const ReatingRewins = () => {
  return (
    <section className="pb-[64px]">
      <div className="container">
        <div className=" text-center">
          <div className=" flex gap-[8px] pt-[24px] items-center justify-between">
            <div className="flex gap-[8px] items-center ">
              <h3 className="font-bold text-[24px] text-[#000]">
                All Reviews{" "}
              </h3>
              <p className="font-normal text-[16px] text-gray leading-[137%] mt-[6px]">
                (451)
              </p>
            </div>
            <div className="flex gap-[10px]">
              <button className="bg-[#f0f0f0] rounded-[62px] p-[16px]">
                <img src={ReatingRewisIcon} alt="" />
              </button>
              <button className="bg-[#f0f0f0] rounded-[62px] py-[13px] px-[22px] flex gap-[21px] font-medium text-[16px] text-[#000]">
                <p>Latest</p>
                <img src={Navigate} alt="" />
              </button>
              <button className=" rounded-[62px] py-[13px] px-[22px] flex gap-[21px] font-medium text-[16px] text-[#fff] bg-primary">
                Write a Review
              </button>
            </div>
          </div>
          <div className=" grid grid-cols-[1fr_1fr] gap-[20px] pt-[32px] text-start">
            {CutomersData?.map((item) => (
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
