import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createTodo, removeTodo, saveEditTodo } from './slice/todosSlice';
import './App.css'

const initState = {
  id: '',
  text: '',
};

function TodoList() {
  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     text: '這是一段話'
  //   }
  // ]);
  const todos = useSelector((state) => {
    return state.todos
  });

  const [newTodoText, setNewTodoText] = useState('');
  const [editState, setEditState] = useState(initState)
  const dispatch = useDispatch()

  const addTodo = () => {
    dispatch(
      createTodo({
        id: todos.length + 1,
        text: newTodoText,
      }),

    );
    setNewTodoText('');
  }
  const deleteTodo = (id) => {
    dispatch(
      removeTodo(id),
    );
  }

  const editTodo = (e) => {
    setEditState({
      ...editState,
      text: e.target.value,
    })
  }

  const saveEdit = (id) => {
    const newTodo = [...todos];
    newTodo[id] = editState
    setEditState(newTodo)
    console.log(editState)
    console.log(newTodo)
    dispatch(
      saveEditTodo(
        {
          id: id,
          text: editState.text,
        })
    )
  }

  const cancelEdit = () => {
    setEditState(initState);
  }

  return (
    <div className='todoList'>
      <div className="todo-input">
        <input type='text' value={newTodoText}
          onChange={(e) =>
            setNewTodoText(e.target.value)
          }
        />
        <button type='button'
          onClick={() => addTodo()}
        >
          Add Todo
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.id !== editState.id && (
              <div>
                <span>{todo.text}</span>
                <button
                  type='button'
                  onClick={(e) => {
                    setEditState({
                      id: todo.id,
                      text: todo.text,
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
                <button type='button'
                  onClick={() => saveEdit(todo.id)}
                >
                  確認
                </button>
                <button type='button'
                  onClick={() => cancelEdit()}
                >
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
