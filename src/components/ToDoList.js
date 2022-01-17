import React, { useState } from 'react'
import { ToDoForm } from './ToDoForm'

export const ToDoList = () => {
    const [toDos, setToDos] = useState([]);

    const addToDo = toDo => {
        if (!toDo.text || /^\s*$/.test(toDo.text)) {
            return;
        }

        const newToDos = [toDo, ...toDos];

        setToDos(newToDos);
    }
    
    return (
        <div>
            <h1>To Do List</h1>
            <ToDoForm onSubmit={addToDo}/>
        </div>
    )
}