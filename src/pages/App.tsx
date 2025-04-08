import Forms from "../components/Forms";
import List from "../components/List";
import style from "./App.module.scss";
import CountDown from "../components/CountDown";
import React, { useState } from "react";
import { ITask } from "../types/tasks";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([])
  return (
    <div className={style.AppStyle}>
      <Forms setTasks = {setTasks}/>
      <List tasks={tasks}/>
      <CountDown />
    </div>
  );
}

export default App;
