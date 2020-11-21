import { combineReducers} from "redux"
import films from "./film/reducers";

export default ()=> combineReducers({
    films
})