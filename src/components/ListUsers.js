import React from 'react';
import axios from "axios";
import { useEffect } from 'react';
import { useState } from 'react';
import UserCard from './UserCard';
function ListUsers() {
    const [users,setUsers]=useState([]);
    console.log(users,"tessssst");
    useEffect(()=>{
        axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>setUsers(res.data))
        .catch((err)=>console.log(err));
    },[]);
    
  return (
    <div style={{margin:"20px",paddingBottom:"20px",display:'flex',flexWrap:"wrap"}}>
       
        
        {users.map((user,i)=> (
            <UserCard key={i} user={user}/>
        ))}
       
    </div>
  )
}

export default ListUsers