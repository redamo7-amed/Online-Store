import React from "react";
import Logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { useContext } from "react";
import { CartContext } from "../../components/Context/CartContext";


function TopHeader() {

  const {cartItems} = useContext(CartContext);


  return (
    <>
      <div className="top-header ">
        <div className="container flex items-center justify-between  py-[15px]">
          <Link className="logo w-[160px] " to="/">
            <img src={Logo} alt="logo" />
          </Link>
          <form
            action=""
            className="search_box  w-[500px] flex items-center bg-bg rounded-[30px] border-[1px] border-solid border-main"
          >
            <input
              className="h-[45px] w-[440px] px-[5px] pr-[15px] pl-5 bg-bg rounded-[30px]"
              type="text"
              name="search"
              id="search"
              placeholder="Search for products"
            />
            <button
              type="submit"
              className="search_btn h-[45px] w-[60px] bg-main text-whitee font-[18px] cursor-pointer rounded-tr-[30px] flex justify-center items-center rounded-br-[30px]"
            >
              <FaSearch />
            </button>
          </form>
          <div className="header_icons flex items-center justify-center gap-[30px]">
            <div className="icon relative cursor-pointer ">
              <FaRegHeart className="text-[30px]" />
              <span className="count absolute top-[-5px] right-[-10px] bg-main text-whitee text-[12px] w-[20px] h-[20px] rounded-full flex justify-center items-center">
                0
              </span>
            </div>
            <div className="icon relative cursor-pointer ">
              <TiShoppingCart className="text-[30px]" />
              <span className="count absolute top-[-5px] right-[-10px] bg-main text-whitee text-[12px] w-[20px] h-[20px] rounded-full flex justify-center items-center">
                {cartItems.length}

              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopHeader;
