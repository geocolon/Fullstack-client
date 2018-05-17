import React, { Component } from 'react';
import Nav from './Nav';

import './App.css';
import './Login.css';

class Landing extends Component {
  render() {
    return (
      <div className="container">
      <Nav />
        <main>
          <h1>
            <strong>This will be Landing page!</strong>
          </h1>
        </main>
      </div>
    );
  }
}

export default Landing;
