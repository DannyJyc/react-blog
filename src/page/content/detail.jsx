import React from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const ContentDetail = () => {
  const params = useParams();
  return (
    <>
      <p>{params.id}</p>
      <ReactMarkdown># Hello, *world*!</ReactMarkdown>
    </>
  );
};

export default ContentDetail;
