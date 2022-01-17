import React from 'react'

export const ResetFilter = ({ resetFilter }) => {

    return (
        <button className="to-do-reset-button" onClick={() => resetFilter()}>Reset Filter</button>
    )
}
