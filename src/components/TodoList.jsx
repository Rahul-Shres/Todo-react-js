import TodoCard from "./TodoCard"

const TodoList = (prop) => {
  const { todos, handleEditTodo, handleDeleteTodo} = prop
  return (
    <ul>
      {/* Map through todos and render a TodoCard for each */}
      {todos.map((todo, todoIndex)=>
      <TodoCard
      key={todoIndex}
      index={todoIndex}
      handleDeleteTodo={handleDeleteTodo}
      handleEditTodo={handleEditTodo}
      >
        <p>{todo}</p>
      </TodoCard>
      )}
    </ul>
  )
}

export default TodoList