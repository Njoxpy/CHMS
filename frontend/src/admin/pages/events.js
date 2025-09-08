import {useEffect} from "react";
import { NavLink } from "react-router-dom";
import { FaPlus } from 'react-icons/fa';
import EventsDetails from "./eventsDetails";
import { useChurchContext } from "../Hooks/useChurchContext";




const Events = () => {
    const {data, dispatch} = useChurchContext()


    useEffect(() => {
        const fetchEvents = async() => {
            const response = await fetch('http://localhost:4000/api/v1/events')
            const json = await response.json()     

            if(response.ok){
               dispatch({type: 'SET_DATA', payload: json})
            }

        }
        fetchEvents()
    }, [])
    return ( 
        <div className="events">
            {data && data.map((data) => (
                <EventsDetails key={data._id} data = {data}/>

            ))}

             <NavLink to="/createEvent" className="addevent-navlink">
        <FaPlus className="add-icon" /> Add New Event
      </NavLink>
    
           
        </div>
     );
}
 
export default Events;