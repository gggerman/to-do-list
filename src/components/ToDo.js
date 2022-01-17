import React, { useState } from 'react';
import { ToDoForm } from './ToDoForm';
import { ToDoList } from './ToDoList';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

export const ToDo = ({ toDos, completeToDo, removeToDo, updateToDo }) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateToDo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <ToDoForm edit={edit} onSubmit={submitUpdate} />
    }

    return toDos.map((toDo, index) => (
        <div className={toDo.isComplete ? 'to-do-row complete' : 'to-do-row'} key={index}>
            <div key={toDo.id} onClick={() => completeToDo(toDo.id)}>
                {toDo.text}
            </div>
            <div className="icons">
                <RiCloseCircleLine onClick={() => removeToDo(toDo.id)} className="deleted-icon"/>
                <TiEdit onClick={() => setEdit({ id: toDo.id, value: toDo.text})} className="edit-icon"/>
            </div>
        </div>
    ));
}