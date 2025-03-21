import { useState, useEffect } from "react";
import { Modal, Button } from "antd";
import modalSale from "../assets/img/modal-sale.jpg";

const ModalBanner = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    setIsModalVisible(true);
  }, []);

  // const handleOk = () => {
  //   setIsModalVisible(false);
  // };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Modal
      open={isModalVisible}
      // onOk={handleOk}
      onCancel={handleCancel}
      footer={[]}
      className=""
    >
      <div className="w-[680px] h-[320px] flex justify-center items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              `url('${modalSale}')`,
          }}
        ></div>
      </div>
    </Modal>
  );
};

export default ModalBanner;
