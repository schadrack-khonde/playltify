import React from 'react'
import { PlayListGenre, PlayListImg } from './Playlist-style'

const Playlist = ({playListImg, playlistGenre})=> {
    return (
        <div>
            <PlayListImg src={playListImg}/>
            <PlayListGenre>{playlistGenre}</PlayListGenre>
        </div>
    )
}

export default Playlist
