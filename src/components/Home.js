import React from 'react'
import '../style/App.css';
import cover from '../img/cover_photo.jpg';

export default function Home(){
    return <div>
        <img src={cover} alt="sleepyboi" className="img-responsive"/>
    </div>
}