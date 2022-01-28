import { combineReducers } from "redux";
import boardReducer from "./boardReducer";

const rootReducer = combineReducers({
  boardReducer,
});
/* combineReducers 는 여러 개의 reduser를 하나로 합쳐서 내보내기 위한 것  */

export default rootReducer;
