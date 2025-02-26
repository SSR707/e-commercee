import Versace from "../../../assets/brandVersace.svg";
import Zara from "../../../assets/brandZara.svg";
import Gucci from "../../../assets/brandGucci.svg";
import Prada from "../../../assets/brandPrada.svg";
import CalivnKlein from "../../../assets/brandClien.svg";

export const Brands = () => {
  return (
    <div className="container">
      <div className=" xl:flex xl:items-center xl:gap-[106px] ">
        <div className=" flex gap-[34px] xl:gap-[106px] justify-center">
          <img src={Versace} alt="" className="w-[100px] xl:w-[156px]" />
          <img src={Zara} alt="" className="w-[100px] xl:w-[156px]" />
          <img src={Gucci} alt="" className="w-[100px] xl:w-[156px]" />
        </div>
        <div className=" flex justify-center mt-[22px] gap-[31px] xl:justify-start xl:items-center xl:gap-[106px] xl:mt-0">
          <img src={Prada} alt="" className="xl:w-[156px]" />
          <img src={CalivnKlein} alt="" className="xl:w-[156px]" />
        </div>
      </div>
    </div>
  );
};
