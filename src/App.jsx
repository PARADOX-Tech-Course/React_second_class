import { useState, useRef, useEffect } from "react";
import "./App.css";
import "./List.css";

function List({ id, detail, onDelete }) {
  return (
    <li className="todo">
      {detail}
      <button className="remove" onClick={() => onDelete(id)}>
        삭제
      </button>
    </li>
  );
}

function DisplayTodosState({ todos }) {
  const [count, setCount] = useState(0);
  
  return (
    <p>
      [ ToDo의 개수: {todos.length}개, 완료한 Todo: {count}개 ]
    </p>
  )
}

function manageLocalStorage() {

}

function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);
  const addTodos = () => {
    const add = inputRef.current.value;
    if (add) {
      setTodos(prev => [...prev, 
        { id: Date.now(), context: add }
      ]);
      inputRef.current.value = '';
    }
  };

  const deleteTodos = (deleteId) => {
    setTodos(prev => prev.filter(todo => todo.id !== deleteId));
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <>
      <h1>To-Do List</h1>
      <input
        placeholder="내용을 입력하세요"
        ref={inputRef}
      />
      <button onClick={addTodos}>추가</button>
      <ul>
        {todos.map(todo => 
          <List 
            key={todo.id} 
            id={todo.id}
            detail={todo.context} 
            onDelete={deleteTodos} 
          />
        )}
      </ul>
      <DisplayTodosState todos={todos} />
    </>
  );
}

export default App;
