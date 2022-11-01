import React from "react";
import { Tag } from "antd";
import { TagOutlined } from "@ant-design/icons";
// import TagsListStyle from "@/static/style/content/tags.module.less";

const BTag = (props) => {
  return (
    <>
      <Tag icon={<TagOutlined />} color={props.tag.color}>
        {props.tag.name}
      </Tag>
    </>
  );
};

class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [
        {
          id: 1,
          name: "Tag1",
          color: "#55acee",
        },
        {
          id: 2,
          name: "Tag2",
          color: "#2db7f5",
        },
        {
          id: 3,
          name: "Tag3",
          color: "#87d068",
        },
      ],
    };
  }
  render() {
    const tagtemp = [];
    for (let i = 0; i < this.state.tags.length; i++) {
      tagtemp.push(
        <BTag key={this.state.tags[i].id} tag={this.state.tags[i]} />
      );
    }
    return <div style={{ margin: "0px 12px" }}>{tagtemp}</div>;
  }
}

export default Tags;
