import React from "react";
import Tasks from "./Tasks";
import { connect } from "react-redux";
import { requestTasks } from "../../Redux/tasks-reducer";
import Preloader from "../../Proloader/Preloader";

class TasksContainer extends React.Component {
  componentDidMount() {
    this.props.requestTasks();
    //   console.log(this.props);
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Tasks tasks={this.props.tasks} />
      </>
    );
  }
}

let mapStateToProps = state => {
  return {
    tasks: state.tasksPage.tasks,
    isFetching: state.tasksPage.isFetching
  };
};
export default connect(mapStateToProps, { requestTasks })(TasksContainer);

// const TasksContainer = props => {
//     const [data, setData] = useState({ tasks: [] });
//     useEffect(() => {
//       tasksAPI.getTasks()
//         .then(response =>
//           response.value.map(task => {
//             const {
//               id,
//               name,
//               description,
//               statusName,
//               statusRgb,
//               executorName
//             } = task;
//             return { id, name, description, statusName, statusRgb, executorName };
//           })
//         )
//         .then(tasks => {
//           console.log(tasks);
//           setData({ tasks });
//         });
//     }, []);

//     return (
//       <div>
//         <Tasks value={[ data, setData ]} />
//       </div>
//     );
//   };
