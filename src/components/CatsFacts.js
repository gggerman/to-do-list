import React, { useState } from 'react'

export const CatsFacts = (props) => {
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (input) {
            props.onSubmit(input)
        }

        setInput('');
    }

    return (
        <form className="to-do-form" onSubmit={handleSubmit}>
            <input className="to-do-input" type="number" min="0" max="332" placeholder="Random cats fatcs..." 
            value={input} name="text" onChange={handleChange}/>
            <button className="to-do-button">Add facts</button>
        </form>
    )
}
