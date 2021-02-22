import { tasksAPI, statusesAPI, prioritiesAPI } from "../api/api";

const SET_TASKS = "SET_TASKS";
const SET_STATUS = "SET_STATUS";
const SET_PRIORITIES = "SET_PRIORITIES";

const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

const TASK_CREATE = "TASK_CREATE";
const TASK_EDIT = "TASK_EDIT";

const initialState = {
  tasks: [],
  statuses: [],
  priorities: [],
  isFetching: true,
  taskCreate: false,
  taskEdit: false
};

const tasksReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_TASKS: {
      return { ...state, tasks: action.tasks };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case SET_STATUS: {
      return { ...state, statuses: action.statuses };
    }
    case SET_PRIORITIES: {
      return { ...state, priorities: action.priorities };
    }
    case TASK_CREATE: {
      return { ...state, taskEdit: false, taskCreate: !state.taskCreate };
    }
    case TASK_EDIT: {
      return { ...state, taskCreate: false, taskEdit: !state.taskEdit };
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
export const setStatuses = statuses => ({ type: SET_STATUS, statuses });
export const setPriorities = priorities => ({
  type: SET_PRIORITIES,
  priorities
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

export const toggleCreate = () => {
  return dispatch => dispatch({ type: TASK_CREATE });
};
export const toggleEdit = () => {
  return dispatch => dispatch({ type: TASK_EDIT });
};

export const requestStatuses = () => {
  return dispatch => {
    statusesAPI.getStatus().then(response => {
      dispatch(setStatuses(response.data));
    });
  };
};

export const requestPriorities = () => {
  return dispatch => {
    prioritiesAPI.getPriorities().then(response => {
      dispatch(setPriorities(response.data));
    });
  };
};

export default tasksReducer;
