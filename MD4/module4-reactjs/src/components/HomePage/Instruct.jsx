import React from "react";
import {
  CreditCardFilled,
  EditFilled,
  ForwardFilled,
  PhoneFilled,
  SnippetsFilled,
  TruckFilled,
} from "@ant-design/icons";

const Instruct = () => {
  return (
    <div className="p-6 bg-white mx-auto text-center my-12">
      <h2 className="text-[40px] font-semibold mb-6">5 BƯỚC ĐỂ ĐẶT TIỆC</h2>
      <div className="flex gap-4 mx-28">
        <div className="flex flex-col items-center">
          <div className="w-[7.75rem] h-[7.75rem]  bg-gray-100 rounded-full">
            <SnippetsFilled className="text-[3rem] p-10 " />
            <div className="flex justify-center mt-[-24px]">
              <h1 className="w-[2.9rem] h-[2.9rem] p-4 bg-red-600 text-2xl text-white rounded-full flex items-center">
                1
              </h1>
            </div>
          </div>
          <div className="mt-10">
            <h1>TÌM HIỂU THÔNG TIN</h1>
            <p>Khách hàng tìm hiểu thông tin và đăng kí tư vấn</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative flex">
            <ForwardFilled className="absolute -left-10 top-1/3  text-[3rem] " />
            <div className="w-[7.75rem] h-[7.75rem]  bg-gray-100 rounded-full mx-10">
              <PhoneFilled className="text-[3rem] p-10 " />
              <div className="flex justify-center mt-[-24px]">
                <h1 className="w-[2.9rem] h-[2.9rem] p-4 bg-red-600 text-2xl text-white rounded-full flex items-center">
                  2
                </h1>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h1>LIÊN HỆ TƯ VẤN</h1>
            <p>Khách hàng tìm hiểu thông tin và đăng kí tư vấn</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative flex">
            <ForwardFilled className="absolute -left-10 top-1/3  text-[3rem] " />
            <div className="w-[7.75rem] h-[7.75rem]  bg-gray-100 rounded-full mx-10">
              <EditFilled className="text-[3rem] p-10 " />
              <div className="flex justify-center mt-[-24px]">
                <h1 className="w-[2.9rem] h-[2.9rem] p-4 bg-red-600 text-2xl text-white rounded-full flex items-center">
                  3
                </h1>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h1>KÝ KẾT HỢP ĐỒNG</h1>
            <p>Khách hàng tìm hiểu thông tin và đăng kí tư vấn</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative flex">
            <ForwardFilled className="absolute -left-10 top-1/3  text-[3rem] " />
            <div className="w-[7.75rem] h-[7.75rem]  bg-gray-100 rounded-full mx-10">
              <TruckFilled className="text-[3rem] p-10 " />
              <div className="flex justify-center mt-[-24px]">
                <h1 className="w-[2.9rem] h-[2.9rem] p-4 bg-red-600 text-2xl text-white rounded-full flex items-center">
                  4
                </h1>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h1>PHỤC VỤ TIỆC</h1>
            <p>Khách hàng tìm hiểu thông tin và đăng kí tư vấn</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative flex">
            <ForwardFilled className="absolute -left-10 top-1/3  text-[3rem] " />
            <div className="w-[7.75rem] h-[7.75rem]  bg-gray-100 rounded-full mx-10">
              <CreditCardFilled className="text-[3rem] p-10 " />
              <div className="flex justify-center mt-[-24px]">
                <h1 className="w-[2.9rem] h-[2.9rem] p-4 bg-red-600 text-2xl text-white rounded-full flex items-center">
                  5
                </h1>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h1>THANH TOÁN</h1>
            <p>Khách hàng tìm hiểu thông tin và đăng kí tư vấn</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instruct;
