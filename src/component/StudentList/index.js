import React, { Component } from 'react'
import {Prompt} from 'react-router-dom'

export default class index extends Component {
    constructor (props) {
        super(props)
        this.handleClick3 = function (){
            this.setState({n: this.state.n+2 })
        }
    }
    state = {
        n: 0
    }
    handleClick () {
        this.setState({n: this.state.n+1 })
    }
    handleClick2 = () => {
        this.setState({n: this.state.n - 1})
    }
    render() {
        return (
            <div>
                <Prompt when={this.state.n % 2 === 0}
                    message={'跳转吗'}>
                </Prompt>
                学生列表 {this.state.n}
                <button onClick={ this.handleClick2 }>-</button>
                <button onClick={ this.handleClick.bind(this) }>+</button>
                <button onClick={ this.handleClick3.bind(this) }>+</button>
            </div>
        )
    }
}
