import React, { Component } from 'react';

//Since we are not doing much in the class component, it's better to have only a functional component.

//Stateless functional component
//Destrcutre items to avoid using 'props' everywhere
const NavBar = ({totalCounters}) =>{      //pass props as param 
    return(
        <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar
                <span className="badge bg-pill bg-secondary">
                    {totalCounters}
                </span>
            </a>
        </div>
        </nav>
    );
}


export default NavBar;