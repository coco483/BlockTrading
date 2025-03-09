import {Link} from "react-router-dom";

function Nav() {
    return (
      <>
        <h1>Nav</h1>
        <ul className="navList">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/routerproptest">RouterPropTest</Link>
          </li>
          <li>
            <Link to="/studentlist">StudentList</Link>
          </li>
          <li>
            <Link to="/input">회원정보 입력</Link>
          </li>
        </ul>
      </>
    );
  }
  
  export default Nav;
  