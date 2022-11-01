import React from "react";
import { CommentOutlined, EyeOutlined } from "@ant-design/icons";
import HotsListStyle from "@/static/style/content/hots.module.less";

const Hot = (props) => {
  return (
    <div className={HotsListStyle.hots_box}>
      <p className={HotsListStyle.hot_title}>{props.hot.title}</p>
      <p className={HotsListStyle.hot_icon}>
        {props.hot.commentnul}&nbsp;&nbsp;:&nbsp;&nbsp;
        <CommentOutlined />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.hot.watchnum}&nbsp;&nbsp;:&nbsp;&nbsp;
        <EyeOutlined />
      </p>
    </div>
  );
};

class Hots extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hots: [
        { id: 1, title: "标题1标题1标题1标题1标题1标题1标题1", watchnum: 10, commentnul: 2 },
        { id: 2, title: "标题2标题2标题2标题2标题2标题2", watchnum: 1009, commentnul: 6 },
        { id: 3, title: "标题3标题3标题3标题3标题3标题3", watchnum: 103, commentnul: 8 },
      ],
    };
  }
  render() {
    const hotstemp = [];
    for (let i = 0; i < this.state.hots.length; i++) {
      hotstemp.push(
        <Hot key={this.state.hots[i].id} hot={this.state.hots[i]} />
      );
    }
    return <>{hotstemp}</>;
  }
}

export default Hots;
