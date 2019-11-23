import React, {Component} from 'react';
import '../../App.css';
import {v4} from 'uuid'
import AddColorForm from './AddColorForm'
import ColorsList from './ColorsList';
import "../../index.css"

class App extends Component {

    state = {
        colors: this.props.colors || []
    }
    
    newColor = (title, color) => {
        
        let colors = {
            title,
            color,
            rating: 0,
            id: v4()
        }
        this.setState(
            {
                colors: [
                    ...this.state.colors,
                    colors
                ]
            }
        )
    }

    rateColor = (rating, id) => {
        this.setState({
            colors: this.state.colors.map((item, i) => {
                return (id === item.id) ? {
                    ...item,
                    rating
                } : item                
            })
        })
    }

    removeColor = (id) => {
        this.setState({
            colors: this.state.colors.filter(item => {
                return id != item.id
            })
        })
    }

    render() {
        const {colors} = this.state
        return (
            <div className="app">
                <AddColorForm addColor={this.newColor}/>
                <ColorsList colors={colors} rateColor={this.rateColor} removeColor={this.removeColor}></ColorsList>
            </div>
        )
    }
}

export default App