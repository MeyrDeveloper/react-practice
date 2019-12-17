import React from 'react';
import IngredientItem from './IngredientItem.jsx'

const IngredientsList = ({list}) => {

    return (
        <ul>
            {list.map((item, i) => (
                <IngredientItem key={i} {...item} />
            ))}
        </ul>
    )
}

export default IngredientsList