import React, { useState } from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import PersonList from './components/PersonList';
import Detail from './components/Detail';
// import PersonForm from '../components/PersonForm';
// import PersonList from '../components/PersonList';
const App = () => {
    
    return(
	<div>
    	<BrowserRouter>
            <Routes>
	    <Route element={<Main/>} path="/" default /> //adding the default makes this the default path
        <Route element={<PersonList/>} path="/people"  />
        <Route element={<Detail/>} path="/people/:id" /> 
            </Routes>
    	</BrowserRouter>
        </div>
    ) 
}
export default App;

