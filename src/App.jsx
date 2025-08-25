import BtmHeader from "./components/Header/BtmHeader";
import TopHeader from "./components/Header/TopHeader";
import Home from "./page/Home/Home";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./page/ProductDetailes/ProductDetails";

function App() {
  return (
    <>
      <header>
        <TopHeader />
        <BtmHeader />
      </header>
     

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;
