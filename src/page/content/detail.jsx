import React from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Col, Row } from 'antd';

const ContentDetail = () => {
  const params = useParams();
  return (
    <Row>
      <Col span={18} offset={3} className="">
        col-18 col-offset-3
        <p>{params.id}</p>
        <ReactMarkdown># Hello, *world*!</ReactMarkdown>
      </Col>
    </Row>
  );
};

export default ContentDetail;
