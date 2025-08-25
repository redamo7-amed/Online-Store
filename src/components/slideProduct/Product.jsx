import React from "react";
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import { FaCartArrowDown, FaRegHeart, FaShare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Product = ({ item }) => {
  console.log(item);
  return (
    <>
      <div className="product ">
        <Link to={`/products/${item.id}`}>
          <div className="img-product relative h-[180px] py-0 px-5 mb-[30px] flex items-center justify-center">
            <img className="" src={item.images[0]} alt="" />
          </div>
          <p className="name-product ">{item.title}</p>

          <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStarHalfStroke />
          </div>
          <p className="price">
            <span>$ {item.price}</span>
          </p>
          <div className="icons">
            <span>
              <FaCartArrowDown />
            </span>
            <span>
              <FaRegHeart />
            </span>
            <span>
              <FaShare />
            </span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Product;
