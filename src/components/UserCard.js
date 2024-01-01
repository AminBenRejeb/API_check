import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function UserCard({user}) {
  return (
    <div>

<Card style={{ width: '18rem' }}>
     
      <Card.Body>
        <h3 style={{backgroundColor:"blue"}}>{user.name[0]}</h3>
        <Card.Title> User Card </Card.Title>
        <Card.Text>
          {user.name}
          <br></br>
          {user.email}
        </Card.Text>
        <Button style={{height:"60px",backgroundColor:"#123456"}} variant="primary"onClick={(e)=>e.preventDefault()}>
          <Link to ={`/profile/${user.id}`}>
          Go to Profile
          </Link>
          </Button>
      </Card.Body>
    </Card>


    </div>
  )
}

export default UserCard