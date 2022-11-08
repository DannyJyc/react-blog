import { Image, Card, Divider, Pagination, Button } from "antd";
import {
  CommentOutlined,
  EyeOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "@/store/counterslice";
import { getCookie } from "@/cookie";
import ContentListStyle from "@/static/style/content/index.module.less";
const { useState } = React;

const itemRender = (_, type, originalElement) => {
  if (type === "prev") {
    return (
      <Button
        type="text"
        icon={<LeftOutlined />}
        size="small"
        style={{ color: "#001529" }}
      >
        上一页
      </Button>
    );
  }
  if (type === "next") {
    return (
      <Button
        type="text"
        icon={<RightOutlined />}
        size="small"
        style={{ color: "#001529" }}
      >
        下一页
      </Button>
    );
  }
  return originalElement;
};
const ContentList = () => {
  const [random] = useState();
  const dispatch = useDispatch();
  let count = useSelector((state) => state.counter.value);
  if (count == 0) {
    console.log("cookie value",getCookie("counter"));
    () => {
      dispatch(incrementByAmount(getCookie("counter")));
    };
    // count = useSelector((state) => state.counter.value);
  }
  return (
    <div>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <Card bodyStyle={{ padding: "12px 24px" }}>
        <p className={ContentListStyle.content_title}>
          我是标题我是标题我是标题我是标题我
        </p>
        <div className={ContentListStyle.content_details}>
          <div>
            <Image
              width={100}
              height={100}
              src={`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${random}`}
              placeholder={
                <Image
                  preview={false}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                  width={100}
                  height={100}
                />
              }
            />
          </div>
          <div className={ContentListStyle.content_detail}>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                nonne merninisti licere mihi ista probare, quae sunt a te dicta?
                Refert tamen, quo modo.
              </p>
            </div>
            <p className={ContentListStyle.content_detail__icon}>
              12&nbsp;&nbsp;:&nbsp;&nbsp;
              <CommentOutlined />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1202&nbsp;&nbsp;:&nbsp;&nbsp;
              <EyeOutlined />
            </p>
          </div>
        </div>
        <p>2022-11-1 11:53:55</p>
      </Card>
      <Divider style={{ margin: "12px 0" }} />
      <Pagination
        simple
        defaultCurrent={6}
        total={500}
        itemRender={itemRender}
      />
    </div>
  );
};
export default ContentList;
