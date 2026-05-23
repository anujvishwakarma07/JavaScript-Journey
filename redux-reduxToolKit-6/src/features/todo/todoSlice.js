import { createSlice, nanoid } from '@reduxjs/toolkit'
import { act } from 'react';

const initialState = {
    todos: [{
        id: "sbc",
        task: "Task",
        isMark: false,

    }],
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        // state, sctions
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                task: action.payload,
                isMark: false,
            }

            // We don't need to make an copy of the object to make changes in the object , it all manages by the redux.
            state.todos.push(newTodo);
        },

        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id != action.payload);
        },

        markAsDone: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.isMark = true;
            }
        }
    }
})

export const {addTodo, deleteTodo, markAsDone} = todoSlice.actions;
export default todoSlice.reducer;