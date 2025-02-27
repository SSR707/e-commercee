import Pochta from "../../assets/emailSend.svg";

export const FooterSendCard = () => {
  return (
    <div className="w-full pt-[32px] px-[24px] pb-[28px] bg-primary rounded-[20px] absolute top-[-57%] xl:top-[-69%] xl:flex justify-between xl:px-[64px] xl:py-[36px] xl:items-center">
      <h2 className="secondFont font-bold text-[32px] text-[#fff] leading-[109%] xl:max-w-[551px]">
        STAY UPTO DATE ABOUT OUR LATEST OFFERS
      </h2>
      <div className="mt-[32px] xl:w-[349px] xl:mt-0">
        <div className=" relative mb-[12px]">
          <img
            src={Pochta}
            alt=""
            className=" absolute left-[15px] w-[20px] h-[20px] top-[15px]"
          />
          <input
            type="text"
            placeholder="Enter your email address "
            className="w-full py-[12px] pl-[48px] pr-[10px] bg-[#fff] rounded-[62px] focus:outline-none "
          />
        </div>
        <button className="w-full py-[12px] bg-[#fff] rounded-[62px]">
          Subscribe to Newsletter
        </button>
      </div>
    </div>
  );
};
