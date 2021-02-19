import { tasksAPI } from "../api/api";

const SET_TASKS = "SET_TASKS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

const initialState = {
  tasks: [],
  isFetching: true
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASKS: {
      return { ...state, tasks: action.tasks };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    default:
      return state;
  }
};

//AC
export const setTasks = tasks => ({ type: SET_TASKS, tasks });
export const setTougleIsFetching = isFetching => ({
  type: TOGGLE_IS_FETCHING,
  isFetching
});

//Redux-thunk
export const requestTasks = () => {
  return dispatch => {
    dispatch(setTougleIsFetching(true));
    tasksAPI.getTasks().then(response => {
      //   debugger;
      dispatch(setTougleIsFetching(false));
      dispatch(setTasks(response.data));
      // console.log(response.data);
    });
  };
};

export default tasksReducer;
