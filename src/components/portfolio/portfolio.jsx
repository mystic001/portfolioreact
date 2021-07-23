import React, { useState } from 'react'
import "./portfolio.css";
import PortfolioList from '../../portfolioList/PortfolioList';
function Portfolio({ name }) {

    const list = [
        {
            id: "feature",
            name: "Featured"
        },
        {
            id: "web",
            name: "Web App"
        },
        {
            id: "mobile",
            name: "Mobile App"
        },
        {
            id: "creator",
            name: "Content Creator"
        }
    ]

    const [select, setSelected] = useState("feature")

    return (
        <div className={`portfolio ${name}`} id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item => <PortfolioList 
                item = {item.id}
                picked = {select}
                activeLink={item.id}
                setPicked = {()=>setSelected(item.id)}
                title = {item.name} />)}
            </ul>

            <div className="linkscontainer">
                <div className="item">
                    <h4>NameOfApp</h4>
                    <img src="https://cdn.pixabay.com/photo/2021/06/19/17/51/italy-6349105__340.jpg" alt="example" />
                </div>

                <div className="item">
                    <h4>NameOfApp</h4>
                    <img src="https://cdn.pixabay.com/photo/2021/06/19/17/51/italy-6349105__340.jpg" alt="example" />
                </div>

                <div className="item">
                    <h4>NameOfApp</h4>
                    <img src="https://cdn.pixabay.com/photo/2021/06/19/17/51/italy-6349105__340.jpg" alt="example" />
                </div>

                <div className="item">
                    <h4>NameOfApp</h4>
                    <img src="https://cdn.pixabay.com/photo/2021/06/19/17/51/italy-6349105__340.jpg" alt="example" />
                </div>

                <div className="item">
                    <h4>NameOfApp</h4>
                    <img src="https://cdn.pixabay.com/photo/2021/06/19/17/51/italy-6349105__340.jpg" alt="example" />
                </div>

                <div className="item">
                    <h4>NameOfApp</h4>
                    <img src="https://cdn.pixabay.com/photo/2021/06/19/17/51/italy-6349105__340.jpg" alt="example" />
                </div>

                <div className="item">
                    <h4>NameOfApp</h4>
                    <img src="https://cdn.pixabay.com/photo/2021/06/19/17/51/italy-6349105__340.jpg" alt="example" />
                </div>

                <div className="item">
                    <h4>NameOfApp</h4>
                    <img src="https://cdn.pixabay.com/photo/2021/06/19/17/51/italy-6349105__340.jpg" alt="example" />
                </div>
            </div>
        </div>
    )
}

export default Portfolio
