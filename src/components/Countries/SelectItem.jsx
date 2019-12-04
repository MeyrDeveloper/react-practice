import React from 'react'

const Selector = ({data, selected}) => {
    return (
    <select defaultValue={selected}>
        {data.map((name, i) => (
            <option key={i}>{name}</option>
        ))}
    </select>
)}

export default Selector