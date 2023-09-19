import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
const PersonList = (props) => {
    /* We deconstruct getter and setter which were passed down 
    via props by the parent component (app.js) to our child 
    component (PersonList.js). Now we can easily use the getter 
    and setter without having to write props.getter or props.setter every time: */
    const {updated,setUpdated,socket} = props;
    const[people,setPeople]=useState([])
    useEffect(()=>{
    	axios.get("http://localhost:8000/api/people")
    	.then((res)=>{
	    console.log(res.data);
            setPeople(res.data);
	})
    	
        socket.on('toClient', (data) => {
            console.log("ne react therritet ")
            // setPeople([...people,persons]);
   
            setUpdated(!updated)
          });

       
    }, [updated])
    const deleteUser=(id) =>{
        axios.delete(`http://localhost:8000/api/people/${id}`)
        .then( res => {
            console.log(res.data);
            socket.emit("getDataFromReact", res.data);
            setUpdated(!updated)
            
        })
        .catch( err => console.log(err) );

    }

    return (
        <div>
            {
                people.map((person, index)=>{
                return <p key={index}>FirstName : {person.lastName} LastName: {person.firstName} <Link to={`/people/${person._id}`}>See More</Link> <button onClick={e=>deleteUser(person._id)}>Delete</button> </p>
                })
            }
        </div>
    )
}
export default PersonList;

