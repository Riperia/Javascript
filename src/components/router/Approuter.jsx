import React from 'react'
import {Route,Routes} from 'react-router-dom';
import About from '../../pages/About';
import Control from '../../pages/Control';
import Posts from '../../pages/Posts';


const Approuter = () => {
    return (
        <Routes>
        <Route path="/control" element={<Control />}/>   
        <Route path="/about" element={<About />}/>
        <Route path="/posts" element={<Posts />} />
        </Routes>
    );
};
export default Approuter;