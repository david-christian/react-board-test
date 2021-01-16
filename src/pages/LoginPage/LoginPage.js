import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { login, getMe } from "../../WebAPI";
import { setAuthToken } from "../../utils";
import { AuthContext } from "../../contexts";
const ErrorMessage = styled.div`
  color: red;
`;

export default function LoginPage() {
  const { setUser } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();
  const handleSubmit = (e) => {
    if (username === "" && password === "") {
      e.preventDefault();
      setError("帳號或密碼未輸入");
      return;
    }
    e.preventDefault();
    setError(null);
    login(username, password).then((data) => {
      if (data.ok === 0) {
        return setError(data.message);
      }
      setAuthToken(data.token);
      getMe().then((res) => {
        if (res.ok !== 1) {
          setAuthToken(null);
          return setError(res.toString());
        }
        setUser(res.data);
        history.push("/");
      });
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        username:
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button>登入</button>
      <ErrorMessage>{error && error}</ErrorMessage>
    </form>
  );
}
