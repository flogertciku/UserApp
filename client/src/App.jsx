import React, { useState } from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import PersonList from './components/PersonList';
import Detail from './components/Detail';
import io from 'socket.io-client';
// import PersonForm from '../components/PersonForm';
// import PersonList from '../components/PersonList';
const App = () => {
    const socket = io('http://127.0.0.1:8000',{ transports: ['websocket', 'polling', 'flashsocket'] });
    
    
    return(
	<div>
    	<BrowserRouter>
            <Routes>
	    <Route element={<Main socket={socket} />} path="/" default /> 
        <Route element={<PersonList socket={socket}/>} path="/people"  />
        <Route element={<Detail/>} path="/people/:id" /> 
            </Routes>
    	</BrowserRouter>
        </div>
    ) 
}
export default App;

