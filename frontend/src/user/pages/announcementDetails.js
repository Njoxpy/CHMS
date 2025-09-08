import { useState } from "react";
import { useChurchContext } from "../Hooks/useChurchContext";

// date-fns
import { formatDistanceToNow } from 'date-fns'

const AnnouncementDetails = ({data}) => {
    const { dispatch } = useChurchContext();
    const[success, setSuccess] = useState(null);
    

    return ( 
        <div className="announcement-details">
            {success && <div className="success-deleted"> deleted successful 🎉 </div>}        
            <p><strong>announcement title:</strong> <div className="title">{data.title}</div></p>
            <p><strong>description:</strong> <div>{data.description}</div></p>
            <p><strong>announced day:</strong> <div>{formatDistanceToNow(new Date(data.createdAt), { addSuffix: true })}</div></p>
            <p><strong>day of conducting:</strong> <div>{data.day}</div></p>         

        </div>
     );
}
 
export default AnnouncementDetails; 