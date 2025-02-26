import { CustomerSliderCard } from "./Customer-slider";
import { CustumersCard } from "./custumers-card";

export const Customers = () => {
  return (
    <div className="container">
      <div className=" ">
        <h2 className="secondFont font-bold text-[32px] leading-[112%] text-[#000] xl:text-[48px]">
          OUR HAPPY CUSTOMERS
        </h2>
        <div className="mt-[24px] xl:mt-[40px] ">
          <CustomerSliderCard />
        </div>
      </div>
    </div>
  );
};
