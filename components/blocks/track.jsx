import React, { Component } from 'react'

import {
    track, trackArtWork, trackDetails, trackDetailsTitle, trackDetailsArtist, trackDetailsGenre, trackActive
} from 'client/styles/main.styl'

export default class Counter extends Component {

    playSong(){
        return (e) => {
            e.preventDefault()
            const { active}  = this.props
            console.log(active)
            if( active )
                this.props.pauseSong()
            else
                this.props.playSong()
        }
    }

    render(){

        const { artWorkPreview, preview, trackName, artistName, genre } = this.props.item

        const { active } = this.props

        return (
            <div className={ (active) ? `${track} ${trackActive}` : track }>
                <div className={ trackArtWork }>
                    <button onClick={ this.playSong() } type="button" aria-label={ `Play ${trackName} by ${artistName}` }>
                        <span className="fa"></span>
                        <img src={ artWorkPreview } alt={ `${artistName} - ${trackName} cover` } />
                    </button>
                </div>
                <div className={ trackDetails }>
                    <span className={ trackDetailsTitle }>{ trackName }</span>
                    <span className={ trackDetailsArtist }>{ artistName }</span>
                    <span className={ trackDetailsGenre }>{ genre }</span>
                </div>
            </div>
        )

    }

}