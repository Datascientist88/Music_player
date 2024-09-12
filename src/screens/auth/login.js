import React from 'react';
import { loginEndpoint } from '../../spotify';
import './login.css';

export default function Login() {
    return (
        <div className="login-page">
            <img
                src="https://static8.depositphotos.com/1044234/879/i/450/depositphotos_8790321-stock-photo-retro-microphone-on-stage.jpg"
                alt="logo-spotify"
                className="logo"
            />
            <a href={loginEndpoint}>
                <div className="login-btn">LOG IN</div>
            </a>
        </div>
    );
}
