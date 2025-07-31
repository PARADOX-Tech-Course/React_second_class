import { useState, useRef, useEffect } from "react";
import "./style/App.css";
import List from "./components/List";
import DisplayTodosState from "./components/DisplayTodosState";

function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  const addTodos = () => {
    const add = inputRef.current.value;
    if (add) {
      setTodos(prev => [...prev, 
        { id: Date.now(), context: add, complete: false }
      ]);
      inputRef.current.value = '';
    }
  };
  const deleteTodos = (deleteId) => {
    setTodos(prev => prev.filter(todo => todo.id !== deleteId));
  };
  const setComplete = (setId) => {
  setTodos(prev =>
    prev.map(todo =>
      todo.id === setId
        ? { ...todo, complete: !todo.complete }
        : todo
      )
    );
  };

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
            todo={todo}
            changeState={setComplete}
            onDelete={deleteTodos} 
          />
        )}
      </ul>
      <DisplayTodosState todos={todos} />
    </>
  );
}

export default App;
