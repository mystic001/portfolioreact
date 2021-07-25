import React from 'react'
import "./testimonials.css"
function testimonials({name}) {

    const data = [
        {
          id: 1,
          name: "Tom Durden",
          title: "Senior Developer",
          img:
            "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icon: "assets/twitter.png",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
        },
        {
          id: 2,
          name: "Alex Kalinski",
          title: "Co-Founder of DELKA",
          img:
            "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icon: "assets/youtube.png",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
          featured: true,
        },
        {
          id: 3,
          name: "Martin Harold",
          title: "CEO of ALBI",
          img:
            "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icon: "assets/linkedin.png",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
      ];

    return (
        <div className = {`testimonials ${name}`} id = "testimonial">
            <h1>Testimonials</h1>
            <div className = "testimonialsWrapper">
                {data.map((item,index) => <div className={
                   item.featured ? "testimonialCards feature card" : "testimonialCards card"
                }  key={index}>
                    <div className="toptestimonial">
                        <img className="imagetest" src = "assets/right-arrow.png" alt=""/>
                        <img className="imagetest second" src = {item.img} alt=""/>
                        <img className="imagetest" src = {item.icon} alt=""/>

                    </div>
                    <div className="middletestimonial">
                        <p>{item.desc}</p>

                    </div>
                    <div className="bottomtestimonial">
                        <h3>{item.name}</h3>
                        <span>{item.title}</span>

                    </div>
                </div> )}


                
                
            </div>

        </div>
    )
}

export default testimonials
