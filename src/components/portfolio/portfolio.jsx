import React from 'react'
import "./portfolio.css"
function portfolio({name}) {
    return (
        <div className = {`portfolio ${name}`} id = "portfolio">
            <h1>Portfolio</h1>
            <ul>
                <li>Featured</li>
                <li>Web App</li>
                <li>Mobile App</li>
                <li>Design</li>
                <li>Content creator</li>
            </ul>
        </div>
    )
}

export default portfolio
