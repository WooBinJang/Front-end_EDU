import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import BoardContents from "../component/BoardContents";
import BoardList from "../component/BoardList";
import { boardSave, boardRemove, boardSelectRow } from "../moudule/action";
import "./Container.css";
const Container = () => {
  //state 설정
  let [inputData, setInputData] = useState({
    boardId: "",
    boardTitle: "",
    boardText: "",
  });

  //dispatch 설정
  const dispatch = useDispatch();

  const onRemove = (boardId) => dispatch(boardRemove(boardId));
  //dispatch -> action 생성 함수 실행

  const onSave = (saveData) => dispatch(boardSave(saveData));
  //dispatch -> action 생성 함수 실행

  const { selectRowData } = useSelector((state) => state.boardReducer);
  //boardReducer의 object의 selectRowData

  const { boards } = useSelector((state) => state.boardReducer);
  //boardReducer의 object의 boards

  //화면 관련 함수
  const onRowClick = (boardId) => {
    dispatch(boardSelectRow(boardId));

    if ({ ...selectRowData } !== "{}") {
      setInputData({
        boardId: selectRowData.boardId,
        boardTitle: selectRowData.boardTitle,
        boardText: selectRowData.boardText,
      });
    }
  };
  const changeInput = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };
  const resetForm = () => {
    setInputData({
      boardId: "",
      boardTitle: "",
      boardText: "",
    });
  };
  return (
    <div>
      <table className="bbs1">
        <colgroup className="bbs1-colgroup">
          <col style={{ width: "80px" }} />
          <col style={{ width: "100px" }} />
          <col style={{ width: "800px" }} />
          <col style={{ width: "80px" }} />
        </colgroup>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th colSpan={2}>내용</th>
          </tr>
        </thead>
        <tbody>
          {boards.map((row) => {
            return (
              <BoardList
                key={row.boardId}
                boardId={row.boardId}
                boardTitle={row.boardTitle}
                boardText={row.boardText}
                onRemove={onRemove}
                onRowClick={onRowClick}
              />
            );
          })}
        </tbody>
      </table>
      <BoardContents
        onSave={onSave}
        changeInput={changeInput}
        inputData={inputData}
        resetForm={resetForm}
      />
    </div>
  );
};

export default Container;
