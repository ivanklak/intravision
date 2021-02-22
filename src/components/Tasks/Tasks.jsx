import React from "react";
import s from "./Tasks.module.css";
import Preloader from "../../Proloader/Preloader";
import TaskCreate from "../TaskCreate/TaskCreate";
import TaskEdit from "../TaskEdit/TaskEdit";
import { connect } from "react-redux";
import { toggleCreate, toggleEdit } from "../../Redux/tasks-reducer";

class Tasks extends React.Component {
  state = {
    taskItems: null
  };
  onRowSelect = async row => {
    this.setState({ taskItems: row });
    this.props.toggleEdit(true);
    // console.log(this.state.row);
  };

  render() {
    if (!this.props.tasks) {
      return <Preloader />;
    }
    const { taskItems } = this.state;
    const { toggleCreate } = this.props;
    //console.log(this.props);
    return (
      <>
        <TaskCreate />
        <TaskEdit item={taskItems} />
        <div className={s.tasks}>
          <div className={s.btn}>
            <button className={s.createBtn} onClick={() => toggleCreate()}>
              Создать заявку
            </button>
          </div>
          <table className={s.table}>
            <thead>
              <tr className={s.thead}>
                <th>ID</th>
                <th>Название</th>
                <th>Статус</th>
                <th>Исполнитель</th>
              </tr>
            </thead>
            <tbody>
              {this.props.tasks.value
                ? this.props.tasks.value.map(task => (
                    <tr
                      key={task.id}
                      className={s.tbody}
                      onClick={this.onRowSelect.bind(null, task)}
                    >
                      <td>{task.id}</td>
                      <td style={{ width: "250px" }}>{task.name}</td>
                      <td>
                        <div
                          style={{ backgroundColor: task.statusRgb }}
                          className={s.status}
                        >
                          {task.statusName}
                        </div>
                      </td>
                      <td>{task.executorName}</td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
let mapStateToProps = state => {
  return {
    taskCreate: state.tasksPage.taskCreate,
    taskEdit: state.tasksPage.taskEdit
  };
};

export default connect(mapStateToProps, { toggleCreate, toggleEdit })(Tasks);
