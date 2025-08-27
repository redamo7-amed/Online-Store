import React from "react";
import { useContext } from "react";
import { CartContext } from "../../components/Context/CartContext";
import { FaTrashAlt } from "react-icons/fa";
import "./Cart.css"

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <div className="checkout my-[50px] mx-0">
      <div className="order-summary w-[45%] py-0 px-[20px] border-[1px] border-solid border-bord shadow-[0px_8px_10px_#c0bfbf44] rounded-[5px] my-0 mx-auto">
        <h1 className="border-b-[1px] border-solid border-bord py-[20px] px-0 mb-5 text-main">Order Summary</h1>


        <div className="items h-[350px] overflow-y-auto">
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="item-cart flex items-center justify-between gap-5 h-[125px] border-b-[1px] border-solid border-bord pr-5 ">
                <div  className="img-name flex items-center gap-5">

                    <div className="img-item w-[100px] flex justify-center items-center"><img className="h-[80px] w-auto" src={item.images[0]} alt="" /></div>
                  <div className="content">
                    <h4 className="name-of-item mb-[15px] font-medium text-[14px] overflow-hidden text-ellipsis ">{item.title}</h4>
                    <p className="price-item">{item.price}</p>
                    <div className="quantity-control flex items-center gap-[5px] mt-[5px] ">

                      <button className="w-[27px] h-[27px] flex items-center justify-center cursor-pointer text-5 rounded-[2px] border-[1px] border-solid border-bord">+</button>
                      <span className="quantity text-[18px] min-w-[40px] flex items-center justify-center bg-bg rounded-[2px]">1</span>
                      <button className="w-[27px] h-[27px] flex items-center justify-center cursor-pointer text-5 rounded-[2px] border-[1px] border-solid border-bord">-</button>
                    </div>
                  </div>
                </div>
                  <button className="delete-item outline-none border-none bg-transparent">
                    <  FaTrashAlt className="text-[20px] cursor-pointer fill-[#e51a1a] duration-300 hover:scale-[1.2]" />
                  </button>
              </div>
            ))
          )}
        </div>

        <div className="bottom-summary border-t-[1px] border-solid border-bord pt-[25px]">
          <div className="shop-table flex justify-between items-center mb-5">
            <p className="text-[20px] text-heading capitalize">Total: </p>

            <span className="total-checkout text-[20px] font-bold">{totalPrice}</span>
          </div>
          <div className="button-div border-t-[1px] border-solid border-bord py-[30px] px-0">
            <button className="w-full bg-main text-whitee border-[2px] border-solid border-main py-[15px] px-0 outline-none rounded-[2px] text-[20px] cursor-pointer duration-300 hover:bg-transparent hover:text-main" type="submit">Place Order</button>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
