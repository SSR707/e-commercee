import React, { useState } from "react";
import { Link } from "react-router-dom";

export const ProductNavbar = () => {
  const [link, setLink] = useState(2);
  return (
    <section className="pt-[50px] lg:pt-[70px]">
      <div className="container">
        <div className="flex text-center  border-b-1 border-gray">
          <Link
            to={"product-details"}
            className={` pb-[20px] w-[35%] font-medium text-[16px]  leading-[137%] lg:text-[20px] lg:leading-[110%] lg:w-[33%] lg:pb-[24px] ${
              link === 1 ? "border-b-2 text-[#000]" : "text-gray"
            } `}
            onClick={() => setLink(1)}
          >
            Product Details
          </Link>
          <Link
            to={``}
            className={` pb-[20px] w-[40%] font-medium text-[16px] leading-[137%] lg:text-[20px] lg:leading-[110%] lg:w-[33%] lg:pb-[24px] ${
              link === 2 ? "border-b-2 text-[#000]" : "text-gray"
            } `}
            onClick={() => setLink(2)}
          >
            Rating & Reviews
          </Link>
          <Link
            to={"faq"}
            className={` pb-[20px] w-[25%] font-medium text-[16px]  leading-[137%] lg:text-[20px] lg:leading-[110%] lg:w-[33%] lg:pb-[24px] ${
              link === 3 ? "border-b-2 text-[#000]" : "text-gray"
            } `}
            onClick={() => setLink(3)}
          >
            FAQs
          </Link>
        </div>
      </div>
    </section>
  );
};
