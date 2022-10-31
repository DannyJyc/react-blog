import { Layout, Menu, BackTop } from "antd";
import { RocketTwoTone } from "@ant-design/icons";
import { useState } from "react";
import reactLogo from "@/assets/react.svg";
import Home from "@/components/Home";

const { Header, Content, Footer } = Layout;
import "./layout.less";

function index() {
  const [count, setCount] = useState(0);

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
            <div>
              <a href="https://vitejs.dev" target="_blank">
                <img src="/vite.svg" className="logo" alt="Vite logo" />
              </a>
              <a href="https://reactjs.org" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
              </a>
            </div>
            <h1>Vite + React</h1>
            <Home></Home>
            <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
              </button>
              <p>
                Edit <code>src/App.jsx</code> and save to test HMR
              </p>
            </div>
            <p className="read-the-docs">
              Click on the Vite and React logos to learn more
            </p>
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
export default index;
