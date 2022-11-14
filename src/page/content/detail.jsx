import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Row } from "antd";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import purify from "dompurify";  

const ContentDetail = () => {
  const [value, setValue] = useState("");
  const params = useParams();
  return (
    <>
      <Row>
        <Col span={18} offset={3} className="">
          col-18 col-offset-3
          <ReactQuill theme="snow" value={value} onChange={setValue} />
        </Col>
      </Row>
      <Row>
        <Col span={18} offset={3} className="">
          <p>{params.id}</p>
          <div dangerouslySetInnerHTML={{ __html:purify.sanitize(value) }} /> 
        </Col>
      </Row>
    </>
  );
};

export default ContentDetail;
