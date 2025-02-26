import heroImg from "../../../assets/heroImg.png";
import heroStar1 from "../../../assets/heroStar1.svg";
import heroStar2 from "../../../assets/heroStar2.svg";
export const Hero = () => {
  return (
    <>
      <div className="container">
        <div className=" flex xl:relative xl:items-center">
          <div className="w-full xl:max-w-[50%]">
            <h1 className="secondFont max-w-[315px] font-bold text-[36px] leading-[94%] text-[#000] mb-[20px] xl:text-[64px] xl:max-w-[577px] ">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className=" text-gray font-normal text-[14px] text-[ rgba(0, 0, 0, 0.6);] leading-[143%] xl:w-[500px] xl:text-[16px] ">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <button className="py-[16px] w-full bg-[#000] text-[16px] rounded-[64px] mt-[24px] text-[#fff] px-[54px] xl:w-[210px] xl:font-medium ">
              Shop Now
            </button>
            <div className=" flex flex-col justify-center mt-[20px] xl:flex-row xl:justify-start xl:mt-[48px]">
              <div className=" flex justify-center  ">
                <div className="pr-[27px] border-r-1 border-gray xl:text-start">
                  <h3 className=" font-bold text-[24px] text-[#000] xl:text-[40px]">
                    200+
                  </h3>
                  <p className="font-normal text-[12px] text-gray ">
                    International Brands
                  </p>
                </div>
                <div className="pl-[27px] border-l-1 border-gray xl:pr-[32px] xl:text-start">
                  <h3 className=" font-bold text-[24px] text-[#000] xl:text-[40px]">
                    2,000+
                  </h3>
                  <p className="font-normal text-[12px] text-gray ">
                    High-Quality Products
                  </p>
                </div>
              </div>
              <div className=" text-center xl:pl-[32px] xl:border-l-1 xl:text-start">
                <h3 className=" font-bold text-[24px] text-[#000] xl:text-[40px] ">
                  30,000+
                </h3>
                <p className="font-normal text-[12px] text-gray  ">
                  Happy Customers
                </p>
              </div>
            </div>
          </div>
          <div className=" hidden xl:block xl:relative xl:max-w-[50%]">
            <img
              src={heroStar1}
              alt=""
              className=" absolute right-[21px] top-[40px] xl:top-[80px]"
            />
            <img
              src={heroStar2}
              alt=""
              className=" absolute left-[27px] top-[137px]"
            />
            <img
              src={heroImg}
              alt=""
              className="  top-0 left-0 w-[580px] object-cover"
            />
          </div>
        </div>
      </div>
      <div className=" relative xl:hidden">
        <img
          src={heroStar1}
          alt=""
          className=" absolute right-[21px] top-[40px]"
        />
        <img
          src={heroStar2}
          alt=""
          className=" absolute left-[27px] top-[137px]"
        />
        <img src={heroImg} alt="" />
      </div>
    </>
  );
};
