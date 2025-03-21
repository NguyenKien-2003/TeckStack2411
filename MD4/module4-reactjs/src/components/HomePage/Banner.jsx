import React, { useState, useEffect } from "react";
import "../../../src/App.css";
import Banner1 from "../../assets/img/banner1.jpg";
import Banner2 from "../../assets/img/banner2.jpg";
import Banner3 from "../../assets/img/banner3.jpg";

const images = [Banner1, Banner2, Banner3];

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full h-[600px] bg-cover bg-center flex items-center justify-center text-white transition-all duration-1000"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity"></div>
      <div className="relative text-center p-4">
        <h1 className="text-[40px] font-semibold drop-shadow-lg p-1">
          ƯU ĐÃI LÊN TỚI 30%{" "}
        </h1>
        <h1 className="text-[40px] font-semibold drop-shadow-lg">
          KHI ĐẶT SET MENU SUM VẦY
        </h1>
        <p className="text-[14px] mt-2 drop-shadow-md">
          Áp dụng cho tiệc tại Hà Nội, từ 1/1 - 12/3/2025
        </p>
        <button className="mt-10 px-7 py-5 bg-red-500 hover:bg-red-600 text-white text-[14px] font-normal transition">
          XEM CHI TIẾT ƯU ĐÃI
        </button>
      </div>
    </div>
  );
};

export default Banner;
