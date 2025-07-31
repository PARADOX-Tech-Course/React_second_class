import '../style/DisplayTodosState.css';
import { useState, useEffect } from 'react';

function DisplayTodosState({ todos }) {
  const [count, setCount] = useState(0);

  // 수정 코드(한번만 계산)
  useEffect(() => {
    const completedCount = todos.filter(todo => todo.complete).length;
    setCount(completedCount);
  }, [todos]);
  
  return (
    <p>
      [ ToDo의 개수: <strong>{todos.length}</strong>개,
       완료한 Todo: <strong>{count}</strong>개 ]
    </p>
  )
}

export default DisplayTodosState;