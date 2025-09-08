import { formatDistanceToNow } from 'date-fns'

const EventsDetails = ({data}) => {
   
 
 
    return ( 
       <div className="events-details">
        <p><strong>event title:</strong> <div className="title">{data.title}</div></p>   
        <p><strong>date of event:</strong> <div>{data.date}</div></p>   
        <p><strong>announced date:</strong> <div>{formatDistanceToNow(new Date(data.createdAt), {addSuffix: true})}</div></p> 
        <p><strong>description:</strong> <div>{data.description}</div></p>
            
       </div>
      
     );
}
 
export default EventsDetails;