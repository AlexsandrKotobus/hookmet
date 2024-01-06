import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


function User() {
  const [user, setUser] = useState({name: 'Esia',age: 2});

  function handleNameChange(event){
    setUser({...user, name: event.target.value});
  }

  function handleAgeChange(event){
    setUser({...user, age: event.target.value});
  }
 
  return(
  <><div>
      <h3> Имя: {user.name}</h3>
      <h3> Возраст: {user.age}</h3>
    </div><div>
        <p> Имя : <input type='text' value={user.name} onChange={handleNameChange} /></p>
        <p> возраст : <input type='number' min="0"  max="100" value={user.age} onChange={handleAgeChange} /></p>
      </div></>
  
  
  
  );
}

    

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  < >
    <User />
  </ >
);

