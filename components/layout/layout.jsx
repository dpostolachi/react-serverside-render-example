import React, { Component } from 'react'

import Head from '../controls/head.jsx'

import Counter from '../controls/counter.jsx'

import serialize from 'serialize-javascript'

import Error404 from '../pages/error.jsx'

import { connect } from 'react-redux'

import { withRouter } from 'react-router'

import { clear404 } from '../../actions/extraActions'

@connect((store)=> {
    return {
        extras: store.extras,
    }
})

class Layout extends Component {


    //Remove 404 if route changes
    componentWillMount(){
        this.props.history.listen(()=>{

            this.props.dispatch(clear404())

        })
    }

    render(){

        const { preloadedState } = this.props

        const { is404 } = this.props.extras

        return (
            <html lang="en">
                <Head/>
                <body>
                    <Counter/>
                    { (is404) ? <Error404/> : this.props.children }
                    <script id="preloadedState" type="text/javascript" dangerouslySetInnerHTML ={ { __html: 'window.__PRELOADED_STATE__ = ' + serialize(preloadedState.getState() ,{isJSON: true}) } } />
                    <script type="text/javascript" src="/public/scripts/bundle.js" async/>
                </body>
            </html>
        )
    }

}

export default withRouter( Layout )
