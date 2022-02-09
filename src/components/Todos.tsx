import { useEffect, useState } from "react";
import Todo from "./Todo";
import style from "./todos.module.scss";

function Todos() {
  const [todoList, setTodoList] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const axios = require('axios').default;
    axios({ timeout: 1000, method: 'get', url: '/task/get', baseURL: 'http://localhost:8080' })
      .then(function (response: any) {
        if (response.status === 200) {
          let todos: { id: string, text: string }[] = response.data
          setTodoList(todos.map((todo) => (
            < Todo key={todo.id} text={todo.text} id={todo.id} />
          )));
        }
      })
      .catch(function (error: any) {
        setTodoList([]);
        console.log(error);
      })
  }, []);

  return <div className={style.todos}>{todoList}</div>;
}

export default Todos;
