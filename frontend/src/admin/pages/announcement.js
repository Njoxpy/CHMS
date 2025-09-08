import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaPlus } from 'react-icons/fa';
import AnnouncementDetails from "./announcementDetails";
import { useChurchContext } from "../Hooks/useChurchContext";

const Announcement = () => {

    const {data, dispatch} = useChurchContext()
    const [error, setError] = useState(false);

    useEffect(() => {
       const fetchAnouncement = async() => {
        const response = await fetch("http://localhost:4000/api/v1/announcements")

        const json = await response.json()

        if(!response){
            setError(json.error)
        }
        if(response){
            dispatch({type: 'SET_DATA', payload: json})
        }

       }
       fetchAnouncement();

    }, [dispatch])

    return ( 
        <div className="announcement">
            {data && data.map((data) => (
                <AnnouncementDetails key={data._id} data = {data}/>                

            ))}

            <NavLink to="/createAnnouncement" className="addevent-navlink">
                    <FaPlus className="add-icon" /> Add New announcement
                  </NavLink>

                  {error && <div> {error} </div>}
            

        </div>
     );
}
 
export default Announcement;