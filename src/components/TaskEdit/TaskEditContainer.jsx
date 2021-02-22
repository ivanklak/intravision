import React from "react";
import { connect } from "react-redux";
import TaskEdit from "./TaskEdit";
import { requestItem } from "../../Redux/item-reducer";

class TaskEditContainer extends React.Component {
  render() {
    return (
      <>
        <TaskEdit />
      </>
    );
  }
}

let mapStateToProps = state => {
  return {};
};
export default connect(mapStateToProps, { requestItem })(TaskEditContainer);
