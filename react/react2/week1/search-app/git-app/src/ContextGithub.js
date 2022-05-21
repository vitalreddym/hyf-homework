import React, { useState} from 'react';
import User from './components/User';
export const userContext = React.createContext( null);

function ContextGithub() {
    const [userName, setUserName] = useState('');
    const handelChange = (e) => {
        setUserName(e.target.value);
    }
return (
    <div>
        <input type="text" placeholder='search user' value={userName} onChange={handelChange}/>
        <userContext.Provider value={userName}>
            <User userName={ userName} />
            </userContext.Provider>
    </div>
);
}

export default ContextGithub;