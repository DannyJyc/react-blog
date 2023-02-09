import {
  Dropdown,
  Menu,
  Space,
  Button,
  Drawer,
  Form,
  Input,
  message,
  Upload,
} from "antd";
const { Dragger } = Upload;
import {
  DownOutlined,
  UserOutlined,
  CodeOutlined,
  InboxOutlined,
  HighlightOutlined,
} from "@ant-design/icons";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import quillEmoji from "quill-emoji";
import "quill-emoji/dist/quill-emoji.css";
import { ImageDrop } from "quill-image-drop-module";
const { EmojiBlot, ShortNameEmoji, ToolbarEmoji, TextAreaEmoji } = quillEmoji;
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";
import { useState } from "react";

const uploadProps = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

Quill.register(
  {
    "formats/emoji": EmojiBlot,
    "modules/emoji-shortname": ShortNameEmoji,
    "modules/emoji-toolbar": ToolbarEmoji,
    "modules/emoji-textarea": TextAreaEmoji,
    // 'modules/ImageExtend': ImageExtend, //拖拽图片扩展组件
    "modules/ImageDrop": ImageDrop, //复制粘贴组件
  },
  true
);

const normFile = (e) => {
  console.log("Upload event:", e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const BlogFormDrawer = (props) => {
  const studyShow = () => {
    props.onOpen();
  };
  const studyClose = () => {
    props.onClose();
  };
  const modules = {
    toolbar: {
      container: [
        [{ size: ["small", false, "large", "huge"] }], //字体设置
        // [{ 'header': [1, 2, 3, 4, 5, 6, false] }], //标题字号，不能设置单个字大小
        ["bold", "italic", "underline", "strike"],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
        ],
        ["code-block"],
        ["link", "image"], // a链接和图片的显示
        [{ align: [] }],
        [
          {
            background: [
              "rgb(  0,   0,   0)",
              "rgb(230,   0,   0)",
              "rgb(255, 153,   0)",
              "rgb(255, 255,   0)",
              "rgb(  0, 138,   0)",
              "rgb(  0, 102, 204)",
              "rgb(153,  51, 255)",
              "rgb(255, 255, 255)",
              "rgb(250, 204, 204)",
              "rgb(255, 235, 204)",
              "rgb(255, 255, 204)",
              "rgb(204, 232, 204)",
              "rgb(204, 224, 245)",
              "rgb(235, 214, 255)",
              "rgb(187, 187, 187)",
              "rgb(240, 102, 102)",
              "rgb(255, 194, 102)",
              "rgb(255, 255, 102)",
              "rgb(102, 185, 102)",
              "rgb(102, 163, 224)",
              "rgb(194, 133, 255)",
              "rgb(136, 136, 136)",
              "rgb(161,   0,   0)",
              "rgb(178, 107,   0)",
              "rgb(178, 178,   0)",
              "rgb(  0,  97,   0)",
              "rgb(  0,  71, 178)",
              "rgb(107,  36, 178)",
              "rgb( 68,  68,  68)",
              "rgb( 92,   0,   0)",
              "rgb(102,  61,   0)",
              "rgb(102, 102,   0)",
              "rgb(  0,  55,   0)",
              "rgb(  0,  41, 102)",
              "rgb( 61,  20,  10)",
            ],
          },
        ],
        [
          {
            color: [
              "rgb(  0,   0,   0)",
              "rgb(230,   0,   0)",
              "rgb(255, 153,   0)",
              "rgb(255, 255,   0)",
              "rgb(  0, 138,   0)",
              "rgb(  0, 102, 204)",
              "rgb(153,  51, 255)",
              "rgb(255, 255, 255)",
              "rgb(250, 204, 204)",
              "rgb(255, 235, 204)",
              "rgb(255, 255, 204)",
              "rgb(204, 232, 204)",
              "rgb(204, 224, 245)",
              "rgb(235, 214, 255)",
              "rgb(187, 187, 187)",
              "rgb(240, 102, 102)",
              "rgb(255, 194, 102)",
              "rgb(255, 255, 102)",
              "rgb(102, 185, 102)",
              "rgb(102, 163, 224)",
              "rgb(194, 133, 255)",
              "rgb(136, 136, 136)",
              "rgb(161,   0,   0)",
              "rgb(178, 107,   0)",
              "rgb(178, 178,   0)",
              "rgb(  0,  97,   0)",
              "rgb(  0,  71, 178)",
              "rgb(107,  36, 178)",
              "rgb( 68,  68,  68)",
              "rgb( 92,   0,   0)",
              "rgb(102,  61,   0)",
              "rgb(102, 102,   0)",
              "rgb(  0,  55,   0)",
              "rgb(  0,  41, 102)",
              "rgb( 61,  20,  10)",
            ],
          },
        ],
        ["clean"], //清空
        ["emoji"], //emoji表情，设置了才能显示
      ],
      handlers: {
        // image: this.imageHandler.bind(this), //点击图片标志会调用的方法
      },
    },
    // ImageExtend: {
    //   loading: true,
    //   name: 'img',
    //   action: RES_URL + "connector?isRelativePath=true",
    //   response: res => FILE_URL + res.info.url
    // },
    ImageDrop: true,
    "emoji-toolbar": true, //是否展示出来
    "emoji-textarea": false, //我不需要emoji展示在文本框所以设置为false
    "emoji-shortname": true,
  };
  const [value, setValue] = useState({
    value: "",
    quillmodules: modules,
  });
  return (
    <Drawer
      title="Create a new account"
      width={720}
      onClose={studyClose}
      open={props.open}
      bodyStyle={{
        paddingBottom: 80,
      }}
      extra={
        <Space>
          <Button onClick={studyClose}>取 消</Button>
          <Button onClick={studyClose} type="primary">
            提 交
          </Button>
        </Space>
      }
    >
      <Form layout="vertical">
        <Form.Item
          label="标题"
          name="b_Title"
          rules={[
            {
              required: true,
              message: "请填写文章标题!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="上传"
          name="b_Images"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Dragger {...uploadProps}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibit from
              uploading company data or other band files
            </p>
          </Dragger>
        </Form.Item>
        <Form.Item label="正文" name="b_Content">
          <ReactQuill
            theme="snow"
            value={value.value}
            onChange={(content) => {
              setValue({ value: content, quillmodules: modules });
            }}
            modules={value.quillmodules}
          />
        </Form.Item>
      </Form>
    </Drawer>
  );
};
const LoginedDropDown = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const closeDrawer = () => {
    setOpen(false);
  };
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
            <Button
              type="text"
              icon={<HighlightOutlined />}
              onClick={showDrawer}
            >
              写 文 章
            </Button>
          ),
        },
      ]}
    />
  );
  return (
    <>
      <Dropdown overlay={menu} key="1">
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            我 的
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
      <BlogFormDrawer onOpen={showDrawer} onClose={closeDrawer} open={open} />
    </>
  );
};

export default LoginedDropDown;
