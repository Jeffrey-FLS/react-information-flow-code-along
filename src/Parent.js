import React, {Component} from 'react'
import {getRandomColor} from './randomColorGenerator.js'
import Child from './Child'

class Parent extends Component {

    constructor() {
        super()
        this.state = {
            color: getRandomColor()
        }
    }

    childClickHandler = () => {
        this.setState({
            color: getRandomColor()
        })
    };

    render() {
        return (
            <div className="parent" style={{backgroundColor: this.state.color}}>
                <Child clickHandler={this.childClickHandler} color={getRandomColor()}/>
                <Child clickHandler={this.childClickHandler} color={getRandomColor()}/>
            </div>
        )
    }
}

export default Parent
