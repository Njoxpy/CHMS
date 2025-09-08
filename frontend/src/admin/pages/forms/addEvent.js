import { useState } from "react";

const AddEvent = () => {

    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')
    const [error, setError] = useState(null)    
    const[emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async(e) => {
        e.preventDefault()

       

        const event = {title, date, description}

        const response = await fetch("http://localhost:4000/api/v1/events", {
            method: "POST",
            body: JSON.stringify(event),
            headers: {
                "content-Type": "application/json"
            }                      
           
        })
         const json = await response.json()

         if(!response.ok){
            setError(json.error)
            setEmptyFields(json.emptyFields)
         }
         if(response.ok){
           setTitle('')
           setDate('')
           setDescription('')           
           setError(null)
          
         }
    }
    
    return ( 
      <form className="addevent-form" onSubmit={handleSubmit}>

     

        <label>event title</label>
        <input type="text" 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
           className={emptyFields.includes('title') ? 'error' : ''}  
        />

          <label>date of event</label>
          <input type="date" 
          value={date}
        onChange={(e) => setDate(e.target.value)}
           className={emptyFields.includes('date') ? 'error' : ''}  
        
        />

          <label>Description</label>
        <textarea   
        value={description}
        onChange={(e) => setDescription(e.target.value)}
           className={emptyFields.includes('description') ? 'error' : ''}       
        />
        <button>send event</button>
        {error && <div className="eventError"> {error} </div> }
      </form>
     );
}
 
export default AddEvent;