import { useState } from "react";
import { useChurchContext } from "../Hooks/useChurchContext";

// date-fns
import { formatDistanceToNow } from 'date-fns'

const AnnouncementDetails = ({data}) => {
    const { dispatch } = useChurchContext();
    const[success, setSuccess] = useState(null);
    const handleDelete = async () => {
        const response = await fetch("http://localhost:4000/api/v1/announcements/" + data._id, {
            method: 'DELETE'
        })

        const json = await response.json();

        if(response.ok){
            dispatch({type: 'DELETE_DATA', payload: json})
            setTimeout(() => setSuccess, 2000);

        }

    }

    return ( 
        <div className="announcement-details">
            {success && <div className="success-deleted"> deleted successful 🎉 </div>}        
            <p><strong>announcement title:</strong> <div className="title">{data.title}</div></p>
            <p><strong>description:</strong> <div>{data.description}</div></p>
            <p><strong>announced day:</strong> <div>{formatDistanceToNow(new Date(data.createdAt), { addSuffix: true })}</div></p>
            <p><strong>day of conducting:</strong> <div>{data.day}</div></p>
             <span className="material-symbols-outlined" onClick={handleDelete} > delete </span>

        </div>
     );
}
 
export default AnnouncementDetails; 