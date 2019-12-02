import React, {Component} from 'react'
import {connect} from 'react-redux'
import StarRating from './StarRating'
import PropTypes from 'prop-types'
import {removeColor, rateColor} from '../../../store/actions'
import {withRouter} from 'react-router-dom'

class Colors extends Component {
    
    constructor(props) {
        super(props)
        this.style = {backgroundColor: '#CCC'}
    }

    render() {
        console.log(this.props)
        let {title, color, rating, id, onRate, onRemove} = this.props
        return (
            <div className="item" style={this.style}>
                <span onClick={() => onRemove(id)}>X</span>
                <h5>{title}</h5>
                <div className="back" style={{backgroundColor: color}}></div>
                <StarRating starSelected={rating} totalStars={5} onRate={(rating) => onRate(id, rating)}></StarRating>
            </div>
        )
    }

    componentDidMount() {
        // console.log(this)
    }

    shouldComponentUpdate(nextProps) {
        if(this.props.rating !== nextProps.rating) {
            this.style = null
            return true
        } else {
            return false
        }
        return true
    }

    static propTypes = {
        title: PropTypes.string,
        color: PropTypes.string,
        rating: PropTypes.number,
        onRate: PropTypes.func,
        onRemove: PropTypes.func
    }

    static defaultProps = {
        title: 'default',
        color: '#000000',
        rating: 0,
    }
    
    // static contextTypes = {
    //     store: PropTypes.object.isRequired
    // }
}



export default withRouter(connect(state => {
    return ({
      state  
    })
}, dispatch => {
    return ({
        onRate(id, rating) {
            dispatch(rateColor(id, rating))
        },
        onRemove(id) {
            dispatch(removeColor(id))
        }
    })}
)(Colors))