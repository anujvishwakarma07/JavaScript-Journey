import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

const AddTodo = () => {
    const [task, setTask] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(task);
        setTask("")
        dispatch(addTodo(task));
    }

    return (
        <div className="mb-6">
            <h2 className="text-xl font-bold uppercase mb-2 text-black text-left">Add Your Todo</h2>
            <form action="" onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0">
                <input 
                    className="flex-1 border-4 border-black bg-white p-3 text-lg font-bold focus:outline-none focus:bg-gray-100 text-black placeholder-gray-500" 
                    type="text" 
                    onChange={(e) => setTask(e.target.value)} 
                    placeholder="ENTER YOUR TASK..."
                    value={task} 
                />
                <button 
                    type="submit"
                    className="mt-3 sm:mt-0 sm:ml-3 border-4 border-black bg-blue-500 hover:bg-blue-400 text-black font-black uppercase px-6 py-3 text-lg transition-colors cursor-pointer shadow-[4px_4px_0_0_#000]"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default AddTodo