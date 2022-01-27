import { combineReducers } from "redux";
import cartReducer from "./cartReducer";

export default combineReducers({ cartReducer });

// import cartdelReucer from "./cartdelReucer";

// const rootReducer = combineReducers({
//   addCart: cartReducer,
//   delCart: cartdelReucer,
// });

// export default rootReducer;
