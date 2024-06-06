import { useContext } from "react"
import {TodoContext} from '../context/context'

function Todo() {
    const {todo:{todo, id, isDone}, deleteTodo, completedTodo} = useContext(TodoContext)  //destructuring context we are providing it and then referencing item
  return (
    <div>
        <span style={{textDecoration: isDone ? 'line-through' : ""}}>{todo}</span>
        <button onClick={()=>completedTodo(id)}>Done</button>
        <button onClick={()=>deleteTodo(id)}>Delete</button>
    </div>
  )
}

export default Todo