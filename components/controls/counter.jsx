import React, { Component } from 'react'

export default class Counter extends Component {

    constructor(props){
        super(props)

        this.state = {
            ticks: 0,
        }

    }

    componentDidMount(){
        this.run()
    }

    run(){
        setInterval(()=>{
            this.setState({
                ticks: this.state.ticks + 1,
            })
        }, 1000)
    }

    render(){

        const { ticks } = this.state

        return (
            <h2>{ ticks }</h2>
        )

    }

}
