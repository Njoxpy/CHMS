import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AdminApp from "./admin/AdminApp";
import UserApp from "./user/UserApp";

const App = () => {
    return ( 
        <BrowserRouter>
        <Routes>
            <Route path='/admin/*' element = {< AdminApp/>} />
            <Route path='/user/*' element = {< UserApp/>} />
        </Routes>
        </BrowserRouter>
     );
}
 
export default App;