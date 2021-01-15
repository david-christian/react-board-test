import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LoginPage from "../../pages/LoginPage";
import HomePage from "../../pages/HomePage";
import PostPage from "../../pages/PostPage";
import RegisteredPage from "../../pages/RegisteredPage";
import NewPostPage from "../../pages/NewPostPage";
import Header from "../Header";
import EditPage from "../../pages/EditPage";
import { AuthContext } from "../../contexts";
import { getMe } from "../../WebAPI";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { getAuthToken } from "../../utils";

const Root = styled.div``;

export default function App() {
  const [isGetingUser, setIsGetingUser] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (getAuthToken()) {
      return getMe().then((res) => {
        if (res.ok) {
          setUser(res.data);
        }
      });
    }
    setIsGetingUser(true);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, setUser, isGetingUser, setIsGetingUser }}
    >
      <Root>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/newpost">
              <NewPostPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/posts/:id">
              <PostPage />
            </Route>
            <Route path="/edit/:id">
              <EditPage />
            </Route>
            <Route path="/registered">
              <RegisteredPage />
            </Route>
          </Switch>
        </Router>
      </Root>
    </AuthContext.Provider>
  );
}
