import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { getPost } from "../../WebAPI";

const PostBlock = styled.div`
  width: 50%;
  margin: 0 auto;
  display: block;
  box-shadow: 0px 5px 8px black;
  border-top: solid 2px black;
  padding: 20px;
`;

const PostBlockTitle = styled.div`
  font-size: 60px;
  word-break: break-all;
`;

const PostBlockDate = styled.div`
  color: #ccc;
  margin-left: 10px;
  margin-top: 10px;
`;

const PostBlockBody = styled.div`
  font-size: 24px;
  margin-left: 10px;
  margin-top: 20px;
  white-space: pre-wrap;
  word-break: break-all;
`;

export default function PostPage() {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getPost(id).then((post) => setPost(post[0]));
  }, [id]);
  return (
    <PostBlock>
      <PostBlockTitle>{post && post.title}</PostBlockTitle>
      <PostBlockDate>
        {post && new Date(post.createdAt).toLocaleString()}
      </PostBlockDate>
      <PostBlockBody>{post && post.body}</PostBlockBody>
    </PostBlock>
  );
}
