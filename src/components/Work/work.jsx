import React from 'react'
import "./work.css"
function work({name}) {
    return (
        <div className = {`work ${name}`} id ="work">
            <p>This is work</p>
        </div>
    )
}

export default work
