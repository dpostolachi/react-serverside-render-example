import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import {
    headerNavCounter
} from 'client/styles/main.styl'

export default class Header extends Component {

    render(){

        return (
            <header>
                <span id="nav-aria" style={ {display: 'none'} }>Main menu</span>
                <nav role="navigation" aria-labelledby="nav-aria">
                    <Link to="/" aria-label="Favorite songs">
                        <span className="fa fa-heart" aria-hidden="true"></span>
                        <span className={ headerNavCounter } aria-label="Favorite songs count">30</span>
                    </Link>
                </nav>
            </header>
        )
    }

}
