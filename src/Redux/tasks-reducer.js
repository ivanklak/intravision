import { tasksAPI } from "../api/api";

const SET_TASKS = "SET_TASKS";

const initialState = {
  tasks: []
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASKS: {
      return { ...state, tasks: action.tasks };
    }
    default:
      return state;
  }
};

//AC
export const setTasks = tasks => ({ type: SET_TASKS, tasks });

//Redux-thunk
export const requestTasks = () => {
  return dispatch => {
    tasksAPI.getTasks().then(response => {
      //debugger;
      console.log(response.data);
      dispatch(setTasks(response.data));
      
    });
  };
};

export default tasksReducer;
