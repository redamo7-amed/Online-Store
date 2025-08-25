import React, { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { PiSignInBold } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa";

const navLink = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Accessories", link: "/accessories" },
  { title: "Blog", link: "/blog" },
  { title: "Contact", link: "/contact" },
];

function BtmHeader() {
  const location = useLocation();
  const [categories, setCategories] = useState([]);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories").then((res) =>
      res.json().then((data) => setCategories(data))
    );
  }, []);

  return (
    <div className="btm-header bg-main   ">
      <div className="container flex items-center justify-between ">
        <nav className="flex items-center gap-[55px] ">
          <div
            className="category_nav w-[200px] h-full relative"
            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
          >
            <div className="category_btn h-full w-full flex items-center justify-between bg-main px-0 py-[15px] cursor-pointer  ">
              <IoMdMenu className="fill-whitee" />
              <p className="text-whitee font-semibold text-[15px]">
                Browse Category
              </p>
              <IoMdArrowDropdown className="fill-whitee" />
            </div>
            <div
              className={`${
                isCategoryOpen
                  ? "[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]"
                  : ""
              }  category_nav_list absolute top-full left-0 w-full bg-whitee border-[1px] border-solid border-bg-[#999]x   border-t-0 flex flex-col max-h-[400px] overflow-y-auto [clip-path:polygon(0_0,100%_0,100%_0,0_0)] duration-300 z-10  `}
            >
              {categories.map((category, index) => (
                <Link
                  to={category.slug}
                  key={index}
                  className="px-[14px] py-[10px] border-b-[1px] border-solid border-bord text-[14px] last:border-b-0"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="nav_links flex ">
            {navLink.map((items, index) => (
              <li
              key={index}
                className={`${   
                  location.pathname === items.link ? "bg-[#0079ca]" : ""
                } h-[50px] flex items-center py-0 px-[25px]`}
              >
                {" "}
                <Link className="text-whitee" to={items.link} key={index}>
                  {items.title}{" "}
                </Link>
              </li>
            ))}
          </div>
        </nav>
        <div className="sign-regs-icon flex gap-[20px] text-[22px]  ">
          <Link to="/">
            <PiSignInBold className="fill-whitee " />
          </Link>
          <Link to="/">
            <FaUserPlus className="fill-whitee " />
          </Link>
        </div>
      </div>
    </div>
  );
}                                                             
export default BtmHeader;
