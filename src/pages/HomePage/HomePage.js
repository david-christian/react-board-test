import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getPosts, getPostsPage } from "../../WebAPI";
import { AuthContext } from "../../contexts";

const Root = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const PostsContainer = styled.div`
  border-bottom: 1px solid rgba(0, 12, 34, 0.2);
  padding: 16px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const PostsTitle = styled(Link)`
  font-size: 24px;
  width: 80%;
  color: #333;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const PostsDate = styled.div`
  color: rgba(0, 0, 0, 0.8);
`;

const PostsEdit = styled(Link)`
  color: #ccc;
  text-decoration: none;
`;

const PageBlock = styled.div``;
const PagePrev = styled.button``;
const PageNext = styled.button``;
const PageStatus = styled.div``;

function Posts({ post, user }) {
  let er = null;
  if (user) {
    if (post.userId === user.id) {
      er = true;
    }
  }
  return (
    <PostsContainer>
      <PostsTitle to={`/posts/${post.id}`}>{post.title}</PostsTitle>
      {er && <PostsEdit to={`/edit/${post.id}`}>編輯</PostsEdit>}
      <PostsDate>{new Date(post.createdAt).toLocaleString()}</PostsDate>
    </PostsContainer>
  );
}

function PageTion({ allPage, page, setPage }) {
  const handleButtonClick = (e) => {
    if (e === "next" && page < allPage) {
      return setPage(page + 1);
    }
    if (e === "prev" && page >= 2) {
      return setPage(page - 1);
    }
    return;
  };
  return (
    <PageBlock>
      <PagePrev onClick={() => handleButtonClick("prev")}>上一頁</PagePrev>
      <PageNext onClick={() => handleButtonClick("next")}>下一頁</PageNext>
      <PageStatus>
        第{page}頁/共{allPage}頁
      </PageStatus>
    </PageBlock>
  );
}

Posts.propTypes = {
  post: PropTypes.object,
};

export default function HomePage() {
  const [isGetingPostPage, setIsGetingPostPage] = useState(null);
  const [posts, setPosts] = useState([]);
  const [allPage, setAllPage] = useState();
  const [page, setPage] = useState(1);
  const limit = 5;
  const { user } = useContext(AuthContext);
  useEffect(() => {
    getPosts().then((posts) => {
      setAllPage(Math.ceil(posts.length / limit));
    });
  }, []);
  useEffect(() => {
    getPostsPage(page, limit).then((res) => {
      setPosts(res);
      setIsGetingPostPage(true);
    });
  }, [page]);
  return (
    <Root>
      {posts.map((post) => (
        <Posts key={post.id} post={post} user={user} />
      ))}
      {isGetingPostPage && (
        <PageTion allPage={allPage} page={page} setPage={setPage} />
      )}
    </Root>
  );
}
