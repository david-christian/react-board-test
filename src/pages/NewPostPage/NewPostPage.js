import React, { useState } from "react";
import styled from "styled-components";
import { sendPost } from "../../WebAPI";
import { useHistory } from "react-router-dom";

const NewPostBlock = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 5px 8px black;
  border-top: solid 2px black;
  padding: 20px;
`;
const NewPostTitle = styled.input`
  width: 600px;
  font-size: 20px;
  padding: 6px;
  margin-top: 40px;
  box-sizing: border-box;
`;
const NewPostBody = styled.textarea`
  display: block;
  width: 600px;
  height: 500px;
  padding: 12px;
  box-sizing: border-box;
  margin-top: 20px;
`;
const SubmitButton = styled.button`
  display: flex;
  align-self: flex-end;
  float: right;
  margin-top: 30px;
`;
export default function NewPostPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [newPostError, setNewPostError] = useState("");
  const history = useHistory();
  const handleNewPostSubmit = () => {
    sendPost(title, content).then((res) => {
      if (res.ok === 0) {
        return setNewPostError(res.message);
      }
      history.push("/");
    });
  };
  return (
    <NewPostBlock>
      <form onSubmit={handleNewPostSubmit}>
        <NewPostTitle
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <NewPostBody
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        {newPostError && newPostError}
        <SubmitButton>送出文章</SubmitButton>
      </form>
    </NewPostBlock>
  );
}
