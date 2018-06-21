import React, { Component } from 'react';
import Nav from './Nav';

import './App.css';

const About = () => {
    return (
      <div>
        <Nav />
          <main>
            <h1>
              <strong>This will be About page!</strong>
            </h1>
          </main>
      </div>    
    );
}

export default About;
