import { useEffect, useState } from "react";
import Todo from "./Todo";

function ShowTaskList({ todoList, DeleteTodo, editTodo, updateCheck }) {
  return (
    <>
      {todoList.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            updateCheck={updateCheck}
            editTodo={editTodo}
            DeleteTodo={DeleteTodo}
          ></Todo>
        );
      })}
    </>
  );
}
export default ShowTaskList;
