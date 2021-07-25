
import './menu.css'
function Menu({clickMode,closeLink}) {
   
    return (
        <div className ={clickMode ? `menu menuclicked` : "menu"} >
            <ul>
                <li onClick={closeLink}><a href="#intro">Introduction</a></li>
                <li onClick={closeLink}><a href="#portfolio">Portfolio</a></li>
                <li onClick={closeLink}><a href="#work">Work</a></li>
                <li onClick={closeLink}><a href="#testimonial">Testimonial</a></li>
                
            </ul>
        </div>
    )
}

export default Menu
