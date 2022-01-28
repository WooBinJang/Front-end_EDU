import React from "react";

/* data 리스팅 컴포넌트 */
const BoardList = ({
  boardId,
  boardTitle,
  boardText,
  onRemove,
  onRowClick,
}) => {
  return (
    <tr>
      <td onClick={() => onRowClick(boardId)}>{boardId}</td>
      <td onClick={() => onRowClick(boardId)}>{boardTitle}</td>
      <td onClick={() => onRowClick(boardId)}>{boardText}</td>
      <td>
        <button onClick={() => onRemove(boardId)}>삭제</button>
      </td>
    </tr>
  );
};

export default BoardList;

/* 
  부모 컨포넌트 onRowClick 
*/
