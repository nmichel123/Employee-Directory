import React from 'react';
import Home from './pages/Home';
import EmpTable from './components/Employees';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
  <Router>
    <div>
<Route exact path = "/" component = {Home} />
<Route exact path = "/table" component = {EmpTable} />
    </div>
    </Router>
  )} 

export default App;

