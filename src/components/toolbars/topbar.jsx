import "./topbar.css";
import { Person, Mail } from "@material-ui/icons";
function Topbar({handleClick,clickMode}) {


    //const [act, setAct] = useState(false)


    return (
        <div className={clickMode ? `topbar active` : `topbar`}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Bamidele.</a>
                    <div className="itemcontainer">
                        <Person className="icon person" />
                        <span>+44 924 12 74</span>

                        <Mail className="icon mail" />
                        <span>Bamideleomonayin@gmail.com</span>
                    </div>
                </div>

                <div className = {clickMode ? `right switch` : `right`} onClick={handleClick}>
                    <span className="span1"></span>
                    <span className="span2"></span>
                    <span className="span3"></span>
                </div>
            </div>

        </div>
    )
}

export default Topbar
