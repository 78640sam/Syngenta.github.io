import './email.css';
import React, { useEffect, useState } from 'react';
function Showdata() {

    const [ item, setItem]=useState([]);
    useEffect(()=>{
    fetch(`https://api.eva.pingutil.com/email?email=test@mail7.io`)
    .then(response => response.json())
    .then(item => console.log(item.data));
      }, []);

    return (
      <div> {item.map(data=>(
          <p>{item.data.email_address}</p>
        )  )}
  <h1>data</h1>
 
  

      </div>
    );
  }
  
  export default Showdata;