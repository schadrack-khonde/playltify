import styled from "styled-components";


export const Wrapper = styled.div`
   background-color: #222;
   position:fixed;
   width:20%;
   height: 100%;
`
export const Content = styled.div`
   margin: 3rem 4rem ;
`
export const Playtify = styled.div`
   display:flex;
   align-items:center;
   margin-bottom:3rem;
   div{
      background-color:#2a71fe;
      width: max-content;
      padding:0.7rem;
      border-radius:50%;
      margin-right: 7px;
      box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
      svg{
         color:#fbfbfb;
         font-size: 1.5rem;
      }
   }
   h2{
      color:#fbfbfb;
   }
`
export const LInkContainer = styled.div`
   display:flex;
   align-items:center;
   margin: 1.8rem 0;
   svg{
      color:#909090;
      font-size: 1.5rem;
   }
   svg:hover{
      color: #fbfbfb;
      transition: 100ms ease-in-out;
   }
   a{
      text-decoration:none;
      color:#fbfbfb;
      font-weight: bold;
      font-size:1.1rem;
      margin-left: 1rem;
   }
   a:hover{
      color: #2a71fe;
      transition: 100ms ease-in-out;
   }

`