import React from 'react'
import PropTypes from 'prop-types'
import Colors from './Colors'

const ColorsList = (props) => {
    return (
        <div className="item--list">
            {
                !props.colors.length ? 
                    <p>No colors listed</p> :
                    props.colors.map((item, i) => {
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