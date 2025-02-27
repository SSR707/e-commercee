import { FooterSendCard } from "./footer-send-card";
import icon from "../../assets/headerIcon.svg";
import Twitter from "../../assets/twitter.svg";
import Facebook from "../../assets/facebook.svg";
import Instagram from "../../assets/Instagram.svg";
import Github from "../../assets/github.svg";
import Visa from "../../assets/visa.svg";
export const Footer = () => {
  return (
    <div className="bg-light-grey pb-[50px] pt-[190px] xl:pt-[140px] ">
      <div className="container">
        <div className=" relative">
          <FooterSendCard />
          <div className="">
            <div className="xl:flex xl:items-center xl:gap-[113px] border-b-1 border-gray xl:pb-[50px] ">
              <div>
                <div>
                  <img src={icon} alt="" className="xl:w-[167px] " />
                </div>
                <p className=" font-normal text-[14px] leading-[143%] text-gray mt-[14px] xl:w-[248px] xl:mt-[25px] ">
                  We have clothes that suits your style and which you’re proud
                  to wear. From women to men.
                </p>
                <div className=" flex gap-[12px] mt-[20px] xl:mt-[35px]">
                  <img src={Twitter} alt="" />
                  <img src={Facebook} alt="" />
                  <img src={Instagram} alt="" />
                  <img src={Github} alt="" />
                </div>
              </div>
              <div className=" flex flex-col gap-[24px] mt-[25px] pb-[40px]  xl:flex-row xl:gap-[113px]">
                <div className=" flex gap-[62px] xl:gap-[113px]">
                  <ul className=" flex flex-col gap-[16px] min-w-[121px]">
                    <li>
                      <h3 className=" font-bold text-[14px] leading-[129%] text-[#000] xl:text-[16px] ">
                        COMPANY
                      </h3>
                    </li>
                    <li>
                      {" "}
                      <p className=" font-normal text-[14px] leading-[114%] text-gray">
                        About
                      </p>
                    </li>
                    <li>
                      {" "}
                      <p className=" font-normal text-[14px] leading-[114%] text-gray">
                        Features
                      </p>
                    </li>
                    <li>
                      {" "}
                      <p className=" font-normal text-[14px] leading-[114%] text-gray">
                        Works
                      </p>
                    </li>
                    <li>
                      {" "}
                      <p className=" font-normal text-[14px] leading-[114%] text-gray">
                        Career
                      </p>
                    </li>
                  </ul>
                  <ul className=" flex flex-col gap-[16px]">
                    <li>
                      <h3 className=" font-bold text-[14px] leading-[129%] text-[#000] xl:text-[16px]">
                        HELP
                      </h3>
                    </li>
                    <li>
                      {" "}
                      <p className=" font-normal text-[14px] leading-[114%] text-gray">
                        Customer Support
                      </p>
                    </li>
                    <li>
                      {" "}
                      <p className=" font-normal text-[14px] leading-[114%] text-gray">
                        Delivery Detalis
                      </p>
                    </li>
                    <li>
                      {" "}
                      <p className=" font-normal text-[14px] leading-[114%] text-gray">
                        Terms Contidants
                      </p>
                    </li>
                    <li>
                      {" "}
                      <p className=" font-normal text-[14px] leading-[114%] text-gray">
                        Previy Policy
                      </p>
                    </li>
                  </ul>
                </div>
                <div className=" flex gap-[62px] xl:gap-[113px]">
                  <ul className=" flex flex-col gap-[16px] min-w-[121px] ">
                    <li>
                      <h3 className=" font-bold text-[14px] leading-[129%] text-[#000] xl:text-[16px] ">
                        FAQ
                      </h3>
                    </li>
                    <li>
                      {" "}
                      <p className=" font-normal text-[14px] leading-[114%] text-gray">
                        Accaunt
                      </p>
                    </li>
                    <li>
                      {" "}
                      <p className=" font-normal text-[14px] leading-[114%] text-gray">
                        Manage Deleveris
                      </p>
                    </li>
                    <li>
                      {" "}
                      <p className=" font-normal text-[14px] leading-[114%] text-gray">
                        Orders
                      </p>
                    </li>
                    <li>
                      {" "}
                      <p className=" font-normal text-[14px] leading-[114%] text-gray">
                        Payment
                      </p>
                    </li>
                  </ul>
                  <ul className=" flex flex-col gap-[16px] ">
                    <li>
                      <h3 className=" font-bold text-[14px] leading-[129%] text-[#000] xl:text-[16px]">
                        RESOURCES
                      </h3>
                    </li>
                    <li>
                      {" "}
                      <p className=" font-normal text-[14px] leading-[114%] text-gray">
                        Free eBook
                      </p>
                    </li>
                    <li>
                      {" "}
                      <p className=" font-normal text-[14px] leading-[114%] text-gray">
                        Developmet Tutorial
                      </p>
                    </li>
                    <li>
                      {" "}
                      <p className=" font-normal text-[14px] leading-[114%] text-gray">
                        How To Blog
                      </p>
                    </li>
                    <li>
                      {" "}
                      <p className=" font-normal text-[14px] leading-[114%] text-gray">
                        Youtube Playlist
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-[25px] xl:flex  xl:items-center justify-between ">
              <p className=" font-normal text-[14px] text-center">
                Shop.co © 2000-2021, All rights reserved
              </p>
              <div className="flex justify-center mt-[16px] items-center xl:mt-0">
                <img src={Visa} alt="" />
                <img src={Visa} alt="" />
                <img src={Visa} alt="" />
                <img src={Visa} alt="" />
                <img src={Visa} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};
