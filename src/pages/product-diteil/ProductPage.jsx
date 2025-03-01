import React, { useEffect, useState } from "react";
import { data, Outlet, useParams } from "react-router-dom";
import { ProductDitail } from "./components/product-ditail";
import { ProductNavbar } from "./components/product-navbar";
import { ProductSection } from "../home/components/product-section";
import { ProductData } from "../home/data/data";

export const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null); 

  useEffect(() => {
    window.scrollTo({ top: 50 });
    const foundProduct = ProductData.find((item) => item.id === +id);

    setProduct(foundProduct || null); 
  }, [id]);
  return (
    <>
      <ProductDitail data={product} />
      <ProductNavbar />
      <div>
        <Outlet />
      </div>
      <div className="pb-[150px]">
        <ProductSection title={"YOU MIGHT ALSO LIKE"} />
      </div>
    </>
  );
};
