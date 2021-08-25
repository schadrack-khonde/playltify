import styled from 'styled-components';






export const Wrapper = styled.div`
    display:flex;
    align-items:center;
    height: 4rem;
    padding: .8rem 1.8rem;
    margin-bottom: 3rem;
    &:hover{
        background-color: #222;
        box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
        border-radius: 10px;
        transition: 100ms ease-in-out;
    }
    svg{
        color:#fbfbfb;
        font-size: 1.3rem;
    }
`

export const ReleaseImage = styled.img`
    height: 100%;
    width: 3rem;
    border-radius: 5px;
    margin-right: 2rem;
`

export const ReleaseDescriptionContainer = styled.div``
export const ReleaseTitle = styled.h3`
    color: #fbfbfb;
`

export const ReleaseDescription = styled.p`
    color: #585858;
    font-weight: bolder;
    padding-top: 4px;
    padding-right: 6rem;
`

export const ReleaseLength = styled.h3`
    color: #fbfbfb;
    margin-right:  2rem ;
`

