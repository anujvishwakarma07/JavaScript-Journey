import React, { use, useState } from 'react'
import {v4 as uuidv4} from 'uuid';


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
    <div>
        <h3>Todo List</h3>

        <input onChange={(event) => setTask(event.target.value)
        } type="text" placeholder='Enter you task' name='task' />
        <button onClick={addItem}>Add</button>

        <ul>
            {
             items.map((item) => {
                return <li key={item.id} style={{textDecoration : item.isMarked ? "line-through" : "none"}}><span>{item.task}</span> &nbsp; &nbsp; &nbsp; <button onClick={() => deleteTodo(item.id)}>Delete</button>
                &nbsp;&nbsp;&nbsp;
                <button onClick={()=>upperCaseOne(item.id)}>UpperCaseOne</button>
                &nbsp;&nbsp;&nbsp;
                <button onClick={() => markAsDone(item.id)}>{item.isMarked ? "Unmark" : "Mark as done"}</button>
                </li>

                
             })
            }
        </ul>
        <button onClick={uppercaseTodos}>UppercaseAll</button>
    </div>
  )
}

export default TodoList