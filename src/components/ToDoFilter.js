import React, { useState } from 'react'

export const ToDoFilter = (props) => {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit(input)

        setInput('');
    }

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    return (
        <>
            <form className="to-do-form" onSubmit={handleSubmit}>
                        <input type="text" placeholder="Filter your tasks" value={input} name="text"
                        className="to-do-input" onChange={handleChange}/>
                        <button className="to-do-button">Filter</button>          
            </form>
        </>
    )
}
