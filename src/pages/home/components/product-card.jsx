import Product1 from "../../../assets/product1.svg";
import Reating from "../../../assets/reateing.svg";

export const ProductCard = ({ img, name, otziv, price }) => {
  return (
    <div className="">
      <div className="w-[198px] xl:w-[295px]">
        <img src={img} alt="" className="w-full" />
      </div>
      <div className="mt-[10px] text-start">
        <h3 className=" font-bold text-[12px]">{name}</h3>
        <div className="mt-[4px] flex gap-[11px]">
          <img src={Reating} alt="" />
          <p>{otziv}</p>
        </div>
        <p className="font-bold text-[20px] text-[#000]">${price}</p>
      </div>
    </div>
  );
};
