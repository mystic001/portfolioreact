import "./contact.css"
function contact({ name }) {

    const handleSubmit = (e)=>{

        e.preventDefault();
        console.log(e);
    }
    return (
        <div className={`contact ${name}`} id="contat">
            <div className="contactContainer">
                <div className="leftContact">
                    <div>
                        <img src="assets/shake.svg" alt="shake"></img>
                    </div>

                </div>
                <div className="rightContact">
                    <h1>Contact</h1>

                    
                        <form className="inputContainer">

                            <input type="text" name="name" placeholder="Email"/>
                            <textarea placeholder="Message">
                                
                            </textarea>
                            <input type="submit" value="Submit" className="btn" onClick={handleSubmit}/>
                        </form>

                 


                </div>
            </div>
        </div>
    )
}

export default contact
