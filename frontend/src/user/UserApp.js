import {BrowserRouter, Routes, Route} from "react-router-dom";

import './App.css';

import Home from './pages/Home';
import Sidebar from "./components/sidebar";
import Events from "./pages/events";
import Header from "./components/header";
import Announcement from "./pages/announcement";
import Requests from "./pages/requests";



function UserApp() {

  return (
   
    <div className="App">     
       {<Sidebar/>}
      
      <div className="content">
        {<Header/>}
           
        <Routes>
          <Route exact path="/user/*" element ={<Home/>}/>
          <Route exact path="/user/events/*" element ={<Events/>}/>         
          <Route exact path="/user/announcements/*" element ={<Announcement/>}/>  
           <Route exact path="/user/requests/*" element ={<Requests/>}/>      
        
        </Routes>    
                 
      </div>
    </div>    
  
  );
 
} 



 


export default UserApp;
