import { useState } from "react";

function Todo({ todo, DeleteTodo, editTodo, updateCheck }) {
    // done is a state variable because i want it to be associate individually with each todo obj
  const [done, setDone] = useState(false);

 
  function handleDelete(id) {
    DeleteTodo(id);
  }
  function handleEdit(id) {
    editTodo(id);
  }
//   updating check in app because i want to associate it with todo object
  function handlCheck({ target }, id) {
    updateCheck(target.checked, id);
  }
//   toggle done /re do
  function handleDone() {
    setDone((done) => !done);
  }
  const { text, id, check } = todo;
  let cls = done ? "done text" : "text";
  let doneText = done ? "re do" : "done";

  return (
    <>
      <div className="todo-element">
        <input
          checked={check}
          onChange={(e) => handlCheck(e, id)}
          type="checkbox"
        ></input>
        <span className={cls} > {text} </span>

        {todo.check === true && (
          <>
            <button onClick={() => handleEdit(id)}>edit</button>{" "}
            <button onClick={() => handleDelete(id)}>delete</button>{" "}
            <button onClick={handleDone}>{doneText}</button>
          </>
        )}
      </div>
    </>
  );
}
export default Todo;
