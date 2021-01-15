import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import { getPost, editPost } from "../../WebAPI";

const EditBlock = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 5px 8px black;
  border-top: solid 2px black;
  padding: 20px;
`;

const EditBlockTitle = styled.input`
  width: 600px;
  font-size: 20px;
  padding: 6px;
  margin-top: 40px;
  box-sizing: border-box;
`;
const EditBlockContent = styled.textarea`
  display: block;
  width: 600px;
  height: 500px;
  padding: 12px;
  box-sizing: border-box;
  margin-top: 20px;
`;

const EditButton = styled.button`
  display: flex;
  align-self: flex-end;
  float: right;
  margin-top: 30px;
`;

export default function EditPage() {
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");
  const [editError, setEditError] = useState("");
  const { id } = useParams();
  const history = useHistory();

  const handleEditSubmit = () => {
    editPost(editTitle, editContent, id).then((res) => {
      if (res.ok === 0) {
        return setEditError(res.message);
      }
      history.push("/");
    });
  };

  useEffect(() => {
    getPost(id).then((post) => {
      setEditTitle(post[0].title);
      setEditContent(post[0].body);
    });
  }, [id]);

  return (
    <EditBlock>
      <form onSubmit={handleEditSubmit}>
        <EditBlockTitle
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
        />
        <EditBlockContent
          value={editContent}
          onChange={(e) => setEditContent(e.target.value)}
        />
        {editError && editError}
        <EditButton>編輯文章</EditButton>
      </form>
    </EditBlock>
  );
}
