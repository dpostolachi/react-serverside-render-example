import React, { Component } from 'react'

import {
    hhContainer
} from 'client/styles/main.styl'

export default class HipHopContainer extends Component {

    render(){

        return (
            <div className={ hhContainer }>
                { this.props.children }
            </div>
        )
    }

}
