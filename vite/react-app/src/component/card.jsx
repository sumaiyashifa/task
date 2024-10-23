// src/component/Card.js
import profilepic from '../assets/person_2.jpg';

export function Card({ username,name,email }) {
    return (
        <div className="card">
            <img className="ci" src={profilepic} alt="profile picture" />
            <p className="card-text">{username}</p>
            <p className="card-text">{name}</p>
            <p className="card-text">Email:{email}</p>
            
        </div>
    );
}
