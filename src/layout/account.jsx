import { Dropdown, Menu, Space, Button } from "antd";
import {
  DownOutlined,
  UserOutlined,
  CodeOutlined,
  HighlightOutlined,
} from "@ant-design/icons";
const LoginedDropDown = () => {
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <Button type="text" icon={<UserOutlined />}>
              关 于 我 的
            </Button>
          ),
        },
        {
          type: "divider",
        },
        {
          key: "2",
          label: (
            <Button type="text" icon={<CodeOutlined />}>
              我 的 文 章
            </Button>
          ),
        },
        {
          type: "divider",
        },
        {
          key: "3",
          label: (
            <Button type="text" icon={<HighlightOutlined />}>
              写 文 章
            </Button>
          ),
        },
      ]}
    />
  );
  return (
    <Dropdown overlay={menu} key="1">
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          我 的
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

export default LoginedDropDown;
