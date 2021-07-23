import React from 'react'
import "./portfolioList.css";

function PortfolioList({title, picked,activeLink,setPicked,item}) {
    return (        
            <li 
            key={item}
            className= {picked === activeLink ? "portfolioList activeLink" : "portfolioList"}
            onClick = {setPicked}
            >{title}</li>
    )
}

export default PortfolioList
