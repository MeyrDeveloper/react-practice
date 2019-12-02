import React from 'react'
import {NavLink} from 'react-router-dom'


export default (props) => {
    console.log(props)
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="/about">
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about/history">
                        History
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about/location" >
                        Location
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about/service" >
                        Service
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}