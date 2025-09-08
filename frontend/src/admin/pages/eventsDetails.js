import { useChurchContext } from "../Hooks/useChurchContext";

import { formatDistanceToNow } from 'date-fns'

const EventsDetails = ({data}) => {

  const { dispatch } = useChurchContext();
   
  const handleDelete = async() => {
    const response = await fetch ('http://localhost:4000/api/v1/events/' + data._id, {
      method: 'DELETE'

    })

    const json = await response.json();

    if(response.ok){
      dispatch({type: 'DELETE_DATA', payload: json})
    }

  }
 
    return ( 
       <div className="events-details">
        <p><strong>event title:</strong> <div className="title">{data.title}</div></p>   
        <p><strong>date of event:</strong> <div>{data.date}</div></p>   
        <p><strong>announced date:</strong> <div>{formatDistanceToNow(new Date(data.createdAt), {addSuffix: true})}</div></p> 
        <p><strong>description:</strong> <div>{data.description}</div></p>
        <span className="material-symbols-outlined" onClick={handleDelete} >delete</span>     
       </div>
      
     );
}
 
export default EventsDetails;