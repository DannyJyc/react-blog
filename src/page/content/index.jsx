import { Image, Card } from "antd";
import React from "react";
const { useState } = React;

const ContentList = () => {
  const [random] = useState();

  return (
    <div className="content_list">
      <Card className="content_card">
        <div>我是标题我是标题我是标题我是标题</div>
        <div>
          <div>
            <Image
              width={100}
              src={`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${random}`}
              placeholder={
                <Image
                  preview={false}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                  width={100}
                />
              }
            />
          </div>
          <div>
            <div>
              <p>Card content</p>
            </div>
            <div>图标</div>
          </div>
        </div>
      </Card>
    </div>
  );
};
export default ContentList;
