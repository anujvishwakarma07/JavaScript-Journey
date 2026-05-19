import React, { use, useState } from 'react'
import {v4 as uuidv4} from 'uuid';
import './TodoList.css';


const TodoList = () => {
    const [items, setItems] = useState([{task : "sample task", id : uuidv4(), isMarked : false}]);
    const [task, setTask] = useState("");
    const addItem = () => {
        setItems((currItem) => {
            const newItem = [...currItem, {task : task, id : uuidv4(), isMarked: false} ];
            console.log(newItem);
            return newItem;
        })
    }
    const deleteTodo =(id) => {
        setItems((prevTodos) => {
            const delTodo = prevTodos.filter((item) => item.id != id);
            console.log(delTodo);
            return delTodo;
        });
    }

    const uppercaseTodos = () => {
        setItems((updatedItems) => {
             return updatedItems.map((item) => {
                return {
                    ...item, task : item.task.toUpperCase()
                }
            })
        })
        // const copyArr = items.map((item) => {
        //     return {
        //         ...item
        //     }
        // })
        // console.log(copyArr);
    }
    const upperCaseOne = (id) => {
        setItems((oldTodos) => {
            return  oldTodos.map((item) => {
                if(item.id == id) {
                    return {
                        ...item, task : item.task.toUpperCase()
                    }
                } else {
                    return item;
                }
            })
        })
    }
    const markAsDone = (id) => {
        setItems((prevTodos) => {
            return prevTodos.map((item) => {
                if(item.id === id) {
                    return {
                        ...item, isMarked: !item.isMarked
                    }
                }

                return item;
            })
        })
    }
  return (
    <div className="todo-container">
        <h3 className="todo-header">Todo List</h3>

        <div className="todo-input-group">
            <input 
                className="todo-input"
                onChange={(event) => setTask(event.target.value)} 
                type="text" 
                placeholder='Enter your task' 
                name='task' 
            />
            <button className="btn-primary" onClick={addItem}>Add</button>
        </div>

        <ul className="todo-list-wrapper">
            {
             items.map((item) => {
                return (
                    <li key={item.id} className="todo-item">
                        <span className={`todo-text ${item.isMarked ? 'marked' : ''}`}>
                            {item.task}
                        </span>
                        
                        <div className="todo-actions">
                            <button className="btn-sm btn-delete" onClick={() => deleteTodo(item.id)}>
                                Delete
                            </button>
                            <button className="btn-sm btn-action" onClick={() => upperCaseOne(item.id)}>
                                UpperCase
                            </button>
                            <button 
                                className={`btn-sm ${item.isMarked ? 'btn-unmark' : 'btn-mark'}`} 
                                onClick={() => markAsDone(item.id)}
                            >
                                {item.isMarked ? "Unmark" : "Mark as done"}
                            </button>
                        </div>
                    </li>
                )
             })
            }
        </ul>
        <button className="btn-primary btn-uppercase-all" onClick={uppercaseTodos}>
            Uppercase All Tasks
        </button>
    </div>
  )
}

export default TodoList