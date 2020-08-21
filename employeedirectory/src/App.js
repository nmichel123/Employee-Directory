import React from 'react';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import Handshake from './assets/bigHandshake.jpg'; 
import './App.css';


function App() {
  return (
    <div>
<Header />
<Jumbotron />
<img src={Handshake} className = "handshake" alt="handshake" roundedCircle />
    </div>
  )}

export default App;
