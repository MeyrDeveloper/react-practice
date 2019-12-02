import React from 'react'
import MainMenu from '../routers/MainMenu'


export default ({children}) => {
    return (
        <div className="page">
            <MainMenu></MainMenu>
            {children}
        </div>
    )
}