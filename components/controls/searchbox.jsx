import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import {
    searchBox, searchBoxList
} from 'client/styles/main.styl'

import Track from 'components/blocks/track.jsx'

export default class Header extends Component {

    constructor(props){
        super(props)
        this.state = {
            items: [],
            term: '',
            song: null,
            currentTrack: null,
        }
    }

    handleSearch(){
        return (e) => {
            e.preventDefault()
            this.submitTerm(this.refs.searchInput.value)
        }
    }

    submitTerm(term){
        this.setState({
            term: term,
        })
        console.log('Request to', `https://itunes.apple.com/search?term=${term}&country=US&&media=music`)
        fetch(`https://itunes.apple.com/search?term=${term}&country=US&&media=music`, {
            method: 'GET',
            mode: 'cors',
            cache: 'default'
        })
        .then(res => res.json())
        .then((data) => {
            console.log('data', data)
            this.pushData(data.results)
        }).catch((err)=>{
            console.log('Err', err)
        })
    }

    pushData(data){
        this.setState({
            items: data.map((item) => {
                return {
                    artWorkPreview: (item.artworkUrl100 ) ? item.artworkUrl100 : '/public/no-preview.jpg',
                    preview: (item.previewUrl) ? item.previewUrl : false,
                    trackName: item.trackName,
                    artistName: item.artistName,
                    genre: item.primaryGenreName,
                    artistId: item.artistId,
                    id: item.trackId,
                }
            })
        })
    }

    playSong(track){
        return () => {
            if(track){
                const oldSong = this.state.song
                if(oldSong)
                    oldSong.pause()
                const song = new Audio(track.preview)
                song.play()
                song.onended = (e) => {
                    if( this.state.currentTrack == track.id )
                        this.setState({
                            song: null,
                            currentTrack: null,
                        })
                }
                this.setState({
                    song: song,
                    currentTrack: track.id
                })
            }
        }
    }

    pauseSong(){
        const { song } = this.state
        if (song) {
            song.pause()
            this.setState({
                song: null,
                currentTrack: null,
            })
        }
    }


    render() {

        const { items, term, currentTrack } = this.state

        return (
            <div className={ searchBox } onSubmit={ this.handleSearch() }>
                <form autoComplete={ false }>
                    <input ref="searchInput" name="search" type="text" placehoder="Search for a song..." aria-label="Search for a song"/>
                    <button type="submit" arial-label="Search submit">
                        <span className="fa fa-search"></span>
                    </button>
                </form>
                <h2 id="search-title" area-live={ `Search results for "${term}"` }>Search results for "{ term }"</h2>
                <ul className={ searchBoxList } aria-labeledby="search-title">
                    { 
                        items.map((item, key) => {
                            return <li key={key}><Track active={ currentTrack == item.id } pauseSong={ this.pauseSong.bind(this) } playSong={ this.playSong(item) } item={ item } /></li>
                        })
                    }
                </ul>
            </div>
        )
    }

}