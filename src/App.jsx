import { useState,useEffect } from "react"
import ToDoList from "./components/ToDoList"
import ToDoListInput from "./components/ToDoListInput"

function App() {
 
  const [todos, setTodos] = useState([])
  const [todoValue,setTodovalue] = useState('')
  function presistdata(newList){
    localStorage.setItem('todos',JSON.stringify({todos : newList}))
  }
  function handleaddToDo(newTodo){
    const newList = [...todos,newTodo];
    presistdata(newList);
    setTodos(newList)
  }    
  function handleDelete(index){
    const newList = todos.filter((_,todoIndex)=>{
      return todoIndex !== index;
    })
    presistdata(newList)
    setTodos(newList)
  } 
  useEffect(()=>{
    if(!localStorage){
      return
    }
    let localTodos = localStorage.getItem('todos');
    if(!localTodos){
      return
    }
    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  },[])

  return (
    <>
      <ToDoListInput 
          handleaddToDo = {handleaddToDo} 
          todoValue={todoValue}
          setTodovalue ={setTodovalue}/>
      <ToDoList handleDelete={handleDelete}todos = {todos}/>
    </>
  )
}

export default App
