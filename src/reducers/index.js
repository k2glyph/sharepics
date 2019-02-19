import {combineReducers} from "redux";
import authReducer from "./authReducer";
import {reducer as formReducer} from "redux-form";
import imageReducer from "./imageReducer";

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    images: imageReducer
});
