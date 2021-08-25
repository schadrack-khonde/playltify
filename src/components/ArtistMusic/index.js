import React from 'react'
import { Wrapper, MusicTitle, MusicRelease, MusicBg } from './Music-style';



const ArtistMusic = ({MusicPoster, Title, Year }) => {
    return (
        <Wrapper>
            <MusicBg src={MusicPoster}/>
            <MusicTitle>
                {Title}
            </MusicTitle>
            <MusicRelease>
                {Year}
            </MusicRelease>
        </Wrapper>
    )
}

export default ArtistMusic;

