import React, { useState } from 'react'
import io from 'socket.io-client';  

import PersonForm from '../components/PersonForm';
import PersonList from '../components/PersonList';
const Main = ({socket}) => {
    
    const [updated, setUpdated] = useState(false);
    
    return (
        <div>
    	/* PersonForm and Person List can both utilize the getter and setter established in their parent component: */
           <PersonForm socket={socket} updated={updated}  setUpdated={setUpdated} />
            <hr/>
           <PersonList socket={socket} updated={updated}  setUpdated={setUpdated}  />
        </div>
    )
}
export default Main;
