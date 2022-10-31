import { Layout, Menu } from "antd";
import { useState } from "react";
import reactLogo from "@/assets/react.svg";
import Home from "@/components/Home";

const { Header, Content, Footer } = Layout;
import "@/static/style/index.css";

function index() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <Header
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
          background: "#3171AE",
        }}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={new Array(3).fill(null).map((_, index) => ({
            key: String(index + 1),
            label: `nav ${index + 1}`,
          }))}
          style={{ background: "#3171AE" }}
        />
      </Header>
      <Content
        style={{ paddingTop: 100, display: "flex", justifyContent: "center" }}
      >
        {/* 面包屑 */}
        {/* <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <div
          className="site-layout-background "
          style={{ padding: 24, minHeight: 380, width: "61.8%" }}
        >
          <div className="App site-layout" style={{ marginRight: 5, width: "61.8%" }}>
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
          <div className="Side_Guide site-layout" style={{ marginleft: 5, width: "38.2%" }}>123</div>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}
export default index;
