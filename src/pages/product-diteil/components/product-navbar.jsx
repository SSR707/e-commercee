import React, { useState } from "react";
import { Link } from "react-router-dom";

export const ProductNavbar = () => {
  const [link, setLink] = useState(2);
  return (
    <section className="pt-[60px]">
      <div className="container">
        <div className="flex text-center  border-b-1 border-gray">
          <Link
            to={"product-details"}
            className={` pb-[24px] w-[424px] font-medium text-[20px]  leading-[110%]  ${
              link === 1 ? "border-b-2 text-[#000]" : "text-gray"
            } `}
            onClick={() => setLink(1)}
          >
            Product Details
          </Link>
          <Link
            to={``}
            className={` pb-[24px] w-[424px] font-medium text-[20px] leading-[110%] ${
              link === 2 ? "border-b-2 text-[#000]" : "text-gray"
            } `}
            onClick={() => setLink(2)}
          >
            Rating & Reviews
          </Link>
          <Link
            to={"faq"}
            className={` pb-[24px] w-[424px] font-medium text-[20px]  leading-[110%] ${
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
