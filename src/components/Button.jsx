import { useContext } from 'react'
import {TodoInputContext} from '../context/context'

function Button({todoInput, setTodoInput}) {
    const {addTodo} = useContext(TodoInputContext)

    const handleOnSubmit = (e) =>{
        e.preventDefault()
        addTodo(todoInput)
        setTodoInput('')
    }
  return (
    <button onClick={handleOnSubmit}>Submit</button>
  )
}

export default Button