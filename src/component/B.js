import React from 'react'
import ctx from '../Context'

function B () {
    return (
        <ctx.Consumer>
            {value => <div>{value}</div>}
        </ctx.Consumer>
    )
}

export default B


  