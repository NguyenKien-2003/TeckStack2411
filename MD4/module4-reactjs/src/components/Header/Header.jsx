import React from "react";
import { Search, ShoppingCart, User } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import SearchBox from "./SearchBox";

const Header = () => {
  return (
    <>
      <header className="sticky top-0 bg-white border-b-1 px-30 z-50 ">
        <div className="flex justify-between items-center p-4 my-1.7">
          <nav className="hidden md:flex space-x-12">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-black font-bold mt-3 text-[14px] ${
                  isActive ? "text-red-500 border-b-1 border-red-500" : ""
                }`
              }
            >
              Trang chủ
            </NavLink>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                `text-black font-bold mt-3 text-[14px] ${
                  isActive ? "text-red-500 border-b-1 border-red-500" : ""
                }`
              }
            >
              Thực đơn
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-black font-bold mt-3 text-[14px] ${
                  isActive ? "text-red-500 border-b-1 border-red-500" : ""
                }`
              }
            >
              Về chúng tôi
            </NavLink>
            <NavLink
              to="/news"
              className={({ isActive }) =>
                `text-black font-bold mt-3 text-[14px] ${
                  isActive ? "text-red-500 border-b-1 border-red-500" : ""
                }`
              }
            >
              Tin tức
            </NavLink>
            <Link
              to="/booking-form"
              className="text-white font-bold bg-yellow-700 p-2 mt-1 px-5 text-[14px]"
            >
              Đặt tiệc ngay
            </Link>
          </nav>
          <div className="flex items-center">
            <SearchBox />
            <div className="flex py-2 ml-10 items-center">
              <User className="h-6 w-6 text-black-500 mt-0.5 mr-0.5" />
              <p className="text-black text-xs">Tài khoản</p>
            </div>
            <div className="items-center ml-10">
              <ShoppingCart />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
