import '../style/DisplayTodosState.css';
import { useState, useEffect } from 'react';

function DisplayTodosState({ todos }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(0);
    for (const todo of todos) {
      if (todo.complete === true) setCount(count+1);
    }
  }, [todos]);
  
  return (
    <p>
      [ ToDo의 개수: <strong>{todos.length}</strong>개,
       완료한 Todo: <strong>{count}</strong>개 ]
    </p>
  )
}

export default DisplayTodosState;