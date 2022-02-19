import { useAppSelector, useAppDispatch } from "../store/hooks";
import { addTodo } from "../store/reducers/todosSlice";
import { useEffect } from "react";
import Todo from "./Todo";
import style from "./todos.module.scss";

function Todos() {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos.data);

  useEffect(() => {
    const axios = require('axios').default;
    axios({ timeout: 1000, method: 'get', url: '/task/get', baseURL: process.env.REACT_APP_API_URL })
      .then(function (response: any) {
        if (response.status === 200) {
          let tmp: { id: string, text: string }[] = response.data
          tmp.map((todo) => dispatch(addTodo(todo)))
        }
      })
      .catch(function (error: any) {
        console.log(error);
      })
  }, [dispatch]);

  const todoList = todos.map((todo) => (
    <Todo key={todo.id} text={todo.text} id={todo.id} />
  ));

  return <div className={style.todos}>{todoList}</div>;
}

export default Todos;
