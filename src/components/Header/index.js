import React from 'react';
//import styled component
import {  Wrapper,Content,Playtify,LInkContainer } from './Header-style';
//import icons
import {CgMusicNote} from 'react-icons/cg';
import {HiHome} from 'react-icons/hi';
import {RiSearch2Fill} from 'react-icons/ri';
import {IoMdListBox} from 'react-icons/io';
import {FaUser} from 'react-icons/fa';
import Links from '../Links';






const Header = () => {
    return (
        <Wrapper>
          <Content>
            <Playtify>
              <div>
                <CgMusicNote/>
              </div>
              <h2>Playtify</h2>
            </Playtify>
            <LInkContainer>
              <HiHome/>
              <Links Path='/' Page='Home'/>
            </LInkContainer>
            <LInkContainer>
              <RiSearch2Fill/>
              <Links Path='/search' Page='Search' Icon={RiSearch2Fill}/>
            </LInkContainer>
            <LInkContainer>
              <IoMdListBox/>
              <Links Path='/mymusic' Page='My Playlist' Icon={IoMdListBox}/>
            </LInkContainer>
            <LInkContainer>
              <FaUser/>
              <Links Path='/account' Page='Account' Icon={FaUser}/>
            </LInkContainer>
            
          </Content>
        </Wrapper>
    )
}
export default Header;
