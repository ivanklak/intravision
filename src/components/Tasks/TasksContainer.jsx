import React from "react";
import Tasks from "./Tasks";
import { connect } from "react-redux";
import {
  requestTasks,
  requestStatuses,
  requestPriorities
} from "../../Redux/tasks-reducer";
import Preloader from "../../Proloader/Preloader";

class TasksContainer extends React.Component {
  componentDidMount() {
    this.props.requestTasks();
    this.props.requestStatuses();
    this.props.requestPriorities();
    console.log(this.props);
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Tasks
          statuses={this.props.statuses}
          priorities={this.props.priorities}
          // toggleCreate={this.props.toggleCreate}
          // toggleEdit={this.props.toggleEdit}
          taskCreate={this.props.taskCreate}
          tasks={this.props.tasks}
        />
      </>
    );
  }
}

let mapStateToProps = state => {
  return {
    tasks: state.tasksPage.tasks,
    isFetching: state.tasksPage.isFetching,
    priorities: state.tasksPage.priorities,
    statuses: state.tasksPage.statuses
  };
};
export default connect(mapStateToProps, {
  requestTasks,
  requestStatuses,
  requestPriorities
})(TasksContainer);
