import Forms from "../components/Forms";
import List from "../components/List";
import style from "./App.module.scss";
import CountDown from "../components/CountDown";

function App() {
  return (
    <div className={style.AppStyle}>
      <Forms />
      <List />
      <CountDown />
    </div>
  );
}

export default App;
