import React from "react";
import "./TaskEdit.css";
import { connect } from "react-redux";
import { Cross } from "@styled-icons/entypo/Cross";
import { toggleEdit, requestTasks } from "../../Redux/tasks-reducer";
import { Calendar } from "@styled-icons/evil/Calendar";

class TaskEdit extends React.Component {
  onClickSave = () => {
    this.props.toggleEdit();
    this.props.requestTasks();
  };
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
        <div className={"edit-wrapper"}>
          <div>
            <div className={"description"}>
              <p>Описание</p>
              <span>{item.description}</span>
            </div>
            <div className={"description"}>
              <p>Добавление комментария</p>
            </div>
            <button className={"saveBtn"} onClick={this.onClickSave}>
              Сохранить
            </button>
          </div>

          <div className={"status-bar"}>
            <div className={"content-bar"}>
              <div className={"content-status"}>
                <p
                  style={{ backgroundColor: item.statusRgb }}
                  className={"status"}
                ></p>
                <span>{item.statusName}</span>
              </div>
              <div className={"items"}>
                <div className={"item-field"}>
                  <span>Заявитель</span>
                  <p>{item.initiatorName}</p>
                </div>
                <div className={"item-field"}>
                  <span>Создана</span>
                  <p></p>
                </div>
                <div className={"item-field"}>
                  <span>Исполнитель</span>
                  <p>{item.executorName}</p>
                </div>
                <div>
                  <span className={"item-field"}>Приоритет</span>
                  <p>{item.priorityName}</p>
                </div>
                <div>
                  <span className={"item-field"}>Срок</span>
                  <Calendar size="25" color="black" />
                  {new Date(item.resolutionDatePlan).toLocaleDateString()}
                  {/* <p>{item.resolutionDatePlan}</p> */}
                </div>
              </div>
            </div>
          </div>
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
export default connect(mapStateToProps, { toggleEdit, requestTasks })(TaskEdit);
