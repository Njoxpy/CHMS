import { useState } from "react";

const AddMember = () => {

    const[name, setName] = useState('')
    const[date, setDate] = useState('')
    const[gender, setGender] = useState('')
    const[age, setAge] = useState('')
    const [error, setError] = useState(null)
    const[emptyFields, setEmptyFields] = useState([]);
    

    const handleSubmit = async(e) => {
        e.preventDefault()
        
        const member = {name, date, gender, age}

        const response = await fetch('http://localhost:4000/api/v1/members', {
            method: "POST",
            body: JSON.stringify(member),
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
           setName('')
           setDate('')
           setGender('')
           setAge('')
           setError(null)

           
        }



    }

    return ( 
        <form className="addMember-form" onSubmit={handleSubmit}>

              
            <label>full name</label>
            <input type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={emptyFields.includes('name') ? 'error' : ''}  
            />

            <label>date of birth</label>
            <input type="date" 
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={emptyFields.includes('date') ? 'error' : ''}  
            />

            <label>gender</label>
            <select
             id="gender"  
             value={gender} 
             onChange={(e) => setGender(e.target.value)}
             className={emptyFields.includes('gender') ? 'error' : ''}  
      >
     
        <option value="" disabled>Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        
      </select>

            <label>age</label>
            <input type="number" 
             value={age}
             onChange={(e) => setAge(e.target.value)}
              className={emptyFields.includes('age') ? 'error' : ''}  
             
            />
              <button>add member</button>

              {error && <div className="error"> {error} </div>}
              
              

        </form>
     );
}
 
export default AddMember;