import React, { useEffect, useState } from "react";
import { Button, DatePicker, InputNumber, Row, Col } from "antd";
import { UpOutlined, DownOutlined, CloseOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import bgOrder from "../../assets/img/bg-order.jpg";
import { Link } from "react-router-dom";

dayjs.extend(customParseFormat);

const displayDateFormat = "DD/MM";
const sentFormat = "YYYY-MM-DD"

const onChange = (value) => {
  console.log("changed", value);
};

const OrderDate = ({order,setOrder}) => {
  const [count, setCount] = useState(1);
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(
    dayjs("2024-03-09", "YYYY/MM/DD")
  );

  const increase = () => setCount((prev) => prev + 1);
  const decrease = () => setCount((prev) => (prev > 1 ? prev - 1 : 1));

  useEffect(() => {
    if (selectedDate) {
      setOrder({ date: selectedDate.format(sentFormat), tables: count });
    }
  }, [selectedDate, count, setOrder]);

  return (
    <div
      className="px-30 py-28 relative w-full h-[320px] bg-cover text-white space-x-1.5"
      style={{ backgroundImage: `url(${bgOrder})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity"></div>
      <Row>
        <Col span={6}>
          <div>
            <h1 className="font-semibold text-4xl">ĐẶT TIỆC Ở ĐÂY</h1>
            <p className="text-xm my-2">
              Đặt tiệc ngay hôm nay để những sự kiện quan
              <br /> trọng của bạn trở nên đơn giản và dễ dàng hơn <br /> bao
              giờ hết
            </p>
          </div>
        </Col>
        <Col span={6}>
          <div className="flex flex-col items-center">
            <h1 className="text-2xl">CHỌN NGÀY ĐẶT</h1>
            <DatePicker
              defaultValue={dayjs("2024-03-09", "YYYY-MM-DD")}
              value ={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              format={displayDateFormat}
              picker="date"
              className="custom-datepicker w-28"
              open={open}
              onOpenChange={(status) => setOpen(status)}
              suffixIcon={
                open ? (
                    <CloseOutlined
                        style={{ color: "white", fontSize: "18px", cursor: "pointer" }} 
                        onMouseDown={(e) => {
                            console.log("nhan click")
                            e.stopPropagation();  // Ngăn DatePicker mở lại ngay sau khi đóng
                            setOpen(false);
                        }}
                    />
                ) : (
                    <DownOutlined style={{ color: "white", fontSize: "18px" }} />
                )
              }
              allowClear={false}
            />
            <style>{`
                            /* Xóa nền của DatePicker */
                            .custom-datepicker {
                                border: none !important; 
                                box-shadow: none !important; 
                                background: none !important; 
                            }

                            /* Xóa nền của input bên trong DatePicker */
                            .custom-datepicker .ant-picker-input input {
                                font-size: 24px !important; 
                                outline: none !important; 
                                background: none !important;
                                border: none !important;
                                color: white !important; /* Đổi màu chữ thành trắng */
                            }

                            /* Xóa nền khi hover, focus hoặc active */
                            .custom-datepicker:hover,
                            .custom-datepicker:focus,
                            .custom-datepicker:active,
                            .custom-datepicker .ant-picker-input input:hover,
                            .custom-datepicker .ant-picker-input input:focus,
                            .custom-datepicker .ant-picker-input input:active {
                                background: none !important;
                            }
                            .custom-datepicker .ant-picker-clear {
                                display: none !important;
                            }

                            /* Xóa màu nền khi chọn ngày */
                            .custom-datepicker .ant-picker-dropdown {
                                background: none !important;
                            }
                                .custom-datepicker .ant-picker-suffix {
                                display: block !important;
                                color: white !important; /* Đảm bảo màu trắng luôn hiển thị */
                            }
                        `}</style>
          </div>
        </Col>
        <Col span={6}>
          <div className="flex flex-col items-center">
            <h1 className="text-2xl">SỐ BÀN TIỆC</h1>
            <div className="flex items-center gap-2">
              <input
                className="border-none text-center text-2xl w-12 bg-transparent outline-none focus:ring-0 focus:border-transparent"
                type="number"
                value={count}
                readOnly
              />
              <div className="flex flex-col">
                <button onClick={increase}>
                  <UpOutlined />
                </button>
                <button onClick={decrease}>
                  <DownOutlined />
                </button>
              </div>
            </div>
          </div>
        </Col>
        <Col span={6}>
          <div className="flex flex-col gap-2 ml-20">
            <Link to="/booking-form">
              <button className="w-full px-4  py-4 bg-yellow-700 text-white">
                ĐẶT TIỆC NGAY
              </button>
            </Link>
            <Link to="/menu">
              <button className=" w-full py-4 bg-none border border-white bg-transparent text-white">
                XEM THỰC ĐƠN
              </button>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default OrderDate;
