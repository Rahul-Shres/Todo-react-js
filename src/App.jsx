import { useEffect, useState } from "react"
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import './App.css'

export default function App() {
  // Define state for the list of todos and the current input value
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState('');

  // Function to save todos to local storage
  function persistData(newList){
    localStorage.setItem('todos', JSON.stringify({ todos: newList}))
  }

  // Function to add a todo
  function handleAddTodos(newTodo){
    const newTodoList = [newTodo, ...todos] // Create a new array with the added todo
    persistData(newTodoList) // Save to local storage
    setTodos(newTodoList) // Update state
  }

  // Function to delete a todo
  function handleDeleteTodo(index){
    const newTodoList = todos.filter((todo, todoIndex) => todoIndex !== index)
    persistData(newTodoList) // Save to local Storage
    setTodos(newTodoList) // update sate
  }

  // Function to edit a todo
  function handleEditTodo(index) {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited) // set the input value to the todo being edited
    handleDeleteTodo(index) // Delete the todo from the list
  }

  // Effect Hook to loead todos from local storage on component mount
  useEffect(() => {
    if(!localStorage) return

    let localTodos = localStorage.getItem('todos')
    if(!localTodos) return

    console.log(localTodos)
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos) // Set the todos from local storage
  }, [])
  return (
    <>
    {/* TodoInput component for adding new todos */}
     <TodoInput 
        todoValue={todoValue}    
        setTodoValue={setTodoValue}
        handleAddTodos={handleAddTodos} 
     />
     {/* TodoList component for displaying and managing todos */}
     <TodoList 
      handleEditTodo={handleEditTodo}
      handleDeleteTodo={handleDeleteTodo}
      todos={todos}
     />
    </>
  )
}