import React from "react";
import "./TaskEdit.css";
import { connect } from "react-redux";
import { Cross } from "@styled-icons/entypo/Cross";
import { toggleEdit } from "../../Redux/tasks-reducer";

class TaskEdit extends React.Component {
  render() {
    const { toggleEdit, show, item } = this.props;
    console.log(this.props);
    return item ? (
      <div className={`task-edit ${show ? "show" : ""}`}>
        <div className={"header"}>
          <span className={"header-title"}>№{item.id}</span>
          <p>{item.name}</p>
          <Cross
            size="25"
            color="white"
            className={"close-btn"}
            onClick={() => toggleEdit()}
          />
        </div>
        <div className={"description"}>
          <p>Описание</p>
          <span>{item.description}</span>
        </div>
        <div className={"description"}>
          <p>Добавление комментария</p>
        </div>
        <button className={"saveBtn"}>Сохранить</button>

        <div className={"statusBar"}>
          <p style={{ backgroundColor: item.statusRgb }} className={"status"}>
            {item.statusName}
          </p>
          <p>{item.executorName}</p>
          <p>{item.initiatorName}</p>
          <p>{item.priorityName}</p>
          <p>{item.resolutionDatePlan}</p>
        </div>
      </div>
    ) : null;
  }
}
let mapStateToProps = state => {
  return {
    show: state.tasksPage.taskEdit
  };
};
export default connect(mapStateToProps, { toggleEdit })(TaskEdit);
