import { useState } from 'react';
import './App.css';

function TodoList() {
  const [todos, setTodos] = useState([]); //할일 여러개인 목록
  const [task, setTask] = useState(""); //할일 1개

  const 추가버튼 = () => {
    setTodos([...todos,task]);
    setTask('');
  }

  const 삭제버튼 = (index) => {           
    const 삭제후목록 = todos.filter((todo, i)  => i   !==  index );
    setTodos(삭제후목록);
  }

  return (
    <div className="App">
      <h1>할일 리스트</h1>
      <h3>할일 추가하기</h3>
      <input type='text' 
              value={task}   
              onChange={(e) => setTask(e.target.value)}        
      />
      <button onClick={추가버튼}>추가하기</button>
      <h3>할일 리스트 목록보기</h3>
      { todos.map( (todos, index) =>  (
        <li key={index}>
            {todos}
          <button  onClick={ () => 삭제버튼( index )} >삭제하기</button>
        </li>
      ) )}
    </div>
  );
}

export default TodoList;