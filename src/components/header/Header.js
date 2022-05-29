// import { MenuIcon,VideoCallIcon, Apps, Notifications,SearchIcon} from '@mui/icons-material'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {Avatar, Button, makeStyles, Popover} from '@mui/material';
import React from 'react'
import logo from "../../assets/logo.png";
import './styles.css'

// const useStyles = makeStyles((theme)=>({
//     large: {
//         width: theme.spacing(7),
//         height: theme.spacing(7)
//     }
// }))

const Header = () => {
    // const classes= useStyles();
    const [anchorEl,setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    const open = Boolean(anchorEl)
    const id = open ? "simple popover" : undefined;

  return (
    <div className="header">
        <div className='header__left'>
            <MenuIcon className="header__menuicon"/>
            <img className='header__logo' src={logo} alt="Animino"/>
            <h3 className='header__name'>ANIMINO</h3>
        </div>

        <form className="header__center">
            <input className='header__input' placeholder='Search'/>
            <Button style={{ backgroundColor: "rgb(67, 67, 67)" , color:"white", borderTopLeftRadius:0, borderBottomLeftRadius:0, borderTopRightRadius:2, borderBottomRightRadius:2}} className='header__btn' >
                <SearchIcon className="header__searchIcon"/>
            </Button>
        </form>

        <div className='header__right'>
            <VideoCallIcon/>
            <NotificationsIcon/>
            <Avatar onClick={handleClick} />

            <Popover 
                open={open}
                id={id}
                onClose={handleClose}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center"
                }}
                transformOrigin={{
                    vertical: "top"
                }}
            >
                <h1>Hello</h1>
            </Popover>
        </div>
    </div>
  )
}

export default Header


// D:\2ndYear\4thSem\WebD\anime_website-master\src\assets