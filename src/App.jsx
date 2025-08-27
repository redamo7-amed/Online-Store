import BtmHeader from "./components/Header/BtmHeader";
import TopHeader from "./components/Header/TopHeader";
import Home from "./page/Home/Home";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./page/ProductDetailes/ProductDetails";
import Cart from "./page/Cart/Cart";

function App() {
  return (
    <>
      <header className="fixed  right-0 left-0 top-0 bg-whitee z-[10000]">
        <TopHeader className="" />
        <BtmHeader />
      </header>
     

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;
