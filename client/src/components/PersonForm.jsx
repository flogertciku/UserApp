import React, { useState } from 'react'
import axios from 'axios';
const PersonForm = () => {
    //keep track of what is being typed via useState hook
    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState("");
    const [user,setUser]=useState({})
    const [val,setValidation]=useState({})
    //handler when the form is submitted
    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/people', {
            firstName,    // this is shortcut syntax for firstName: firstName,
            lastName      // this is shortcut syntax for lastName: lastName
        })
            .then(res=>{
                console.log("res:"+res);
                setUser(res.data) // always console log to get used to tracking your data!
               
            })
            .catch(err=>{console.log(err); setValidation(err.response.data.errors)})
    }
    
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                {val.firstName ? <p> {val.firstName.message}</p>: ""}
                <label>First Name</label><br/>
                {/* When the user types in this input, our onChange synthetic event 
                    runs this arrow function, setting that event's target's (input) 
                    value (what's typed into the input) to our updated state   */}
                <input type="text" onChange = {(e)=>setFirstName(e.target.value)}/>
            </p>
            <p>
            {val.lastName
 ? <p> {val.lastName
    .message}</p>: ""}
                <label>Last Name</label><br/>
                <input type="text" onChange = {(e)=>setLastName(e.target.value)}/>
            </p>

            <input type="submit"/>
            {JSON.stringify(user)}
        </form>
    )
}
export default PersonForm;

