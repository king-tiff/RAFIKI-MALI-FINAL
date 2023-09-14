import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear user data from localStorage
    localStorage.removeItem('userId');
    localStorage.removeItem('fname');
    localStorage.removeItem('lname');

    // Navigate to the index page after clearing the data
    navigate('/');
  }, [navigate]);

  return (
    <div>
      <p>Logging out...</p>
    </div>
  );
}

export default Logout;
