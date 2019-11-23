import React from 'react'

export const Member = ({userId, id, title, body}) => {
    return (
        <div className="member">
            <h1>{userId} : {id}</h1>
            <h5>{title}</h5>
            <p>{body}</p>
        </div>
    )
}