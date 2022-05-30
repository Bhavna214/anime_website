import React from 'react'
import { Avatar } from '@mui/material';
import { useHistory } from 'react-router-dom';

const VideoThumb = () => {
    const history = useHistory();

    const handleThumbClick = () => history.push('/watch')
    const handleAvatarClick = () => history.push('/myProfile')
    return (
        <div className='VideoThumb'>
            <img onClick={handleThumbClick} className="VideoThumb_thumbnail" src='https://my4kwallpapers.com/wp-content/uploads/2020/10/Naruto-4k-Wallpaper.jpg' alt='Thumbnail1' />

            <div className="VideoThumb_details">
                <Avatar onClick={handleAvatarClick} />

                <div className="VideoThumb__Channel">
                    <h1 className="VideoThumb__title">
                        Naruto
                    </h1>

                    <div className="VideoThumb_caption">
                        <p className="VideoThumb_text">Bhavna Mulchandani</p>
                        <p className="VideoThumb_text">10 Views | 2 hours ago</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoThumb;