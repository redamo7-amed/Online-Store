import React, { useEffect, useState } from "react";
import HeroSlider from "../../components/HeroSlider";
import "./Home.css";
import SlideProduct from "../../components/slideProduct/SlideProduct";
import Loader from "../../components/LoaderPage/Loader";

const categories = [
  "smartphones",
  "mobile-accessories",
  "laptops",
  "tablets",
  "sunglasses",
  "sports-accessories",
];

const Home = () => {
  const [products, setproduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const results = await Promise.all(
          categories.map(async (category) => {
            const res = await fetch(
              `https://dummyjson.com/products/category/${category}`
            );
            const data = await res.json();
            return { [category]: data.products };
          })
        );
        const productsData = Object.assign({}, ...results);
        setproduct(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }finally{
        setLoading(false);
      }

    };
    fetchProducts()
  }, []);

  return (
    <>
      <HeroSlider />

      {loading?(
        <Loader/>
      ):(
categories.map((category)=>(

      <SlideProduct data ={products[category]} title={category.replace("-"," ")} key={category}/>

      ))
      )}

      
    </>
  );
};

export default Home;
