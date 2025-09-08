import {Routes, Route} from "react-router-dom";

import './App.css';

import Home from './pages/Home';
import Sidebar from "./components/sidebar";
import Events from "./pages/events";
import Header from "./components/header";
import AddEvent from "./pages/forms/addEvent";
import Members from "./pages/members";
import AddMember from "./pages/forms/addMember";
import Announcement from "./pages/announcement";
import AddAnnouncement from "./pages/forms/addAnnouncement"


function AdminApp() {

  return (  
    
    <div className="App">     
       {<Sidebar/>}
      
      <div className="content">
        {<Header/>}
           
        <Routes>
          <Route exact path="/" element ={<Home/>}/>
          <Route exact path="/admin/events" element ={<Events/>}/>
          <Route exact path="/members" element ={<Members/>}/>
           <Route exact path="/announcements" element ={<Announcement/>}/>
          <Route exact path="/createEvent" element ={<AddEvent/>}/>
           <Route exact path="/createMember" element ={<AddMember/>}/>
           <Route exact path="/createAnnouncement" element ={<AddAnnouncement/>}/>
          
         
        </Routes>    
                 
      </div>
    </div>
  );
 
} 



 


export default AdminApp;
