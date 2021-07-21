
import React, {  useEffect, useRef } from 'react';
import "./intro.css"
import { init } from 'ityped'
function Intro({name}) {
    const textRef = useRef();
    useEffect(() =>{
        console.log(textRef)
        init(textRef.current, { showCursor: true, backDelay:1500, strings: ['Work hard!', 'Play hard!' ] })
    },[])
    return (
        <div className = {`intro ${name}`} id ="intro">
            <div className = 'introleft'>
                <div className = "imageContainer">
                    <img src = "assets/man.png" alt ="developer"/>
                </div>
            </div>
            <div className = 'introright'>
                <div className="wrapper">

                    <div className = "desc">
                    <h2>Hi there, I am</h2>
                    <h1>Bamidele Omonayin</h1>
                    <h3>A cloud support Engineer <span ref = {textRef}></span></h3>
                    </div>
                    <a href = "#work">
                        <img src = "assets/down.png" alt =""/>

                    </a>
                   
                </div>
            </div>
        </div>
    )
}




export default Intro
