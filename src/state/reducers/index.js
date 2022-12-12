import { combineReducers } from "redux";
import countReducer from "./countReducer";
import notesReducer from "./notesReducer";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
    count: countReducer,
    notes: notesReducer,
    search: searchReducer

});

export default rootReducer;