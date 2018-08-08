import React from 'react'
import {
    Link,
    Route,
    withRouter, //look this up
} from 'react-router-dom';

export default function ContactUs({ match }) {
    return (
        <div>
            <h2>Contact Us</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/facebook`}>Facebook</Link>
                </li>
                <li>
                    <Link to={`${match.url}/email`}>Email</Link>
                </li>
                <li>
                    <Link to={`${match.url}/instagram`}>Instagram</Link>
                </li>
            </ul>
            <hr />
        </div>
    )
}