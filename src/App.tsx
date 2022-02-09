import style from "./app.module.scss";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";

function App() {
  const pendingTasks = 0;

  return (
    <div className={style["container"]}>
      <h1>Martha&Javi ToDo List</h1>
      <TodoForm />
      <Todos />
      <span className={style["pending"]}>
        There is {pendingTasks} pending tasks
      </span>
    </div>
  );
}

export default App;
