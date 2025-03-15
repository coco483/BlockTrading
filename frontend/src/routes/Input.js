import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

function Input() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const navigate = useNavigate();

  const handleSave = async () => {
    if (!username || !password) {
      alert("정보 입력 똑바로 해라");
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/userinfo/login`, {
        username,
        password,
      });

      console.log("서버 응답:", response.data);
      alert("로그인 성공 축하");
      setWelcomeMessage(`${username}의 로그인을 환영합니다`);
      setUsername("");
      setPassword("");
      navigate("/next", { state: { username } });
    } catch (error) {
      console.error("요청 오류:", error);
      alert("에러 발생");
    }
  };

  return (
    <>
      <h1>회원가입</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSave}>가입하기</button>
      {welcomeMessage && <p>{welcomeMessage}</p>}
    </>
  );
}

export default Input;
