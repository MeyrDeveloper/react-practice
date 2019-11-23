import React from 'react';
import Recipe from './Recipe'
import PropTypes from 'prop-types'

const Menu = ({recipes = []}) => {
    return (
        <div className="recipes">
            {recipes.map((item,i) => {
                return <Recipe key={i} {...item} />
            })}
        </div>
    )
}

Menu.propTypes = {
    recipes: PropTypes.array.isRequired
}

export default Menu