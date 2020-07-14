import React from 'react'
import {
    Link,
    Route,
    withRouter, //look this up
} from 'react-router-dom';

const contactUs = [
    {
        name: 'Facebook',
        id: 'facebook'
    },
    {
        name: 'Instagram',
        id: 'instagram'
    },
    {
        name: 'Email',
        id: 'email'
    },
]

export default function ContactUs({ match }) {
    return (
        <div>
            <h2>Contact Us</h2>
            <ul>
                {contactUs.map(({ name, id }) => (
                <li key={id}>
                    <Link to={`${match.url}/${id}`}>{name}</Link>
                </li>
                ))}
            </ul>
            <hr />
            
        </div>
    )
}