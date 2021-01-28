import { combineReducers } from "redux";
import posts from "./Posts";
import auth from "./auth";
export default combineReducers({
  posts,
  auth,
});
// you should do theses thing before not after opening the doubt
// like starting the app
