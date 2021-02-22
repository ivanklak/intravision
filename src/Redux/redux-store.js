import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import tasksReducer from "./tasks-reducer";

const reducers = combineReducers({
  tasksPage: tasksReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
