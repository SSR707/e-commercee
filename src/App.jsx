import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { Home } from "./pages/home/home";
import { ProductPage } from "./pages/product-diteil/ProductPage";
import { ProductDitailSub } from "./pages/product-diteil/components/product-ditail-sub";
import { ReatingRewins } from "./pages/product-diteil/components/reating-rewins";
import { Faq } from "./pages/product-diteil/components/faq";
import { CartPage } from "./pages/cart/CartPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />

          <Route path="product/:id" element={<ProductPage />}>
            <Route index element={<ReatingRewins />} />
            <Route path="product-details" element={<ProductDitailSub />} />
            <Route path="faq" element={<Faq />} />
          </Route>
          <Route path="cart" element={<CartPage />} />

          <Route
            path="*"
            element={
              <div className="container">
                <h1 className=" text-4xl text-center">Not Found</h1>
              </div>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
