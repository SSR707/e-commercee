import ReatingFull from "../../../assets/reating-full.svg";
import Ok from "../../../assets/custumers-ok.svg";
import Menu from "../../../assets/menu.svg";

export const CommentCard = ({ name, description, date }) => {
  return (
    <div className="p-[24px] border-1 border-gray rounded-[24px] xl:py-[28px] xl:px-[32px]">
      <div className=" flex justify-between">
        <img src={ReatingFull} alt="" className="xl:w-[138px]" />
        <img src={Menu} alt="" />
      </div>
      <h3 className=" flex items-center gap-[4px] font-bold text-[16px] leading-[137%] text-[#000] mt-[16px] mb-[8px] xl:text-[20px] ">
        {name}
        <img src={Ok} alt="" />
      </h3>
      <p className="font-normal text-[14px] leading-[143%] text-gray text-start max-h-[107px] overflow-hidden xl:text-[16px]">
        {description}
      </p>
      <p className="mt-[24px] font-medium text-[16px] leading-[137%] text-gray">
        {date}
      </p>
    </div>
  );
};
