import {Home, OndemandVideo, Settings, Subscriptions, ThumbUpAltOutlined, Whatshot } from '@mui/icons-material'
import React from 'react'
import { useHistory } from 'react-router-dom'
import './styles.css'
const Sidebar = ({changeWidth}) => {
    const history=useHistory();
    const handleClick=()=>history.push("/")
  return (
    <div className='sidebar'>
        <div classname="sidebar__buttons">
            <div onClick={handleClick} className='sidebar__btn sidebar__btn--active'>
                <Home className="sidebar__icon"/>
                <p>Home</p>
            </div>
            <div className='sidebar__btn'>
                <Whatshot className="sidebar__icon"/>
                <p>Trending</p>
            </div>
            <div className='sidebar__btn'>
                <Subscriptions className="sidebar__icon"/>
                <p>Following</p>
            </div>
        </div>
        <div className="sidebar__buttons bottom">
            {/* <div className='sidebar__btn'>
                <VideoLibrary className="sidebar__icon"/>
                <p>Playlists</p>
            </div> */}
            <div className="sidebar__btn">
                <ThumbUpAltOutlined className="sidebar__icon"/>
                <p>Liked Videos</p>
            </div>
            <div className="sidebar__btn">
                <OndemandVideo className="sidebar__icon"/>
                <p>Your Videos</p>
            </div>
            {/* <div className='sidebar__btn'>
                <History className="sidebar__icon"/>
                <p>History</p>
            </div> */}
            <div className='sidebar__btn'>
                <Settings className="sidebar__icon"/>
                <p>Settings</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar