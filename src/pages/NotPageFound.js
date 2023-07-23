import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <div className="thankyou-message">
          <p>The Page that you tried to access Does Not Exist, Please click below to return to home page.</p>
          <Link to="/Home">Return to Main Menu</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
