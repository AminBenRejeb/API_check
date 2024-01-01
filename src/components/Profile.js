import React from 'react'
import { useParams} from 'react-router-dom'
import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
function Profile() {
  const [user , setUser]= useState({});
  const {userId} = useParams();

  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
         .then((res)=>setUser(res.data))
         .catch((err)=>console.log(err))
        },[])

  return (
    <div>
      <Card style={{ width: '18rem',marginLeft:'600px',marginTop:'100px',border:'solid',borderColor:'rgb(124, 179, 197)' }}>
     
     <Card.Body >
     
       <Card.Title style={{backgroundColor:'rgb(124, 179, 197)'}}> {user.name} </Card.Title>
       <Card.Text>
       {user.address && user.address.street}
         <br></br>
         {user.email}
       </Card.Text>
       
     </Card.Body>
   </Card>
   
    </div>
  )
}

export default Profile