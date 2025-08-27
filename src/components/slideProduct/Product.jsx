import React, { useContext } from "react";
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import { FaCartArrowDown, FaRegHeart, FaShare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../../components/Context/CartContext";
import { FaCheck } from "react-icons/fa";

const Product = ({ item }) => {
  const { cartItems, addToCart } = useContext(CartContext);

  console.log(cartItems);

  const isInCart = cartItems.some((i) => i.id === item.id);

  return (
    <>
      <div className={`product ${isInCart ? "added" : ""}`}>
        <Link to={`/products/${item.id}`}>
          <span className="status-cart">
            <FaCheck /> in cart
          </span>
          <div className="img-product relative h-[180px] py-0 px-5 mb-[30px] flex items-center justify-center">
            <img className="" src={item.images[0]} alt="" />
          </div>
        </Link>
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
          <span className="added-cart" onClick={() => addToCart(item)}>
            <FaCartArrowDown className="added-cart" />
          </span>
          <span>
            <FaRegHeart />
          </span>
          <span>
            <FaShare />
          </span>
        </div>
      </div>
    </>
  );
};

export default Product;
