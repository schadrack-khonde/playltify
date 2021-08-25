import React from 'react'
import { ReleaseImage, ReleaseLength, ReleaseTitle, Wrapper, ReleaseDescription , ReleaseDescriptionContainer} from './Release-style'
import {HiDotsHorizontal} from 'react-icons/hi';
const Release = ({releaseImage, releaseTitle, releaseDescription, releaseLength})=> {
    return (
        <Wrapper>
            <ReleaseImage src={releaseImage}/>
            <ReleaseDescriptionContainer>
                <ReleaseTitle>{releaseTitle}</ReleaseTitle>
                <ReleaseDescription>{releaseDescription}</ReleaseDescription>
            </ReleaseDescriptionContainer>
            <ReleaseLength>{releaseLength}</ReleaseLength>
            <HiDotsHorizontal/>
        </Wrapper>
        

    )
}

export default Release
