import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setLoggedIn(!isLoggedIn);
  };

  return (
    <div className='nav-bar'>
      <Link to='/home'>
        <h3>Home</h3>
      </Link>
      {isLoggedIn ? (
        <>
          <Link to='/userList'>
            <h3>List Users</h3>
          </Link>
          <button
            onClick={handleLoginClick}
            className='logout-btn'
          >
            Déconnexion
          </button>
        </>
      ) : (
        <button
          onClick={handleLoginClick}
          className='login-btn'
        >
          Connexion
        </button>
      )}
    </div>
  );
}

export default NavBar;
