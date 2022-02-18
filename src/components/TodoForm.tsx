import React, { useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { addTodo } from "../store/reducers/todosSlice";
import style from "./todoForm.module.scss";

function TodoForm() {
  const dispatch = useAppDispatch();
  const [text, setText] = useState("");

  function changeHandler(e: React.FormEvent<HTMLInputElement>) {
    setText(e.currentTarget.value);
  }

  function submitHandler(e: React.FormEvent) {
    e.preventDefault();
    const axios = require('axios').default;
    axios({
      timeout: 1000, method: 'post', url: '/task/add', baseURL: 'http://localhost:8080', params: {
        text: text
      }
    })
      .then(function (response: any) {
        console.log(response);
        if (response.status === 201) {
          dispatch(addTodo(response.data));
          setText("");
        }
      })
      .catch(function (error: any) {
        console.log(error);
      })
  }

  return (
    <form className={style["todo-form"]} onSubmit={submitHandler}>
      <label>New Todo</label>
      <div className={style["todo-add"]}>
        <input
          onChange={changeHandler}
          value={text}
          placeholder="Add new todo here"
        />
        <button>
          <div />
          <div />
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
