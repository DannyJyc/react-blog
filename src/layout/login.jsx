import React, { useState } from "react";
import { Button, Modal } from "antd";
import { LoginOutlined } from "@ant-design/icons";

const RightTopLoginBtn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal
        title="登 录"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="登 录"
        cancelText="取 消"
        key="0"
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      <Button
        type="text"
        icon={<LoginOutlined />}
        className="btn_login"
        onClick={showModal}
        key="1"
      >
        登 录
      </Button>
    </>
  );
};
export default RightTopLoginBtn;
