import React from 'react';
//styled components
import { Wrapper, ArrowBtn, ArtistName,  MusicGenre, ArtistImageContainer, ArtistImage } from './Artist-style';
//react icons
import {BiArrowBack} from 'react-icons/bi';
import {HiBadgeCheck} from 'react-icons/hi';
//artist image
import ArtistePictures from "../../images/romance.jpg";

const Artist = () => {
    return (
        <Wrapper>
            <ArrowBtn>
                <BiArrowBack/>
            </ArrowBtn>
            <ArtistImageContainer>
                <ArtistImage src={ArtistePictures}/>
            </ArtistImageContainer>
            <ArtistName>
                <div>
                    <h1>Cameron Williamson</h1>
                    <MusicGenre>Pop</MusicGenre>
                </div>
                <HiBadgeCheck/>
            </ArtistName>
        </Wrapper>
    )
}

export default Artist
