import React from 'react';

const IngredientItem = ({name, amount, measurement}) => (
    <li>
        <span>{name} </span>
        <span>{amount} </span>
        <span>{measurement}</span>
    </li>
)

export default IngredientItem