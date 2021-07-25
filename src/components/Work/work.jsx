import React from 'react'
import "./work.css"
function work({ name }) {
    return (
        <div className={`work ${name}`} id="work">
            <div className="slider">
                <div className="workcontain">

                    <div className="item">

                    <div className="leftwork">
                        <div className="imageContainerWork">

                        <img src = "assets/mobile.png" alt = "mobile phone"/>
                        </div>
                            
                            <h1>Title</h1>
                            <p>Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore
                            </p>

                            <h3>Projects</h3>
                        </div>
                        <div className="rightwork">
                        <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930" alt=""/>
                        </div>

                    </div>
                       
                    </div>
                </div>
            

        </div>
    )
}

export default work
