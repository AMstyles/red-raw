import { combineReducers } from "redux";
import countReducer from "./countReducer";
import notesReducer from "./notesReducer";

const rootReducer = combineReducers({
    count: countReducer,
    notes: notesReducer

});

export default rootReducer;