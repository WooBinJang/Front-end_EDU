import React from "react";

/* data 입력 컴포넌트*/
const BoardContents = ({ onSave, changeInput, inputData, resetForm }) => {
  const saveBtnClick = (e) => {
    e.preventDefault(); // submit 기본실행 이벤트 막기
    onSave(inputData); // Action 생성함수 실행 (boardSave)
    resetForm(); // input 값 비우기
  };
  return (
    <div>
      <form onSubmit={saveBtnClick}>
        <div>
          제목 :
          <input
            type="text"
            name="boardTitle"
            onChange={changeInput}
            value={inputData.boardTitle}
          />
        </div>
        <div>
          내용 :
          <input
            type="text"
            name="boardText"
            onChange={changeInput}
            value={inputData.boardText}
          />
        </div>
        <input
          type="hidden"
          name="boardId"
          onChange={changeInput}
          value={inputData.boardId}
        />
        <button type="submit">글저장</button>
      </form>
    </div>
  );
};

export default BoardContents;
