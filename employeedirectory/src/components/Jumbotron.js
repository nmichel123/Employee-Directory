import React from 'react';
import { Link } from 'react-router-dom';


function Jumbotron () {
    return (
        <div className="jumbotron">
        <h1>Click The Button Below To See Employee Table!</h1>
        <p>
          Enim adipisicing enim reprehenderit ex ullamco consectetur Lorem laboris magna exercitation.
          Aliquip reprehenderit magna elit cillum adipisicing dolore aliquip velit. Ipsum ullamco
          nostrud tempor eu deserunt ipsum incididunt fugiat esse ipsum. Exercitation nostrud
          exercitation sit ex nostrud aliqua officia magna nostrud deserunt et esse eu deserunt. Non
          dolor consequat qui ea culpa tempor magna nulla consectetur est occaecat.
        </p>
        <p>
        <Link to = "/table">
            <a class="btn btn-primary btn-lg" href="../pages/Table" role="button">Search Employees</a> 
        </Link>
        </p>
      </div>
)};

export default Jumbotron;

