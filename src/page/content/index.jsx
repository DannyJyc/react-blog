import { Image, Card, Divider } from "antd";
import { CommentOutlined, EyeOutlined } from "@ant-design/icons";
import React from "react";
import ContentListStyle from "@/static/style/content/index.module.less";
const { useState } = React;

const ContentList = () => {
  const [random] = useState();

  return (
    <div>
      <Card>
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
              12:
              <CommentOutlined />
              &nbsp;&nbsp;&nbsp;&nbsp; 1202:
              <EyeOutlined />
            </p>
          </div>
        </div>
        <p>2022-11-1 11:53:55</p>
      </Card>
      <Divider />
    </div>
  );
};
export default ContentList;
