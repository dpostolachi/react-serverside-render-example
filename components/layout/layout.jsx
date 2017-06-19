import React, { Component } from 'react'

import Head from '../controls/head.jsx'

import serialize from 'serialize-javascript'

export default class Layout extends Component {

    render(){

        const { preloadedState } = this.props

        return (
            <html lang="en">
                <Head/>
                <body>
                    { this.props.children }
                    <script id="preloadedState" type="text/javascript" dangerouslySetInnerHTML ={ { __html: 'window.__PRELOADED_STATE__ = ' + serialize(preloadedState.getState() ,{isJSON: true}) } } />
                    <script type="text/javscript" src="/public/scripts/bundle.js"/>
                </body>
            </html>
        )
    }

}
