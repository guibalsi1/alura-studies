import Forms from "../components/Forms";
import List from "../components/List";
import style from "./App.module.scss";
import CountDown from "../components/CountDown";
import React, { useState } from "react";
import { ITask } from "../types/tasks";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [selected, setSelected] = useState<ITask>();

  function selectTask(selectedTask: ITask) {
    setSelected(selectedTask);
    setTasks((prevTasks) => prevTasks.map(task => ({
      ...task,
      selected: task.id === selectedTask.id ? true : false
    })))
  }

  return (
    <div className={style.AppStyle}>
      <Forms setTasks = {setTasks}/>
      <List tasks={tasks} selectTask={selectTask}/>
      <CountDown selected={selected}/>
    </div>
  );
}

export default App;
