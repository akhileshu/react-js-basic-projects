import AddTask from "./AddTask";
import "./App.css";
import { useEffect, useState } from "react";
import ShowTaskList from "./ShowTaskList";


function App(){
//     To-Do List App:
//  Create a simple to-do list application where users can add, edit, and delete tasks. Utilize the useState hook to manage the list of tasks, and pass the tasks as props to the relevant components for rendering.
const [todoList, setTodoList] = useState([]);
// console.log(todoList);
const [editableTodo, setEditableTodo] = useState(null);
function addTodo(todoObj){
    setTodoList([...todoList,todoObj])
    
}
function DeleteTodo(id){
    const newList=todoList.filter((todoObj)=>todoObj.id!==id)
    setTodoList(newList)
    
}
function editTodo(id){
    const todo=todoList.find((todoObj)=>todoObj.id===id)
    setEditableTodo(todo)
    
}
// after edit need to update
// (remove previous todo,add updated todo)
function updateTodo (idRemove,todoObj){
    const updatedTodo=[...todoList]
    const index=updatedTodo.findIndex((todo)=>todo.id===idRemove)
    updatedTodo.splice(index,1,todoObj)
    setTodoList(updatedTodo)
    setEditableTodo(null)
    
}
// to handle user input on checkbox because after edit submit,maintain previous check status
function updateCheck(value,id){
    const updatedTodo=[...todoList]
    const todoToUpdate=todoList.findIndex((todo)=>todo.id===id)
    updatedTodo.splice(todoToUpdate,1,{...todoList[todoToUpdate],check:value})
    setTodoList(updatedTodo)
}
    return (
<>
<AddTask updateTodo ={updateTodo }  DeleteTodo={DeleteTodo} editableTodo={editableTodo} addTodo={addTodo}></AddTask>
<ShowTaskList updateCheck={updateCheck} editTodo={editTodo} DeleteTodo={DeleteTodo} todoList={todoList}></ShowTaskList>
</>

    )
}
export default App