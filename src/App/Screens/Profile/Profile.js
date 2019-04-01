import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Profile extends Component {
  render() {
    return (
      <div className="Profile">
        <p>its profile screen </p>
        <Link to="/temp" className="btn btn-info btn-lg">
          Go to Temp
        </Link>
      </div>
    );
  }
}

export default Profile;
