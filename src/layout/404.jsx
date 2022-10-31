import { Button, Result } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  return (
    <Result
      status="404"
      title="404"
      subTitle="抱歉，您访问的页面好像不存在。"
      extra={
        <Button type="primary" onClick={() => {
            navigate("");
        }}>
          返 回
        </Button>
      }
    />
  );
};
export default App;
