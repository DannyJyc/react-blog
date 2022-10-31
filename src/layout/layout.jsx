import { Layout, Menu, BackTop, Button } from "antd";
import { RocketTwoTone } from "@ant-design/icons";
import { Outlet, useNavigate } from "react-router-dom";

const { Header, Content, Footer } = Layout;
import "./layout.less";

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
        <div className="layout_components_demo_fixed_logo" />
        <Menu
          className="layout_base_background_color"
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={new Array(3).fill(null).map((_, index) => ({
            key: String(index + 1),
            label: `nav ${index + 1}`,
          }))}
        />
      </Header>
      <Content className="layout_content">
        {/* 面包屑 */}
        {/* <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <div className="layout_site_background">
          <div className="App">
            <Button
              type="primary"
              onClick={() => {
                navigate("/index");
              }}
            >
              Index
            </Button>
            <Button
              type="primary"
              onClick={() => {
                navigate("/home");
              }}
            >
              Home
            </Button>
            <Outlet />
          </div>
          <div className="Side_Guide">
            <div className="Side_Guide_top">123</div>
            <div className="Side_Guide_bottom">456</div>
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
