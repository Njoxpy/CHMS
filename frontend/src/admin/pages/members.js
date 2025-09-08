import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaPlus } from 'react-icons/fa';
import MembersDetails from "./membersDetails";
import { useChurchContext } from "../Hooks/useChurchContext";



const Members = () => {
    const {data, dispatch} = useChurchContext();


    useEffect(() => {
        const fetchMembers = async() => {
            const response = await fetch('http://localhost:4000/api/v1/members')
            const json = await response.json()     

            if(response.ok){
                dispatch({type: 'SET_DATA', payload: json})
            }

        }
        fetchMembers()
    }, [])
    return ( 
        <div className="events">
            {data && data.map((data) => (
                <MembersDetails key={data._id} data = {data}/>

            ))}

             <NavLink to="/createMember" className="addevent-navlink">
        <FaPlus className="add-icon" /> Add New Member
      </NavLink>
    
           
        </div>
     );
}
 
export default Members;