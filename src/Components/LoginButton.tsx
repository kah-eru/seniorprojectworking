import { Link } from 'react-router-dom';
import React from 'react';

function Loginbutton() {
  return (
    <div>
      {/* Main content of your page */}

      <button style={{ position: 'fixed', bottom: 20, right: 20 }}>
        <Link to='./login'>Log In</Link>
      </button>
    </div>
  );
}

export default Loginbutton
