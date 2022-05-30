import React from 'react'
import { BookmarkBorderOutlined, FavoriteBorderOutlined, IosShare } from '@mui/icons-material'
import { Avatar, Button } from '@mui/material';
import './style.css'
import videoURL from '../../assets/videos/Video1.mp4'
import { useHistory } from 'react-router-dom';

const Watch1 = () => {
    const history = useHistory();
    const handleAvatarRedirect = () => history.push('/myProfile')
    return (
        <div className="watch">
            <div className="user">
                <div className="avatar">
                    <Avatar style={{cursor:'pointer'}} className='watch__Avatar' onClick={handleAvatarRedirect}/>
                </div>

                <div className="userInfo">
                    <h1 className='username'>Bhavna Mulchandani</h1>
                    <p className="followers">33 followers</p>
                </div>

                <div className="follow">
                    <Button variant="contained" className='follow_btn' style={{backgroundColor:"#0cdde4"}}>FOLLOW</Button>
                </div>
            </div>

            <div className="video">
                <video className="watch_video" controls autoPlay={true}>
                    <source src={videoURL} type='video/mp4' />
                </video>
            </div>

            <div className="Info">
                <div className="video_title">
                    <h1>Death Note!</h1>
                    <p>123 views</p>
                </div>

                <div className="views_and_likes">

                    <div className="icons">
                        <div className="like">
                            <FavoriteBorderOutlined className='watch_icon' />
                            <p>1000</p>
                        </div>

                        <div className="share">
                            <IosShare className='watch_icon share_icon' />
                            <p>SHARE</p>
                        </div>

                        <div className="save">
                            <BookmarkBorderOutlined className='watch_icon save_icon' />
                            <p>SAVE</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="caption">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti ut sint neque labore sed molestiae natus tempore laudantium rem nihil praesentium culpa, nulla repellat eligendi modi commodi libero iure odio soluta optio quis, impedit suscipit? At aut perferendis earum itaque unde animi suscipit voluptates numquam aperiam error est nam iure obcaecati, nesciunt dolorum doloremque amet sit quidem quis natus.
            </div>
        </div>
    )
}

export default Watch1