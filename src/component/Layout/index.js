import React, { Component } from 'react'
import './index.scss'
import PropTyps from 'prop-types'

export default class Layout extends Component {
    static PropTyps = {
        header: PropTyps.element,
        aside: PropTyps.element,
        children: PropTyps.element
    }

    render() {
        return (
            <div className='container'>
                <div className="header">
                    {this.props.header}
                </div>
                <div className="middle">
                    <aside className="aside">
                        {this.props.aside}
                    </aside>
                    <div className="main">
                        { this.props.children }
                    </div>
                </div>
            </div>
        )
    }
}
