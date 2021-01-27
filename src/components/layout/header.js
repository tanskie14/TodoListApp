import React from 'react';
import { Link } from "react-router-dom";

function Header(){
    return(
        <header style={headerStyle}> 
          <h1> My Todolist </h1>
          <Link to="/TodoListApp" style={linkStyle}> Home </Link> | <Link to="/About" style={linkStyle}> About </Link>

        </header>
    )
}

const headerStyle = {
    background: 'teal',
    color: '#fff',
    textAlign: 'center',
    padding: '2px'

}

const linkStyle = {
    color:'white',
    textDecoration: "none"

}

export default Header;