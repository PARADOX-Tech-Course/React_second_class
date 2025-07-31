function Counter({ setValue }) {
  return (
    <button onClick={() => setValue(prev => prev + 1)}>카운트 증가</button>
  )
}

export default Counter