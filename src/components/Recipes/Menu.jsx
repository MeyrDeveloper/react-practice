import React from 'react';
import Recipe from './Recipe.jsx'

const Menu = ({recipes=[]}) => {
    console.log('some')
    return (
        <div>
            {recipes.map((item,i) => {
                return <Recipe key={i} {...item} />
            })}
        </div>
    )
}


export default Menu