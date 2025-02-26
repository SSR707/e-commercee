import Img1 from "../../../assets/imageB1.png";
import Img2 from "../../../assets/imageB2.png";
import Img3 from "../../../assets/imageB3.png";

export const Browse = () => {
  return (
    <div className="container">
      <div className="pt-[40px] pb-[27px] text-center bg-light-grey rounded-[20px] xl:pt-[70px] xl:pb-[76px]">
        <h2 className="secondFont font-bold mb-[28px] mr-auto ml-auto max-w-[246px] text-[32px] text-center text-[#000] xl:text-[48px] xl:max-w-[657px] xl:mb-[64px]">
          BROWSE BY DRESS STYLE
        </h2>
        <div className=" grid  gap-[16px] px-[20px] xl:px-[64px] ">
          <div className="grid  grid-cols-1 gap-[16px] justify-center xl:grid-cols-[2fr_3.5fr]">
            <div
              className="rounded-[20px]  h-[200px] bg-cover bg-top px-[24px] py-[16px] text-start xl:h-[289px] xl:py-[25px] xl:px-[36px] "
              style={{ backgroundImage: `url(${Img1})` }}
            >
              <p className="secondFont font-bold text-[24px] text-[#000] xl:text-[36px] ">
                Casual
              </p>
            </div>
            <div
              className="rounded-[20px]  h-[200px] bg-cover bg-top px-[24px] py-[16px]  text-start  xl:h-[289px] xl:py-[25px] xl:px-[36px]"
              style={{ backgroundImage: `url(${Img2})` }}
            >
              <p className=" secondFont font-bold text-[24px] text-[#000] xl:text-[36px]">
                Formal
              </p>
            </div>
          </div>
          <div className="grid  grid-cols-1 gap-[16px] justify-center xl:grid-cols-[3.5fr_2fr]">
            {" "}
            <div
              className=" secondFont rounded-[20px]  h-[200px] bg-cover bg-top px-[24px] py-[16px] text-start xl:h-[289px] xl:py-[25px] xl:px-[36px]"
              style={{ backgroundImage: `url(${Img3})` }}
            >
              <p className=" font-bold text-[24px] text-[#000] xl:text-[36px]">
                Party
              </p>
            </div>
            <div
              className="secondFont rounded-[20px]  h-[200px] bg-cover bg-top px-[24px] py-[16px] text-start  xl:h-[289px] xl:py-[25px] xl:px-[36px]"
              style={{ backgroundImage: `url(${Img1})` }}
            >
              <p className=" font-bold text-[24px] text-[#000] xl:text-[36px]">
                Gym
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
