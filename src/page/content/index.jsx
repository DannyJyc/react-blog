import { Image, Card, Divider, Pagination, Button } from "antd";
import {
  CommentOutlined,
  EyeOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { decrement, increment, setToken } from "@/store/tokenslice";
import { getCookie } from "@/cookie";
import { getAll } from "@/api/blog.js";
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
const ItemsMoudle = (props) => {
  const navigate = useNavigate();
  const { data } = props;
  return (
    <>
      <Card className={ContentListStyle.antd_card__patch}>
        <p
          className={ContentListStyle.content_title}
          onClick={() => {
            navigate("/detail");
          }}
        >
          {data.b_Title}
        </p>
        <div className={ContentListStyle.content_details}>
          <div>
            <Image
              width={100}
              height={100}
              src={`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?1`}
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
    </>
  );
};
class Items extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentItems: [],
    };
  }

  componentDidMount() {
    getAll().then((res) => {
      console.log("数据获取", res);
      this.setState({ contentItems: res.data });
    });
  }

  render() {
    const { contentItems } = this.state;
    return (
      <>
        {contentItems.map((p) => (
          <ItemsMoudle data={p} key={p.id}></ItemsMoudle>
        ))}
      </>
    );
  }
}
const ContentList = () => {
  const dispatch = useDispatch();
  let token = useSelector((state) => state.token.value);
  if (token.length <= 0) {
    console.log("cookie value", getCookie("token"));
    () => {
      dispatch(setToken(getCookie("token")));
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
      <span>{token}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <Items />
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
