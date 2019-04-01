import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Link to="/profile" className="btn btn-info btn-lg">
          Home Page
        </Link>
        <Link to="/profile" className="float-right">
          Ready Page
        </Link>
      </div>
    );
  }
}

export default Home;
