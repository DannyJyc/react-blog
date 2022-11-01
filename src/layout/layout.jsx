import { Layout, BackTop, Button, Avatar, Card, Divider, Modal } from "antd";
import {
  RocketTwoTone,
  TagsOutlined,
  FireOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import { Outlet, useNavigate } from "react-router-dom";
import React, { useState } from "react";
const { Header, Content, Footer } = Layout;
const { Meta } = Card;
import Tags from "@/page/content/tags.jsx";
import Hots from "@/page/content/hots.jsx";
import "./layout.less";

function layout() {
  const navigate = useNavigate();
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
    <Layout>
      <Modal
        title="登 录"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="登 录"
        cancelText="取 消"
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      <Header
        className="layout_base_background_color"
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
        }}
      >
        <div className="layout_components_demo_fixed_logo"></div>
        <div className="layout_components_demo_fixed_sign">
          <Button
            type="text"
            icon={<LoginOutlined />}
            className="btn_login"
            onClick={showModal}
          >
            登 录
          </Button>
        </div>
      </Header>
      <Content className="layout_content">
        {/* 面包屑 */}
        {/* <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <div className="layout_site_background">
          <Card
            className="Card layout_base_shadow"
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
          >
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title="Card title"
              description="This is the description"
            />
          </Card>
          <div className="App layout_base_shadow">
            <Outlet />
          </div>
          <div className="Side_Guide">
            <div className="Side_Guide_top layout_base_shadow">
              <Divider orientation="left" plain>
                <TagsOutlined />
                Tags
              </Divider>
              <Tags />
            </div>
            <div className="Side_Guide_bottom layout_base_shadow">
              <Divider orientation="left" plain>
                <FireOutlined />
                Hot
              </Divider>
              <Hots />
            </div>
          </div>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
      <BackTop>
        <div className="backup">
          <RocketTwoTone />
        </div>
      </BackTop>
    </Layout>
  );
}
export default layout;
