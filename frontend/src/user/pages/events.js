import {useEffect} from "react";
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
    }, [dispatch])
    return ( 
        <div className="events">
            {data && data.map((data) => (
                <EventsDetails key={data._id} data = {data}/>

            ))}       
    
           
        </div>
     );
}
 
export default Events;