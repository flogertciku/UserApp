import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams,useNavigate} from "react-router-dom";

const Detail = (props) => {
    const navigate = useNavigate()
    const [person, setPerson] = useState({})
    const {id} = useParams(); 
    useEffect(() => {
        axios.get(`http://localhost:8000/api/people/${id}`)
            .then( res => {
                console.log(res.data);
                setPerson(res.data);
            })
            .catch( err => console.log(err) );
    }, []);
    const deleteUser=(id) =>{
        axios.delete(`http://localhost:8000/api/people/${id}`)
        .then( res => {
            console.log(res.data);
            navigate("/")
            
        })
        .catch( err => console.log(err) );

    }
    return (
        <div>
            <p>First Name: {person.firstName}</p>
            <p>Last Name: {person.lastName}</p>
            <button onClick={e=>deleteUser(person._id)}>Delete</button>
        </div>
    );
}
export default Detail;

