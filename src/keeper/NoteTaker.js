import { useState } from "react"
import "./NoteTaker.css"
const NoteTaker = (props) => {
    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }
    const passNote = (event) =>{
        event.preventDefault()
        props.addNotes(note)
        setNote({
            title: "",
            content: ""
        })
    }
    return (
        <div>
            <form>
                <input name="title" placeholder="Title" onChange = {handleChange} value = {note.title}/>
                <textarea name="content" placeholder="Take a note..." onChange = {handleChange} value = {note.content}/>
                <button onClick = {passNote}>Add</button>
              </form>
        </div>
    )
}
    
export default NoteTaker