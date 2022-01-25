import React from "react";
import { UncontrolledAlert } from "reactstrap";

function AlertUi() {
  return (
    <UncontrolledAlert color="info" style={{ width: "400px" }}>
      오늘의 공지사항 확인!
    </UncontrolledAlert>
  );
}

export default AlertUi;
