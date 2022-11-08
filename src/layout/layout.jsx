import { Layout, BackTop, Avatar, Card, Divider } from "antd";
import {
  RocketTwoTone,
  TagsOutlined,
  FireOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import React, { useState } from "react";
const { Header, Content, Footer } = Layout;
const { Meta } = Card;
import Tags from "@/page/content/tags.jsx";
import Hots from "@/page/content/hots.jsx";
import Login from "./login.jsx";
import AccountMenu from "./account.jsx";
import "./layout.less";

const LoginedStatus = () => {
  const count = useSelector((state) => state.counter.value);
  if (count > 0) {
    return <AccountMenu/>
  } else {
    return <Login/>
  }
};

function layout() {
  const navigate = useNavigate();
  return (
    <Layout>
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
          <LoginedStatus></LoginedStatus>
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
