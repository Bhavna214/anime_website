// import { MenuIcon,VideoCallIcon, Apps, Notifications,SearchIcon} from '@mui/icons-material'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {Avatar, Button} from '@mui/material';
import React from 'react'
import logo from "../../assets/logo.png";
import './styles.css'

const Header = () => {
  return (
    <div className="header">
        <div className='header__left'>
            <MenuIcon className="header__menuicon"/>
            <img className='header__logo' src={logo} alt="Animino"/>
        </div>

        <form className="header__center">
            <input className='header__input' placeholder='Search'/>
            <Button style={{ backgroundColor: "rgb(67, 67, 67)" , color:"white", borderTopLeftRadius:0, borderBottomLeftRadius:0, borderTopRightRadius:2, borderBottomRightRadius:2}} className='header__btn' >
                <SearchIcon className="header__searchIcon"/>
            </Button>
        </form>

        <div className='header__right'>
            <VideoCallIcon/>
            <AppsIcon/>
            <NotificationsIcon/>
            <Avatar/>
        </div>
    </div>
  )
}

export default Header


// D:\2ndYear\4thSem\WebD\anime_website-master\src\assets