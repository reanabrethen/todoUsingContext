import { useEffect, useState } from 'react'

import './App.css'
import TodoInput from './components/TodoInput'
import {TodoContext, TodoInputContext} from './context/context'
import {v4 as uuidv4} from 'uuid'
import Todo from './components/Todo'

function App() {
  const todoArray = window.localStorage.getItem('todoList') ? JSON.parse(window.localStorage.getItem('todoList')) : []
  const [todoList, setTodoList] = useState(todoArray)

  
  function addTodo(todo){
    const newTodo = {
      todo,
      isDone: false,
      id: uuidv4()
    }
    //NOT THE WAY TO DO IT BELOW
    // const copy = todoList //pointing -->reference , directly mutates & does not actually copy; 'shallow' copy where spread operators can copy what is inside of array and not array itself
    // copy.push(newTodo)
    setTodoList([...todoList, newTodo]) //(spread operators...) spread out what currently exsists -->makes copy of array, then add what else is needed
  }

  useEffect(()=>{
    window.localStorage.setItem('todoList', JSON.stringify(todoList))
  }, [todoList])


    function completedTodo(id){
      let newTodoList = todoList.map((item)=>{
        if(item.id === id){
          item.isDone = !item.isDone
        }
        return item
      })
      setTodoList(newTodoList)
    }
      

    function deleteTodo(id){
      let newTodoList = todoList.filter((item)=>{
        return item.id !== id
      })
      setTodoList(newTodoList)
    }


  function renderTodoList(){
    return todoList.map(item =>{
      return (
       <TodoContext.Provider key={item.id} value={{todo: item, deleteTodo, completedTodo}}>  
          <Todo/>
       </TodoContext.Provider>
      )
    })
  }

  return (
    <>
    <TodoInputContext.Provider value={{addTodo}}> 
        <TodoInput/>
    </TodoInputContext.Provider>
    {
     renderTodoList()
    }
    </>
  )
}

export default App
