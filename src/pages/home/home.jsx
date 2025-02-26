import { Brands } from "./components/brads";
import { Browse } from "./components/browse";
import { Customers } from "./components/custumers";
import { Hero } from "./components/hero";
import { ProductSection } from "./components/product-section";

export const Home = () => {
  return (
    <>
      <section className="pt-[40px] bg-silver-gray xl:pt-[20px]">
        <Hero />
      </section>
      <section className=" bg-primary py-[33px]">
        <Brands />
      </section>
      <section className="pt-[50px] xl:pt-[72px]">
        <ProductSection title={"NEW ARRIVALS"} isChek={true} />
      </section>
      <section className="pt-[40px] xl:pt-[64px] ">
        <ProductSection title={"TOP SELLING"} />
      </section>
      <section>
        <Browse />
      </section>
      <section className="pt-[50px] xl:pt-[80px] pb-[100px]">
        <Customers />
      </section>
    </>
  );
};
