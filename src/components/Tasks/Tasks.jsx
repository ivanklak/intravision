import React from "react";
import s from "./Tasks.module.css";
import Preloader from "../../Proloader/Preloader";

const Tasks = props => {
  //   console.log(props);
  if (!props.tasks) {
    return <Preloader />;
  }

  return (
    <div>
      <div className={s.tasks}>
        <div className={s.btn}>
          <button className={s.createBtn}>Создать заявку</button>
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
            {props.tasks.value
              ? props.tasks.value.map(task => (
                  <tr key={task.id} className={s.tbody}>
                    <td>{task.id}</td>
                    <td style={{ width: "250px" }}>{task.name}</td>
                    <td>{task.statusName}</td>
                    <td>{task.executorName}</td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Tasks;
