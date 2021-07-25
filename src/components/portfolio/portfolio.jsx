import React, { useState, useEffect } from 'react'
import "./portfolio.css";
import PortfolioList from '../../portfolioList/PortfolioList';
import { featuredPortfolio, mobilePortfolio, webPortfolio, designPortfolio} from '../../data'
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
        },
        {
            id: "design",
            name: "Design"
        },
    ]

    const [select, setSelected] = useState("feature")
    const [data, setData] = useState(featuredPortfolio)

    useEffect(() => {
        switch (select) {
            case "feature":
                console.log(select)
                setData(featuredPortfolio)
                break;
            case "mobile":
                console.log(select)
                setData(mobilePortfolio)
                break;
            case "web":
                console.log(select)
                setData(webPortfolio)
                break;
            case "design":
                console.log(select)
                setData(designPortfolio)
                break;
            default:
                console.log(select)
                setData(featuredPortfolio)

        }

    }, [select])

    return (
        <div className={`portfolio ${name}`} id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item => <PortfolioList
                    item={item.id}
                    picked={select}
                    activeLink={item.id}
                    setPicked={() => setSelected(item.id)}
                    title={item.name} />)}
            </ul>

            <div className="linkscontainer">

            {data.map(
                (item) => {
                    return (
                        <div className="item">
                            <h4>{item.title}</h4>
                            <img src={item.img} alt="example" />
                        </div>
                    )


                })}

</div>




        </div>
    )
}

export default Portfolio
