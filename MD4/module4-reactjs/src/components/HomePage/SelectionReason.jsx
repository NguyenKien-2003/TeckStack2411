import "../../../src/App.css";
import { Col, Row } from "antd";
import React from "react";
import reason1 from "../../assets/img/selection_reason_1.jpg";
import reason2 from "../../assets/img/selection_reason_2.jpg";
import reason3 from "../../assets/img/selection_reason_3.jpg";
import reason4 from "../../assets/img/selection_reason_4.jpg";

const SelectionReason = () => {
  const style = {
    padding: "8px 0",
  };
  return (
    <div className="mx-30 my-10">
      <h1 className="text-4xl font-semibold flex items-center justify-around mt-16 mb-12">
        VÌ SAO LỰA CHỌN CHÚNG TÔI ?
      </h1>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col className="gutter-row" span={6}>
          <div
            style={style}
            className="home-card flex flex-col items-center text-center"
          >
            <img src={reason1} alt="reason1" />
            <h1 className="mt-4 text-base font-semibold">
              SỰ LỰA CHỌN ẨM THỰC SỐ 1
            </h1>
            <p className="px-4">
              Thuộc Golden Gate Group - 15 năm kinh nghiệm, hơn 400 nhà hàng
              toàn quốc
            </p>
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div
            style={style}
            className="home-card flex flex-col items-center text-center"
          >
            <img src={reason2} alt="reason1" />
            <h1 className="mt-4 text-base font-semibold">
            THỰC PHẨM AN TOÀN
            </h1>
            <p className="px-4">
            Đảo bảm an toàn vệ sinh thực phẩm từ nguồn cung cấp đén khâu chế biến
            </p>
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div
            style={style}
            className="home-card flex flex-col items-center text-center"
          >
            <img src={reason3} alt="reason1" />
            <h1 className="mt-4 text-base font-semibold">
            THỰC ĐƠN ĐA DẠNG
            </h1>
            <p className="px-4">
            Menu phong phú, kết hợp tinh hoa ẩm thực Á - Âu, đa dạng lựa chọn
            </p>
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div
            style={style}
            className="home-card flex flex-col items-center text-center"
          >
            <img src={reason4} alt="reason1" />
            <h1 className="mt-4 text-base font-semibold">
            PHỤC VỤ CHUYÊN NGHIỆP
            </h1>
            <p className="px-4">
            Tư vấn tận tâm, phục vụ chu đáo, dịch vụ linh hoạt, thanh toán tiện lợi
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SelectionReason;
