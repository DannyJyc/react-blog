import React from "react";
import { useSelector } from "react-redux";
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
const TagJoinMiddle = (props) => {
  const count = useSelector((state) => state.counter.value);
  const tagtemp = [];
//   tagtemp.push(<p key="0">{count}</p>);
  for (let i = 0; i < props.tags.length; i++) {
    tagtemp.push(<BTag key={props.tags[i].id} tag={props.tags[i]} />);
  }
  return <><div><p>{count}</p></div><div>{tagtemp}</div></>;
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
    return <TagJoinMiddle tags={this.state.tags} />;
  }
}

export default Tags;
