import React, { useState } from 'react'

import PersonForm from '../components/PersonForm';
import PersonList from '../components/PersonList';
const Main = (props) => {
    
    const [updated, setUpdated] = useState(false);
    
    return (
        <div>
    	/* PersonForm and Person List can both utilize the getter and setter established in their parent component: */
           <PersonForm updated={updated}  setUpdated={setUpdated} />
            <hr/>
           <PersonList updated={updated}  setUpdated={setUpdated}  />
        </div>
    )
}
export default Main;
