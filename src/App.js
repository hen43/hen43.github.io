import React from 'react';
import './App.css';
import Header from './components/header.js';
import ProjectBox from './components/projectBox.js';

function App() {
  return (
    <div className='Main'>
      <div className='Body'>
        <Header/>
        <div className='MainText'>
            <p>"Currently debugging both code and life"</p>
            
            <ProjectBox link={'https://google.com'}/>
        </div>

      </div>
    </div>
  );
}

export default App;
