
const TodoCard = (props) => {
  // eslint-disable-next-line react/prop-types
  const {children, handleDeleteTodo, index, handleEditTodo} = props

  return (
    <li className="todoItem">
      {/* Display the todotext */}
      {children} 
      <div className="actionsContainer">
        {/* Edit Button */}
        <button
          onClick={() => handleEditTodo(index)}
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>

        {/* Delete Button */}
          <button
          onClick={()=> handleDeleteTodo(index)}
          >
            <i className="fa-regular fa-trash-can"></i>
          </button>
      </div>
    </li>
  )
}

export default TodoCard