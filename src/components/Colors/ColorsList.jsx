import React from 'react'
import PropTypes from 'prop-types'
import Colors from './Colors'

const ColorsList = ({colors = [], rateColor = f => f, removeColor = f => f}) => {
    return (
        <div className="item--list">
            {
                !colors.length ? 
                    <p>No colors listed</p> :
                    colors.map((item, i) => {
                        return (
                            <Colors 
                                {...item} 
                                key={item.id}
                                onRate={(rating) => rateColor(rating, item.id)}
                                onRemove={() => removeColor(item.id)}
                                >
                            </Colors>
                        )
                    })
            }
        </div>
    )
}

ColorsList.propTypes = {
    colors: PropTypes.array,
    rateColor: PropTypes.func,
    removeColor: PropTypes.func
}

export default ColorsList