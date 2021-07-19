import React from 'react'
import "./intro.css"
function intro({name}) {
    return (
        <div className = {`intro ${name}`} id ="intro">
            <p>This is Intro</p>
        </div>
    )
}

export default intro
