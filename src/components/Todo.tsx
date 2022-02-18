import style from "./todo.module.scss";
import remove from "../assets/icons/remove.svg";
import { useAppDispatch } from "../store/hooks";
import { removeTodo } from "../store/reducers/todosSlice";

function Todo(props: { text: string; id: string }) {
  const dispatch = useAppDispatch();

  function removeHandler() {
    const axios = require('axios').default;

    axios({ timeout: 1000, method: 'delete', url: '/task/remove/' + props.id, baseURL: 'http://localhost:8080' })
      .then(function (response: any) {
        if (response.status === 200) {
          console.log(response);
          dispatch(removeTodo(props.id));
        }
      })
      .catch(function (error: any) {
        console.log(error);
      })
  }

  return (
    <div className={style.todo}>
      <span>{props.text}</span>
      <img src={remove} alt="remove" onClick={removeHandler} />
    </div>
  );
}

export default Todo;
