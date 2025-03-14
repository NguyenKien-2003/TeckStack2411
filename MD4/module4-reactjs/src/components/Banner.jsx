import React, { useState, useEffect } from "react";

const images = [
  "https://media.istockphoto.com/id/1457923932/vi/anh/t%C3%B3c-v%C3%A0-b%C3%A0n-cho-kh%C3%A1ch-%C4%91%C6%B0%E1%BB%A3c-trang-tr%C3%AD-b%E1%BA%B1ng-n%E1%BA%BFn-%C4%91%C6%B0%E1%BB%A3c-ph%E1%BB%A5c-v%E1%BB%A5-v%E1%BB%9Bi-dao-k%C3%A9o-v%C3%A0-%C4%91%E1%BB%93-s%C3%A0nh-s%E1%BB%A9.jpg?s=612x612&w=0&k=20&c=0ZAxJynLLLfw2yig5PkZlNsNFFWyS6SxDCJB4BuOhCE=",
  "https://png.pngtree.com/background/20231026/original/pngtree-wedding-table-tableware-many-restaurant-photo-picture-image_5726273.jpg",
  "https://png.pngtree.com/thumb_back/fh260/background/20240211/pngtree-savoring-tradition-st-patrick-s-day-and-the-hearty-irish-feast-image_15625504.jpg"
];

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
        <h1 className="text-[40px] font-semibold drop-shadow-lg p-1">ƯU ĐÃI LÊN TỚI 30% </h1>
        <h1 className="text-[40px] font-semibold drop-shadow-lg">KHI ĐẶT SET MENU SUM VẦY</h1>
        <p className="text-[14px] mt-2 drop-shadow-md">Áp dụng cho tiệc tại Hà Nội, từ 1/1 - 12/3/2025</p>
        <button className="mt-10 px-7 py-5 bg-red-500 hover:bg-red-600 text-white text-[14px] font-normal transition">
          XEM CHI TIẾT ƯU ĐÃI
        </button>
      </div>
    </div>
  );
};

export default Banner;
