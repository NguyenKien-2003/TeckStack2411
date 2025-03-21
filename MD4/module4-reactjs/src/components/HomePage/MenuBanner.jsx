import { Col, Row } from "antd";
import React from "react";
import menuBanner1 from "../../assets/img/menu-banner-1.jpg";
import menuBanner2 from "../../assets/img/menu-banner-2.jpg";

import { Link } from "react-router-dom";

const MenuBanner = () => {
  return (
    <div className="bg-gray-100 py-2">
      <div className="mx-30 my-20 h-[580px]">
        <Row gutter={30}>
          <Col className="gutter-row text-white" span={8}>
            <div className="flex flex-col">
              <div className="bg-neutral-800 text-2xl h-[320px] relative p-5 flex flex-col items-center ">
                <h1 className="absolute top-12 text-3xl">DỊCH VỤ</h1>
                <h1 className="absolute top-28 left-8">TIỆC TẠI GIA</h1>
                <h1 className="absolute top-28 right-8">TIỆC CƯỚI HỎI</h1>
                <h1 className="absolute top-44 left-8">TIỆC BUFFET</h1>
                <h1 className="absolute top-44 right-10">TIỆC SỰ KIỆN</h1>
                <h1 className="absolute bottom-12">TIỆC TEA BREAK</h1>
              </div>
              <div className="bg-red-300 flex flex-col gap-2 py-16 items-center text-xl mt-8">
                <h1 className="text-3xl">LIÊN HỆ</h1>
                <p>
                  <strong>Address: </strong> abc@cmcglobal.vn
                </p>
                <p>
                  <strong>Hotline:</strong> 0919319071
                </p>
              </div>
              <div></div>
            </div>
          </Col>
          <Col className="gutter-row" span={8}>
            <div
              className="relative w-full h-full bg-cover bg-center bg-no-repeat hover:bg-[length:300%] transition-all duration-800 "
              style={{ backgroundImage: `url(${menuBanner1})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity"></div>

              <div className="relative z-10 text-white text-center p-20">
                <h1 className="text-4xl font-normal mb-4">SET MENU</h1>
                <Link to="/menu" style={{ color: "white" }} className="text-m">
                  Xem chi tiết
                </Link>
              </div>
            </div>
          </Col>
          <Col className="gutter-row" span={8}>
            <div
              className="relative w-full h-full bg-cover bg-center bg-no-repeat hover:bg-[length:300%] transition-all duration-800 "
              style={{ backgroundImage: `url(${menuBanner2})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity"></div>

              <div className="relative z-10 text-white text-center pt-20">
                <h1 className="text-4xl font-normal mb-4">MENU TỰ CHỌN</h1>
                <Link to="/menu" style={{ color: "white" }} className="text-m">
                  Xem chi tiết
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default MenuBanner;
