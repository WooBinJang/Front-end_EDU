import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div className="Home">
      <h1>Home</h1>
      <p>시작 페이지 입니다</p>
      <ul>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/ajax">Ajax</Link>
        </li>
        <li>
          <Link to="/userinfo">UserInfo</Link>
        </li>
      </ul>
      <h1>{props.state[0].name}</h1>
    </div>
  );
}
function setProps(state) {
  return {
    state: state,
  };
}
export default connect(setProps)(Home);
