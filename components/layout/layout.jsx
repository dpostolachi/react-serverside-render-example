import React, { Component } from 'react'
import Head from 'components/controls/head.jsx'
import Header from 'components/controls/header.jsx'
import Counter from 'components/controls/counter.jsx'
import serialize from 'serialize-javascript'
import Error404 from 'components/pages/error.jsx'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { clear404 } from 'actions/extraActions'
import HHContainer from 'components/hiphop/container.jsx'

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
                    <Header />
                    <HHContainer>
                        <Counter/>
                        { (is404) ? <Error404/> : this.props.children }
                    </HHContainer>
                    <script id="preloadedState" type="text/javascript" dangerouslySetInnerHTML ={ { __html: 'window.__PRELOADED_STATE__ = ' + serialize(preloadedState.getState() ,{isJSON: true}) } } />
                    <script type="text/javascript" src="/public/bundle/bundle.js" async/>
                </body>
            </html>
        )
    }

}

export default withRouter( Layout )
