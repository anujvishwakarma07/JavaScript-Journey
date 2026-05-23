import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddTodo from './AddTodo';
import { deleteTodo, markAsDone } from '../features/todo/todoSlice';

const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const deleteClick  = (id) => {
    dispatch(deleteTodo(id))
  }

  const doneTask = (id) => {
    dispatch(markAsDone(id));
  }
  console.log(todos);
  return (
    <div className="max-w-3xl mx-auto mt-12 mb-12 bg-white border-4 border-black p-6 sm:p-10 shadow-[8px_8px_0_0_#000]">
      <h1 className="text-4xl font-black uppercase tracking-widest border-b-4 border-black pb-4 mb-8 text-black">
        Todo List
      </h1>

      <AddTodo />
      
      <ul className="mt-8 space-y-4 text-left">
        {todos.map((todo) => (
          <li key={todo.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border-4 border-black bg-white shadow-[4px_4px_0_0_#000]">
            <div className={`text-xl font-bold mb-4 sm:mb-0 break-all ${todo.isMark ? 'line-through text-gray-500' : 'text-black'}`}>
              {todo.task}
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <button 
                onClick={() => doneTask(todo.id)} 
                className="flex-1 sm:flex-none border-2 border-black bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-4 py-2 uppercase text-sm transition-colors cursor-pointer"
              >
                Done
              </button>
              <button 
                onClick={() => deleteClick(todo.id)} 
                className="flex-1 sm:flex-none border-2 border-black bg-red-500 hover:bg-red-400 text-black font-bold px-4 py-2 uppercase text-sm transition-colors cursor-pointer"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo