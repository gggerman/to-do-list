import React, { useState } from 'react'
import { ToDoForm } from './ToDoForm'
import { ToDo } from './ToDo';
import { ToDoFilter } from './ToDoFilter';
import { ResetFilter } from './ResetFilter';

export const ToDoList = () => {
    const [toDos, setToDos] = useState([]);
    const [filteredToDos, setFilteredToDos] = useState([]);

    const addToDo = toDo => {
        if (!toDo.text || /^\s*$/.test(toDo.text)) {
            return;
        }

        const newToDos = [toDo, ...toDos];

        setToDos(newToDos);
        setFilteredToDos([]);
        console.log(toDo, toDos);
    }
    
    const updateToDo = (toDoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setToDos(prev => prev.map(item => (item.id === toDoId ? newValue : item)))
    }

    const removeToDo = id => {
        const removeArr = [...toDos].filter(toDo => toDo.id !== id);

        setToDos(removeArr);
    }

    const completeToDo = id => {
        let updatedToDos = toDos.map(toDo => {
            if (toDo.id === id) {
                toDo.isComplete = !toDo.isComplete
            }
            return toDo
        });
        setToDos(updatedToDos);
    }

    const filterToDos = word => {
        let filteredArr = [...toDos].filter(toDo => toDo.text.includes(word));

        setFilteredToDos(filteredArr);
    }

    const resetFilter = (e) => {
        setFilteredToDos([]);
    }

    return (
        <div>
            <h1>What's the plan for today?</h1>
            <ToDoForm onSubmit={addToDo}/>
            <ToDoFilter onSubmit={filterToDos}/>
            <ResetFilter resetFilter={resetFilter}/>
            <ToDo toDos={toDos} filteredToDos={filteredToDos} completeToDo={completeToDo} removeToDo={removeToDo} updateToDo={updateToDo}/>
        </div>
    )
}