import Img1 from "../../../assets/imageB1.png";
import Img2 from "../../../assets/imageB2.png";
import Img3 from "../../../assets/imageB3.png";

export const Browse = () => {
  return (
    <div className="container">
      <div className="pt-[40px] pb-[27px] text-center bg-light-grey rounded-[20px]">
        <h2 className="font-bold mr-auto ml-auto max-w-[246px] text-[32px] text-center text-[#000] xl:text-[48px] xl:max-w-[657px] xl:mb-[64px]">
          BROWSE BY DRESS STYLE
        </h2>
        <div className="grid justify-center gap-[16px] xl: grid-cols-2 ">
          <div
            className="rounded-[20px] w-[300px] h-[200px] bg-cover bg-center px-[24px] py-[16px] text-start"
            style={{ backgroundImage: `url(${Img1})` }}
          >
            <p className=" font-bold text-[24px] text-[#000] ">Casual</p>
          </div>
          <div
            className="rounded-[20px] w-[300px] h-[200px] bg-cover bg-center px-[24px] py-[16px]  text-start"
            style={{ backgroundImage: `url(${Img2})` }}
          >
            <p className=" font-bold text-[24px] text-[#000] ">Formal</p>
          </div>
          <div
            className="rounded-[20px] w-[300px] h-[200px] bg-cover bg-center px-[24px] py-[16px] text-start"
            style={{ backgroundImage: `url(${Img3})` }}
          >
            <p className=" font-bold text-[24px] text-[#000] ">Party</p>
          </div>
          <div
            className="rounded-[20px] w-[300px] h-[200px] bg-cover bg-center px-[24px] py-[16px] text-start"
            style={{ backgroundImage: `url(${Img1})` }}
          >
            <p className=" font-bold text-[24px] text-[#000] ">Gym</p>
          </div>
        </div>
      </div>
    </div>
  );
};
