import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/todoList'; 
import './App.css';

function App() {
  const [listTodo, setListTodo] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]); // Track completed tasks

  let addList = (inputText) => {
    if (inputText !== '') setListTodo([...listTodo, inputText]);
  };

  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    const removedItem = newListTodo.splice(key, 1);
    
    // Add removed item to completed tasks
    setCompletedTasks([...completedTasks, ...removedItem]);
    setListTodo([...newListTodo]);
  };

  return (
    <div className='main-container'>
      <div className='center-container'>
        <TodoInput addList={addList} />
        <h1 className='app-heading'>To-Do</h1>
        <hr />
        {listTodo.map((listItem, i) => (
          <TodoList key={i} index={i} items={listItem} deleteItem={deleteListItem} />
        ))}

        
        {completedTasks.length > 0 && (
          <>
            <h2 className='completed-heading'>Completed Tasks</h2>
            <ul>
              {completedTasks.map((task, i) => (
                <li key={i} className='completed-item'>{task}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
