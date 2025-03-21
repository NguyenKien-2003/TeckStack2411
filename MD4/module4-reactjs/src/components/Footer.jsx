import React from "react";
import { FacebookOutlined, LineOutlined, YoutubeOutlined } from "@ant-design/icons"
import momoLogo from "../assets/img/momo.svg";
import vnpayLogo from "../assets/img/vnpay.svg";
import zlpayLogo from "../assets/img/zalopay.svg";
import { Divider } from "antd";

const Footer = () => {
  return (
    <div
      className="relative w-full h-[400px] bg-cover bg-center justify-center text-white transition-all duration-1000 pt-10"
      style={{
        backgroundImage:
          "url('https://t4.ftcdn.net/jpg/02/50/95/91/240_F_250959105_KFS05K9HHels3cK6nZcID63s1sEjciGn.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity"></div>
      <div className="relative flex mx-30 justify-between">
        <div>
          <h1 className="font-semibold text-xl">Về chúng tôi</h1>
          <p className="font-light text-sm">Số điện thoại: 095.366.4722</p>
          <p className="font-light text-sm">
            Địa chỉ: số 33 Nhân Chính, Trung Hòa, Cầu Giấy, Hà Nội
          </p>
        </div>
        <div>
          <h1 className="font-semibold text-xl">Phương thức thanh toán</h1>
          <div className="flex space-x-4 mt-2">
            <img src={momoLogo} alt="MoMo" className="w-12 h-12" />
            <img src={vnpayLogo} alt="VNPAY" className="w-12 h-12 bg-white p-1 rounded-xl" />
            <img src={zlpayLogo} alt="ZALOPAY" className="w-12 h-12 bg-white p-1 rounded-xl" />
          </div>
        </div>
        <div>
          <h1 className="font-semibold text-xl">Truyền thống xã hội</h1>
          <div className="mt-2 flex space-x-2 font-semibold">
          <FacebookOutlined />
          <p>Facebook</p>
          </div>
          <div className="mt-2 flex space-x-2">
          <YoutubeOutlined />
          <p>Youtube</p>
          </div>
        </div>
        <div>
          <h1 className="font-semibold text-xl">Hỗ trợ khách hàng</h1>
          <h1 className="font-semibold text-sm">Liên hệ:</h1>
          <p className="font-light text-sm">Số điện thoại: 095.366.4722</p>
          <p className="font-light text-sm">Email: happy.@gmail.com</p>
          <p className="font-light text-sm">
            Địa chỉ: số 33 Nhân Chính, Trung Hòa, Cầu Giấy, Hà Nội
          </p>
        </div>
      </div>  
      <Divider className="border-white border-1" />


      <div className="relative mx-30 space-x-12 mt-10">
        <h1 className="font-semibold text-xl">Về chúng tôi</h1>
        <p className="font-light text-sm">Số điện thoại: 095.366.4722</p>
        <p className="font-light text-sm">
          Địa chỉ: số 33 Nhân Chính, Trung Hòa, Cầu Giấy, Hà Nội
        </p>
      </div>
    </div>
  );
};

export default Footer;
