import React from 'react'
import "./portfolio.css"
function portfolio({name}) {
    return (
        <div className = {`portfolio ${name}`} id = "portfolio">
            <p>This is free</p>
        </div>
    )
}

export default portfolio
