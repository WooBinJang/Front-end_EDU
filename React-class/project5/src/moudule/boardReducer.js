/* 초기값 세팅 */

const initialState = {
  boards: [
    {
      boardId: 1,
      boardTitle: "제목1",
      boardText: "내용1",
    },
    {
      boardId: 2,
      boardTitle: "제목2",
      boardText: "내용2",
    },
  ],
  lastId: 2,
  selectRowData: {},
  // 보드리스트에서 클릭 하면 해당 아이디를 가진 데이터가 들어간다. (수정을 위한 object)
};

/* 리듀서 */
export default function boardReducer(state = initialState, action) {
  switch (action.type) {
    case "REMOVE":
      return {
        ...state,
        boards: state.boards.filter((row) => row.boardId !== action.boardId),
      };
    case "SAVE":
      if (action.saveData.boardId === "") {
        ///boardID가 없다면 신규 등록
        return {
          lastId: state.lastId + 1,
          boards: state.boards.concat({
            ...action.saveData,
            boardId: state.lastId + 1,
          }),
          selectRowData: {},
        };
      } else {
        //boardId가 있다면 기존 데이터 수정
        return {
          ...state,
          boards: state.boards.map((data) =>
            data.boardId === action.saveData.boardId
              ? { ...action.saveData }
              : data
          ),
          selectRowData: {},
        };
      }
    case "SELECT_ROW":
      return {
        // 클릭한 글목록 셀 boardId 를 state 만 찾아서 return
        ...state,
        selectRowData: state.boards.find(
          (row) => row.boardId === action.boardId
        ),
      };
    default:
      return state;
  }
}
