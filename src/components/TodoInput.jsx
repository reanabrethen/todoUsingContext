import {useState } from "react"
// import {TodoInputContext} from '../context/context'
import Button from './Button'

function TodoInput() {
    const [todoInput, setTodoInput] = useState('')
    //dont need addTodo or handleOnSubmit due to making button a component
    // const {addTodo} = useContext(TodoInputContext)

    // const handleOnSubmit = (e) =>{
    //     e.preventDefault()
    //         addTodo(todoInput)
    //         setTodoInput("")
    // }

  return (
    <form>
        <input
            type="text" 
            value={todoInput} 
            onChange={(e)=>setTodoInput(e.target.value)} />
        <Button todoInput={todoInput} setTodoInput={setTodoInput}>Submit</Button>
    </form>
  )
}

export default TodoInput