import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {

    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/recipes'>Recipe List</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}