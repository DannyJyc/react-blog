import { LoadingOutlined } from "@ant-design/icons";
import pageLoadStyle from "./pageload.module.less";
const PageLoad = () => {
  return (
    <div
      className={pageLoadStyle.layout_page_load_box}
      style={{ height: document.documentElement.clientHeight }}
    >
      <LoadingOutlined />
      <span>加载中</span>
    </div>
  );
};
export default PageLoad;
