import React from "react";
import PropTypes from "prop-types";

function Nav({ calendar, color, day, month }) {
  return (
    <div>
      <h1 style={{ color }}>오늘은 {calendar}일 입니다</h1>
      <h2>오늘은 {day} 입니다.</h2>
      {month ? "☆" : "★"}
      <h2>이번달은 {month} 입니다.</h2>
    </div>
  );
}
Nav.defaultProps = {
  calendar: "휴일",
};
Nav.propTypes = {
  month: PropTypes.number.isRequired,
};
// props type check
export default Nav;
