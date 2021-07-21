import React from 'react'
import "./testimonials.css"
function testimonials({name}) {
    return (
        <div className = {`testimonials ${name}`} id = "testimonial">
            <p>This is testimonials</p>
        </div>
    )
}

export default testimonials
