import { ProductCard } from "./product-card";
import { SliderCard } from "./sliderCard";

export const ProductSection = ({ title , isChek}) => {
  return (
    <div className="container">
      <div className={`xl: text-center  pb-[40px]  xl:pb-[64px] ${isChek ? 'border-b-1 border-gray' : ''}`}>
        <h2 className="font-bold text-[32px] text-center text-[#000] xl:text-[48px]">
          {title}
        </h2>
        <div className="mt-[32px]">
          <SliderCard />
        </div>
        <button className="py-[13px] w-full px-[54px] border-1 rounded-[62px] mt-[24px] xl:w-[218px] xl:mt-[36px]">
          View All
        </button>
      </div>
    </div>
  );
};
