import React from "react";
import { connect } from "react-redux";
import "./TaskСreate.css";
import { toggleCreate, requestTasks } from "../../Redux/tasks-reducer";
import { Cross } from "@styled-icons/entypo/Cross";
import { taskCreateAPI } from "../../api/api";

class TaskCreate extends React.Component {
  state = {
    name: "",
    description: ""
  };
  newText = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onClickSave = () => {
    const { name, description } = this.state;
    taskCreateAPI.getCreate({ name, description });
    this.props.toggleCreate();
    this.setState({ name: "", description: "" });
    this.props.requestTasks();
  };
  render() {
    const { name, description } = this.state;
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
          <textarea onChange={this.newText} value={name} name="name"></textarea>
        </div>
        <div className={"description-form"}>
          <span>Описание</span>
          <textarea
            onChange={this.newText}
            value={description}
            name="description"
          ></textarea>
        </div>
        <button className={"save-btn"} onClick={this.onClickSave}>
          Сохранить
        </button>
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    show: state.tasksPage.taskCreate
  };
};

export default connect(mapStateToProps, { toggleCreate, requestTasks })(
  TaskCreate
);
