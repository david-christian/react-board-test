import React, { useContext } from "react";
import styled from "styled-components";
import { Link, useLocation, useHistory } from "react-router-dom";
import { AuthContext } from "../../contexts";
import { setAuthToken } from "../../utils";

const HeaderContainer = styled.div`
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0px 32px;
  box-sizing: border-box;
`;

const Brand = styled.div`
  font-size: 32px;
  font-weight: bold;
`;

const NavbarList = styled.div`
  display: flex;
  align-items: center;
  height: 64px;
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;

  ${NavbarList} {
    margin-left: 64px;
  }
`;

const Nav = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  box-sizing: border-box;
  width: 100px;
  cursor: pointer;
  color: black;
  text-decoration: none;
  ${(props) => props.$active && `background: rgba(0, 0, 0, 0.2);`}
`;

const NavbarGetingBlock = styled.div`
  display: flex;
  height: 100%;
`;

function NavbarGeting({ user, pathname }) {
  return (
    <NavbarGetingBlock>
      {!user && (
        <Nav to="/login" $active={pathname === "/login"}>
          登入
        </Nav>
      )}
      {!user && (
        <Nav to="/registered" $active={pathname === "/registered"}>
          註冊
        </Nav>
      )}
    </NavbarGetingBlock>
  );
}

export default function Header() {
  const location = useLocation();
  const { user, setUser, isGetingUser, setIsGetingUser } = useContext(
    AuthContext
  );
  const history = useHistory();
  const handleLogout = () => {
    setAuthToken("");
    setIsGetingUser(true);

    setUser(null);
    if (location.pathname !== "/") {
      history.push("/");
    }
  };
  const pathname = location.pathname;
  return (
    <HeaderContainer>
      <LeftContainer>
        <Brand>SPA 留言板</Brand>
        <NavbarList>
          <Nav to="/" $active={location.pathname === "/"}>
            首頁
          </Nav>
          {user && (
            <Nav to="/newpost" $active={pathname === "/newpost"}>
              發佈文章
            </Nav>
          )}
        </NavbarList>
      </LeftContainer>
      <NavbarList>
        {user && (
          <Nav to="/" onClick={handleLogout}>
            登出
          </Nav>
        )}
        {isGetingUser && <NavbarGeting user={user} pathname={pathname} />}
      </NavbarList>
    </HeaderContainer>
  );
}
