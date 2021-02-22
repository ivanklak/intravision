import React from "react";
import { connect } from "react-redux";
import "./TaskСreate.css";
import { toggleCreate } from "../../Redux/tasks-reducer";
import { Cross } from "@styled-icons/entypo/Cross";

class TaskCreate extends React.Component {
  render() {
    const { toggleCreate, show } = this.props;
    console.log(this.props);

    return (
      <div className={`task-create ${show ? "show" : ""}`}>
        <div className={"header"}>
          <span className="header-title">Новая заявка</span>
          <Cross
            size="25"
            color="white"
            className={"close-btn"}
            onClick={() => toggleCreate()}
          />
        </div>
        <div className={"name-form"}>
          <span>Название</span>
          <textarea></textarea>
        </div>
        <div className={"description-form"}>
          <span>Описание</span>
          <textarea></textarea>
        </div>
        <button className={"save-btn"}>Сохранить</button>
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    show: state.tasksPage.taskCreate
  };
};

export default connect(mapStateToProps, { toggleCreate })(TaskCreate);
