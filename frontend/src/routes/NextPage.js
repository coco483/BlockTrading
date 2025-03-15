import { useLocation } from "react-router-dom";

function NextPage() {
  const location = useLocation();
  const username = location.state?.username
    return (
      <>
        <h1>삐릿삐릿 여기는 다음 페이지</h1>
        <h1>{username}의 로그인을 환영합니다</h1>
      </>
    );
  }
  
  export default NextPage;
