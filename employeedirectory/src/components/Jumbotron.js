import React from 'react';

function Jumbotron () {
    return (
        <div className="jumbotron">
        <h1>Click The Button Below To See The Employee Table!</h1>
        <p>
         How it works: 

         Click the button to go to the table. When column headings are clicked, the table is sorted from ascending to descending based on the value.
         (Ex. First name is clicked, it is sorted alphabetically, clicked again it is sorted in reverse, clicked again it reverts to its original state).
         There is a search bar to search by employee's first name at the top. It will show only the employees who have that name. There are sections for first name, last name, 
         department, position and salary. 
        </p>
        <p>
            <a class="btn btn-primary btn-lg" href="/table" role="button">Search Employees</a> 
        </p>
      </div>
)};

export default Jumbotron;

