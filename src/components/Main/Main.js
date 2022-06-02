import React from 'react';
import VideoThumb from './VideoThumb';
import './styles.css';

const Main = () => {
  return (
    <div className='main'>
        <VideoThumb url="https://wallup.net/wp-content/uploads/2015/12/215040-anime_girls-anime-artwork-Fate_Series-Tohsaka_Rin.jpg" title="Death Note"/>
        <VideoThumb url="https://wallpapercave.com/wp/wp8009264.jpg" title="One Piece"/>
        <VideoThumb url="http://getwallpapers.com/wallpaper/full/2/6/6/350039.jpg" title="Naruto"/>
        <VideoThumb url="https://wallup.net/wp-content/uploads/2015/12/215040-anime_girls-anime-artwork-Fate_Series-Tohsaka_Rin.jpg" title="JoJo"/>
        <VideoThumb url="https://wallpapercave.com/wp/wp8009264.jpg" title="Haiku"/>
        <VideoThumb url="http://getwallpapers.com/wallpaper/full/2/6/6/350039.jpg" title="Dragon Ball Z"/>
    </div>
  )
}

export default Main