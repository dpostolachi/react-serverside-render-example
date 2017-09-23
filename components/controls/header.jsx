import React, { Component } from 'react'

import { Link } from 'react-router-dom'

export default class Header extends Component {

    render(){

        return (
            <header>
                <span id="nav-aria" style={ {display: 'none'} }>Main menu</span>
                <nav role="navigation" aria-labelledby="nav-aria">
                    <Link to="/" aria-label="Home page">Home</Link>
                    <Link to="/other" aria-label="Other page">Other</Link>
                </nav>
            </header>
        )
    }

}
