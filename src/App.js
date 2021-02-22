import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { Route } from "react-router-dom";
import TasksContainer from "./components/Tasks/TasksContainer";
import Base from "./components/Base/Base";
import Employees from "./components/Employees/Employees";
import Clients from "./components/Clients/Clients";
import Actives from "./components/Active/Actives";
import Settings from "./components/Settings/Settings";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path="/base" render={() => <Base />} />
        <Route path="/taskspage" render={() => <TasksContainer />} />
        <Route path="/employees" render={() => <Employees />} />
        <Route path="/clients" render={() => <Clients />} />
        <Route path="/active" render={() => <Actives />} />
        <Route path="/settings" render={() => <Settings />} />
      </div>
    </div>
  );
}

export default App;
