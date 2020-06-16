import React from 'react'
import '../style/App.css';
import cover from '../img/cover_photo.JPG';

export default function Home(){
    return <div>
        <img src={cover} alt="siblings" className="img-responsive"/>
    </div>
}