import React from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
function About(props) {
  const navigate = useNavigate();

  return (
    <div className="About">
      <h1>소개</h1>
      <p>{props.state[0].name}</p>
      <p>{props.state[0].age}</p>
      <p>{props.state[1].name}</p>
      <p>{props.state[1].age}</p>

      <button
        onClick={() => {
          props.dispatch({ type: "add" });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          props.dispatch({ type: "minus" });
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          navigate(1);
        }}
      >
        앞으로 가기
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로 가기
      </button>
      <button
        onClick={() => {
          navigate("/ajax");
        }}
      >
        Ajax 페이지 가기
      </button>
    </div>
  );
}

function setProps(state) {
  return {
    state: state,
  };
}

export default connect(setProps)(About);
