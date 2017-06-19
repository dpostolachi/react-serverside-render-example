import React, { Component } from 'react'

import { connect } from 'react-redux'

@connect((store)=> {
    return {
        meta: store.meta,
    }
})

export default class Head extends Component {

    render(){

        const { title } = this.props.meta

        return (
            <head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
                <title>{ title }</title>
                <link rel="stylesheet" type="text/css" href="/public/style/style.css"/>
            </head>
        )
    }

}
