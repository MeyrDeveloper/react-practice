import React from 'react'

const Selector = ({data, selected}) => {
    console.log(data)
    console.log(selected)
    return (
    <select defaultValue={selected}>
        {data.map((name, i) => (
            <option key={i}>{name}</option>
        ))}
    </select>
)}

export default Selector