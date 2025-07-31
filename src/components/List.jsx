import "../style/List.css";

function List({ todo, changeState, onDelete }) {
  return (
    <li className={todo.complete?"todo end":"todo"}>
      {todo.context}
      <button className="complete" onClick={() => changeState(todo.id)}>
        완료
      </button>
      <button className="remove" onClick={() => onDelete(todo.id)}>
        삭제
      </button>
    </li>
  );
}

export default List;