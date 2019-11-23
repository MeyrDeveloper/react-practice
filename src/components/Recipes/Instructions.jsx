import React from 'react';

const Instructions = (props) => {
    console.log(props)
    return (
        <div>
            <h5>Steps</h5>
            {props.children}
            <ul>
                {props.list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </div>
    )
}
    


export default Instructions