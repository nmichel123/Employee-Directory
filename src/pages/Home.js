import React from 'react';
import Header from '../components/Header';
import Jumbotron from '../components/Jumbotron';
import Handshake from '../assets/bigHandshake.jpg'; 
import '../styles/Home.css'
import '../App.css';

function Home () {
    return (
        <div>
    <Header />
    <Jumbotron />
    <img src={Handshake} className = "handshake" alt="handshake" />
        </div>
      )}

export default Home; 

