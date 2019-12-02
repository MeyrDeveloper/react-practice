import React from 'react'
import {NavLink} from 'react-router-dom'

export default () => {
    return (
        <nav>
            <NavLink to="/">
                Home
            </NavLink>
            <NavLink to="/about">
                About
            </NavLink>
            <NavLink to="/contact">
                Contact
            </NavLink>
            <NavLink to="/events">
                Events
            </NavLink>
            <NavLink to="/product">
                Product
            </NavLink>
        </nav>
    )
}