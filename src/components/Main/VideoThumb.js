import React from 'react'
import { Avatar } from '@mui/material';
import { useHistory } from 'react-router-dom';

const VideoThumb = (props) => {
    const history = useHistory();

    const handleThumbClick = () => history.push('/watch')
    const handleAvatarClick = () => history.push('/myProfile')
    return (
        <div className='VideoThumb'>
            <img onClick={handleThumbClick} className="VideoThumb_thumbnail" src={props.url} alt='Thumbnail1' />

            <div className="VideoThumb_details">
                <Avatar onClick={handleAvatarClick} />

                <div className="VideoThumb__Channel">
                    <h1 className="VideoThumb__title">
                        {props.title}
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