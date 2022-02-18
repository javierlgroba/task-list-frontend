import { createSlice } from "@reduxjs/toolkit";

interface todosState {
  data: { text: string; id: string }[];
}

const initialState: todosState = {
  data: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {
      const text: string = action.payload.text;
      const id: string = action.payload.id;

      state.data = [{ text, id }, ...state.data];
    },
    removeTodo(state, action) {
      const id: string = action.payload;

      return {
        ...state,
        data: state.data.filter((todo) => todo.id !== id),
      };
    },
  },
});

export const { addTodo, removeTodo } = todosSlice.actions;

export default todosSlice.reducer;
