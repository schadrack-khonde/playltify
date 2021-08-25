import React from "react";
//components
import Artist from "./Artist";
import ArtistMusic from "./ArtistMusic";
import Release from "./Release";
import Playlist from "./Playlist";
//css style
import './home.css';
//images
import tulip from '../images/tulip.jpg';
import rose from '../images/rose.jpg';
import sun from '../images/sun.jpg';
import nebula from '../images/nebula.jpg';
import white from '../images/white.jpg';
import dark from '../images/black.jpg';
import aroundImg from '../images/around_us.jpg';
import relax from '../images/relax.jpg';
import nightvibes from '../images/nightvibes.jpg';
import romance from '../images/romance.jpg';
import enjoyfull from '../images/enjoyfull.jpg';
/*need 3 props to pass to the artMusic components releaseImage, releaseTitle, releaseDescription, releaseLength*/
const Home = () => {
    return (
        <div className="home-container">
            <div className="home-content">
                <Artist/>
                <div className="artist-musics">
                    <ArtistMusic   Title='Tulip' Year="2021"  MusicPoster={tulip} />
                    <ArtistMusic   Title='Gold Rose' Year="2021" MusicPoster={rose} />
                    <ArtistMusic   Title='The Sun' Year="2021"  MusicPoster={sun}/>
                    <ArtistMusic  Title='Nebula' Year="2021" MusicPoster={nebula} />
                </div>

                <div className="release_title">
                    <div className ='release-container'>
                        <h2>New Release</h2>
                        <Release releaseImage={white} releaseTitle='All about you' releaseDescription='Cameron William -Tulip' releaseLength='04:10'/>
                        <Release releaseImage={dark} releaseTitle='Flashscreen' releaseDescription='Cameron William -Tulip' releaseLength='03:58'/>
                        <Release releaseImage={aroundImg} releaseTitle='Around us' releaseDescription='Cameron William -Tulip' releaseLength='04:26'/>
                    </div>
                    <div className ='playlist-container'>
                        <h2>Playlist</h2>
                        <div className="playlist-element">
                            <div><Playlist  playListImg= {relax} playlistGenre='Relax'/></div>
                            <div><Playlist  playListImg= {nightvibes} playlistGenre='Night Vibes'/></div>
                            <div><Playlist  playListImg= {romance} playlistGenre='Romance'/></div>
                            <div><Playlist  playListImg= {enjoyfull} playlistGenre='Enjoyfull'/></div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;