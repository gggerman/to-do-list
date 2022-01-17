import React, { useState } from 'react'

export const ToDoForm = (props) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // props.onSubmit({
        //     id: Math.floor(Math.random() * 10000),
        //     text: input
        // })

        setInput('');
    }

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    return (
        <form className="to-do-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Add a todo" value={input} name="text" className="to-do-input" 
            onChange={handleChange}/>
            <button className="to-do-button">Add To Do</button>
        </form>
    )
}
