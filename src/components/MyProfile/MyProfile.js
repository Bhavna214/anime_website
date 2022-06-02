import { Avatar, Button } from '@mui/material'
import React from 'react'
import img from '../../assets/Thumbnail3.jpg'
import './styles.css'
import VideoThumb from '../Main/VideoThumb.js';


const MyProfile = (props) => {
  return (
    <div className='channel'>
        <img className='channel__art' src={img} alt="Channel Art"></img>
        
        <div className='channel__details'>
        <div className='channel__detailsWrap'>
        <div className='channel__avatarWrap'>
            <Avatar className='channel__avatar'/>
            <h1 className="user_title">
                Bhavna Mulchandani
            </h1>
            
            <p className="VideoThumb_text watch_subCount">10K Followers</p>
            <Button className='follow__btn watch__subBtn channel__subBtn' variant='contained'>FOLLOW</Button>
       
        </div>
            </div>
            </div>
            <div className='channel__links'>
                <div className='channel__link'>
                    <p>HOME</p>
                </div>
                <div className='channel__link channel__link--active'>
                    <p>VIDEOS</p>
                </div>
                <div className='channel__link'>
                    <p>TRENDING</p>
                </div>

                <div className='channel__link'>
                    <p>LIKED VIDEOS</p>
                </div>
                
            
        </div>
        <div className='channel__content'>
            <div className='channel__contentWrapper'>
            <VideoThumb channelView url="https://wallup.net/wp-content/uploads/2015/12/215040-anime_girls-anime-artwork-Fate_Series-Tohsaka_Rin.jpg" title="Death Note"/>
            <VideoThumb channelView url="https://wallup.net/wp-content/uploads/2015/12/215040-anime_girls-anime-artwork-Fate_Series-Tohsaka_Rin.jpg" title="Death Note"/>
            <VideoThumb channelView url="https://wallup.net/wp-content/uploads/2015/12/215040-anime_girls-anime-artwork-Fate_Series-Tohsaka_Rin.jpg" title="Death Note"/>
            <VideoThumb channelView url="https://wallup.net/wp-content/uploads/2015/12/215040-anime_girls-anime-artwork-Fate_Series-Tohsaka_Rin.jpg" title="Death Note"/>
            <VideoThumb channelView url="https://wallup.net/wp-content/uploads/2015/12/215040-anime_girls-anime-artwork-Fate_Series-Tohsaka_Rin.jpg" title="Death Note"/>

            </div>
        </div>
    </div>
  )
}

export default MyProfile;