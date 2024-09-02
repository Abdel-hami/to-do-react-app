import { useState } from "react";

export default function ToDoListInput(props) {
  const {handleaddToDo} = props;
  const [toDoValue,setToDOValue] = useState("")
  return (
      <header>
        <input  type="text" 
                placeholder="Enter your task"
                value={toDoValue}
                onChange={(e)=>{
                  setToDOValue(e.target.value)
                }}/>
        <button onClick={()=>{
           handleaddToDo(toDoValue)
           setToDOValue("")}}>Add</button>
      </header>
    )
}
