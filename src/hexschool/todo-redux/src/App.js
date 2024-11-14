import { useState } from 'react';

const initState = {
  id: '',
  text: '',
};

function TodoList() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '這是一段話'
    }
  ]);
  const [newTodoText, setNewTodoText] = useState(''); 
  const [editState, setEditState] = useState(initState)

  function addTodo() {
    const newTodo = {
      id: todos.length + 1,
      text: newTodoText,
    };
    setTodos([...todos, newTodo]);
    setNewTodoText('');
  }

  const editTodo = (e) => {
    setEditState({
      ...editState,
      text: e.target.value,
    });
  }

  const saveEdit = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const newTodo = [...todos];
    newTodo[index] = editState;
    setTodos(newTodo);
    setEditState(initState);
  }
  const cancelEdit = () => {
    setEditState(initState);
  }

  const deleteTodo = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodos(newTodo);
  }

  return (
    <div>
      <input type='text' value={newTodoText} onChange={(e) => 
        setNewTodoText(e.target.value)
      }/>
      <button type='button' onClick={() => addTodo()}>
        Add Todo
      </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.id !== editState.id && (
              <div>
                {todo.text}
                <button
                  type='button'
                  onClick={() => {
                    setEditState({
                      text: todo.text,
                      id: todo.id,
                    });
                  }}
                >
                  編輯
                </button>
                <button
                  type='button'
                  onClick={() => {
                    deleteTodo(todo.id);
                  }}
                >
                  刪除
                </button>
              </div>
            )}
            {todo.id === editState.id && (
              <div>
                <input
                  type='text'
                  value={editState.text}
                  onChange={(e) => editTodo(e)}
                />
                <button type='button' onClick={() => saveEdit(todo.id)}>
                  確認
                </button>
                <button type='button' onClick={() => cancelEdit()}>
                  取消
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
