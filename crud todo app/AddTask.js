import { useEffect, useState ,useRef} from "react";
function AddTask({ addTodo, editableTodo, updateTodo }) {
  const initialTodo = {
    text: "",
    id: "",
    check: false,
  };
  const [todo, setTodo] = useState(initialTodo);
  const inputRef = useRef(null); // Create a ref to the input element

  //   So, to clarify, the useEffect is necessary to ensure that the setTodo is executed only when the editableTodo value changes, avoiding infinite re-renders and potential performance issues. When you uncomment the useEffect, the code should work as expected.

  //   maintain previous check staus
  useEffect(() => {
    if (editableTodo != null){
      setTodo({ ...editableTodo, check: true });
      inputRef.current.focus(); // Set the focus on the input element
    } 
  }, [editableTodo]);

  //   on text input field
  function handleChange({ target }) {
    setTodo({ ...todo, [target.name]: target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.text.trim() === "") {
      // Prevent submitting empty tasks
      alert("input field can't be empty");
      return;
    }
    if (editableTodo) {
      // todo before editing,edited todo
      updateTodo(editableTodo.id, { ...todo, id: new Date().getTime() });
    } else {
      addTodo({ ...todo, id: new Date().getTime() });
    }

    setTodo(initialTodo);
  }

  //   i used controlled component
  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef} // Attach the ref to the input element
        autoFocus
        onChange={handleChange}
        value={todo.text}
        name="text"
        placeholder="add todo"
        type="text"
      ></input>

      <button type="submit">submit</button>
    </form>
  );
}
export default AddTask;
