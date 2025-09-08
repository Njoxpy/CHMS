import { useChurchContext } from "../Hooks/useChurchContext";

import { formatDistanceToNow } from 'date-fns'

const MembersDetails = ({data}) => {

  const { dispatch } = useChurchContext();

  const handleDelete = async () => {
    const response = await fetch ('http://localhost:4000/api/v1/members/' + data._id, {

      method: 'DELETE'
    })

    const json = await response.json();

    if(response.ok){
      dispatch({type: 'DELETE_DATA', payload: json})
    }
  }

    return ( 
       <div className="events-details">
        <p><strong> name:</strong> <div className="title">{data.name}</div></p>   
        <p><strong>date of birth:</strong> <div>{data.date}</div></p>   
        <p><strong>gender:</strong> <div>{data.gender}</div></p> 
        <p><strong>age:</strong> <div>{data.age}</div></p>     
        <p><strong>registered date:</strong> <div>{formatDistanceToNow(new Date(data.createdAt), {addSuffix: true})}</div></p>  
        <span className="material-symbols-outlined"onClick={handleDelete}> delete </span>

       </div>
      
     );
}
 
export default MembersDetails;