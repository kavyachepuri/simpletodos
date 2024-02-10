import './index.css'

const TodoItem = props => {
  const {details, updateTodoList} = props
  const {id, title} = details
  const onClickDelete = () => {
    updateTodoList(id)
  }
  return (
    <li className="todo-item">
      <p className="title">{title}</p>
      <button type="button" className="delete-btn" onClick={onClickDelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
