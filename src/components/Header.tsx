import React from 'react'
import { Link } from 'react-router-dom';
import {NavLink} from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return (<>
            <div className="book-header">   
             <a className="heading">Book Management System</a>
             <Link to="/Delete">Delete Book</Link>
             <Link to="/Register">Register</Link>
             <Link to="/Login">Login</Link>
             <Link to="/AddBook">Add Book</Link>
             <Link to="/Booklist">Books</Link>
             
            </div>
            
            </>
        )
    }
}
