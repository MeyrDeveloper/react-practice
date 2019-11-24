import React from 'react'
import PropTypes from 'prop-types'
import Colors from './Colors'

const ColorsList = ({colors, onRate, onRemove}) => {
    console.log(colors)
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
    onRate: PropTypes.func,
    onRemove: PropTypes.func
}

// ColorsList.contextTypes = {
//     store: PropTypes.object.isRequired
// }

export default ColorsList