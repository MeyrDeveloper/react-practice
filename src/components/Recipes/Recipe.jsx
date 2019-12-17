import React from 'react';
import IngredientsList from './IngredientsList.jsx'
import Instructions from './Instructions.jsx'

const Recipe = ({name, ingredients, steps}) => {
    return (
        <div>
            <h2>{name}</h2>

            <IngredientsList list={ingredients} />
            <Instructions list={steps}>
                <h2>Some title</h2>
            </Instructions>
        </div>
    )
}

export default Recipe