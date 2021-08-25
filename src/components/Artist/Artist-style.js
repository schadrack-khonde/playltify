import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    height: 4rem;  
`
export const ArrowBtn = styled.button`
    border: none;
    background-color:transparent;
    svg{
        color:#909090;
        font-size: 1.5rem;
    }
`

export const ArtistImage = styled.img`
    height:100%;
    width:100%;
    border-radius: 50%;
`

export const ArtistImageContainer = styled.div`
    max-height: 4rem;
    max-width: 4rem;
    margin-left: 2rem;
`

export const ArtistName = styled.div`
    display:flex;
    div{
        padding: 0 0.7rem ;
        h1{
        color: #fbfbfb;
        padding-bottom:  0.7rem;
        }
    }
    svg{
        color:#2a71fe;
        font-size: 2rem;
    }
    
`

export const MusicGenre = styled.a`
    color: #909090;
    font-weight: bolder;
    font-size: 1.1rem;
`