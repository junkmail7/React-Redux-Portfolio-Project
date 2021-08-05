import { combineReducers } from "redux";
import store from "./store";
import tricksReducer from './AddTricks/addtricks-reducer'
import userReducer from "./AddUser/adduser-reducer";
import userTrickReducer from "./AddUserTricks/addusertrick-reducer";

const rootReducer = combineReducers({
    seededTricks: tricksReducer,
    currentUser: userReducer,
    userTricks: userTrickReducer
});

export default rootReducer;