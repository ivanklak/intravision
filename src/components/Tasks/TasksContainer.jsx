import React from "react";
import Tasks from "./Tasks";
import { connect } from "react-redux";
import {requestTasks} from "../../Redux/tasks-reducer";

class TasksContainer extends React.Component {
  componentDidMount() {
    this.props.requestTasks();
  }

  render() {
    return (
      <div>
        <Tasks tasks={this.props.tasks} />
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    tasks: state.taskspage.tasks
  };
};
export default connect(mapStateToProps, {requestTasks})(TasksContainer);
