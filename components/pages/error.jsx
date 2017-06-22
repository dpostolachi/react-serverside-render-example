import React, {Component} from 'react'

import { Link } from 'react-router-dom'

export default class Home extends Component {

    render(){

        return (
            <div className="home-page">
                <h1>404. Page not found</h1>
                <Link to="/">to home page</Link>
            </div>
        )

    }
}
