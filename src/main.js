import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import Create from './create';
import UpdateUser from './update';

const Main = () => {
    return(
        <Router>
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route path='/create' element={<Create/>} />
                <Route path='/update' element={<UpdateUser/>}/>
            </Routes>
        </Router>
    )
}

export default Main; 