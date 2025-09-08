import { useState } from "react";

const AddAnnouncement = () => {
    const[title, setTitle] = useState('');
    const[description, setDescription] = useState('');
    const[day, setDay] = useState('');
    const[error, setError] = useState(null);
   
    const[emptyFields, setEmptyFields] = useState([]);

    const handleSubmit = async(e) => {
        e.preventDefault()

    

        const announcement = {title, description, day}

        const response = await fetch("http://localhost:4000/api/v1/announcements", {
            method: 'POST',
            body: JSON.stringify(announcement),
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
          setDescription('')
          setDay('')
          setError(null)
          
          
        }

    }

    return ( 
        <form className="announcement-form"  onSubmit={handleSubmit}>

           
            <label>announcement title</label>
            <input type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}  
            className={emptyFields.includes('title') ? 'error' : ''}  
                
             />

            <label>description</label>
            <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)} 
            className={emptyFields.includes('description') ? 'error' : ''}   
                    
             />

           <label>conducting date</label>
            <input type="date"
            value={day}
            onChange={(e) => setDay(e.target.value)} 
            className={emptyFields.includes('day') ? 'error' : ''}    
                   
           />

           <button>send announcement</button>

           {error && <div className="error"> {error} </div>}

        </form>
     );
}
 
export default AddAnnouncement;