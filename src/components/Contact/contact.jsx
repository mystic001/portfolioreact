import "./contact.css"
function contact({name}) {
    return (
        <div className = {`contact ${name}`} id="contat">
            <p>This is contact</p>
        </div>
    )
}

export default contact
