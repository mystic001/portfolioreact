
import './menu.css'
function Menu({clickMode}) {
    return (
        <div className ={clickMode ? `menu menuclicked` : "menu"} >
            hello
            <ul>
                <li><a href="#intro">Introduction</a></li>
                <li><a href="#intro">Portfolio</a></li>
                <li> <a href="#intro">Testimonial</a></li>
                <li> <a href="#intro">Work</a></li>
            </ul>
        </div>
    )
}

export default Menu
