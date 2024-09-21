
const TodoInput = (prop) => {
  const {handleAddTodos, todoValue, setTodoValue} = prop
  return (
   <header>
    {/* Input Filed for new Todo */}
    <input 
    type="text"
    value={todoValue}
    onChange={(e) => setTodoValue(e.target.value)}
    placeholder="Enter todo..."
    />
    {/* Button to add new todo */}
    <button 
     onClick={() => {
      handleAddTodos(todoValue)
      setTodoValue('') // Clear input after adding
    }}
    >
     
      Add
    </button>
   </header>
  )
}

export default TodoInput