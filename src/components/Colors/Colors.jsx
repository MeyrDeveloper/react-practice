import React, {Component} from 'react'
import StarRating from './StarRating'
import PropTypes from 'prop-types'

class Colors extends Component {
    
    constructor(props) {
        super(props)

        this.style = {backgroundColor: '#CCC'}
    }

    render() {
        let {title, color, rating, onRate, onRemove} = this.props
        return (
            <div className="item" style={this.style}>
                <span onClick={onRemove}>X</span>
                <h5>{title}</h5>
                <div className="back" style={{backgroundColor: color}}></div>
                <StarRating starSelected={rating} totalStars={5} onRate={onRate}></StarRating>
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
        onRate: f => f,
        onRemove: f => f
    }
}



export default Colors