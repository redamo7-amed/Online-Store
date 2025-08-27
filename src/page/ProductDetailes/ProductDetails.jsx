import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import { FaRegHeart, FaShare } from "react-icons/fa";
import SlideProduct  from "../../components/slideProduct/SlideProduct";
import Loader from "../../components/LoaderPage/Loader";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedProducts,setRelatedProducts]=useState([])
  const [loadingRelated,setLoadingRelated]=useState(true)



  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [id]);
  

  useEffect(()=>{
    if(!product)return
    fetch(`https://dummyjson.com/products/category/${product.category}`)
    .then(res=>res.json())
    .then(data=>{
      setRelatedProducts(data.products)
    })
    .catch((error)=>console.log(error))
    .finally(()=>setLoadingRelated(false))

  },[product?.category])


  if (loading) return <Loader/>;
  if (!product) return <p>Product not found</p>;

  return (
    <div>
      <div className="py-[50px] px-0">
      <div className="container flex justify-between items-center">
        <div className="imgs-item w-[40%]">
          <div className="big-items flex justify-center items-center ">
            <img id="big-img" className="h-[450px] w-auto mb-3" src={product.images[0]} alt={product.title} />

          </div>
          <div className="sm-items  flex justify-between items-center  cursor-pointer">
            {product.images.map((img, index) => (
              <div key={index} className="w-[24%] flex justify-center items-center">

                <img
                  className="w-auto max-h-[150px] object-cover"

                  key={index}
                  src={img}
                  alt={product.title}
                  onClick={()=>{
                    document.getElementById("big-img").src=img
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="details-item w-[58%]">
          <h1 className="name mb-[30px] text-main ">{product.title}</h1>
          <div className="stars flex gap-[5px] py-[15px] px-0 ">
            <FaStar className=" fill-[#f8d941] text-[20px]" />
            <FaStar className=" fill-[#f8d941] text-[20px]" />
            <FaStar className=" fill-[#f8d941] text-[20px]" />
            <FaStar className=" fill-[#f8d941] text-[20px]" />
            <FaRegStarHalfStroke className=" fill-[#f8d941] text-[20px]" />
          </div>
          <p className="price text-[22px] my-[20px] mx-0">$ {product.price}</p>
          <h5 className="font-medium mb-5 text-[16px]">
            Availability: <span>{product.availabilityStatus}</span>
          </h5>
          <h5 className="font-medium mb-5 text-[16px]">
            Brand: <span>{product.brand}</span>
          </h5>
          <p className="leading-6 mb-5">{product.description}</p>
          <h5 className="text-[20px] text-main ">
            Hurry Up Only {product.stock} products left in stock.
          </h5>
          <button className="btn text-[16px]  py-[10px] text-whitee px-[15px] mt-3">
            Add To Cart <TiShoppingCart className="text-[20px]" />
          </button>
          <div className="icons flex gap-2 duration-300 my-5 mx-0">
            <span className="w-10 h-10 bg-bg flex justify-center items-center rounded-full cursor-pointer duration-300 hover:bg-main  ">
              <FaRegHeart className="hover:fill-whitee duration-300"/>
            </span>
            <span className="w-10 h-10 bg-bg flex justify-center items-center rounded-full cursor-pointer duration-300 hover:bg-main ">

              <FaShare className="hover:fill-whitee duration-300"/>
            </span>
          </div>
        </div>
      </div>
    </div>

    {loadingRelated?<p>Loading....</p>:<SlideProduct key={product.category} data={relatedProducts} title={product.category.replace("-"," ")} />}

    </div>
  );
};

export default ProductDetails;
