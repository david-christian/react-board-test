import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { login, getMe, register } from "../../WebAPI";
import { setAuthToken } from "../../utils";
import { AuthContext } from "../../contexts";
const ErrorRegisterMessage = styled.div`
  color: red;
`;

export default function RegisteredPage() {
  const { setUser } = useContext(AuthContext);
  const [registerNickname, setRegisterNickname] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [registerError, setRegisterError] = useState("");
  const history = useHistory();
  const handleRegisterSubmit = (e) => {
    if (
      registerNickname === "" &&
      registerUsername === "" &&
      registerPassword === ""
    ) {
      e.preventDefault();
      setRegisterError("暱稱或帳號或密碼 未輸入");
      return;
    }
    setRegisterError(null);
    register(registerNickname, registerUsername, registerPassword).then(
      (data) => {
        if (data.ok === 0) {
          return setRegisterError(data.message);
        }
        // 因為後台會將註冊密碼改成 "Lidemy"
        login(registerUsername, "Lidemy").then((data) => {
          if (data.ok === 0) {
            return setRegisterError(data.message);
          }
          setAuthToken(data.token);
          getMe().then((res) => {
            if (res.ok !== 1) {
              setAuthToken(null);
              return setRegisterError(res.toString());
            }
            setUser(res.data);
            history.push("/");
          });
        });
      }
    );
  };
  return (
    <form onSubmit={handleRegisterSubmit}>
      <div>
        nickname:
        <input
          value={registerNickname}
          onChange={(e) => setRegisterNickname(e.target.value)}
        />
      </div>
      <div>
        username:
        <input
          value={registerUsername}
          onChange={(e) => setRegisterUsername(e.target.value)}
        />
      </div>
      <div>
        password:
        <input
          type="password"
          value={registerPassword}
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
      </div>
      <button>註冊</button>
      <ErrorRegisterMessage>
        {registerError && registerError}
      </ErrorRegisterMessage>
    </form>
  );
}
