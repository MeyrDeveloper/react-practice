import React, {Component} from "react"
import PropTypes from 'prop-types'
import Star from './Star.jsx'

const StarRating = ({starSelected=0, totalStars=5, onRate=f=>f}) => {

        return (
            <div>
                {[...new Array(totalStars)].map((item, i) => {
                    return (
                        <Star key={i} selected={i < starSelected} onClick={() => onRate(i + 1)} />
                    )
                })}
                <p>{starSelected} of {totalStars}</p>
            </div>
        )
}

StarRating.propTypes = {
    starSelected: PropTypes.number,
    totalStars: PropTypes.number
}


export default StarRating