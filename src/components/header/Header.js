// import { MenuIcon,VideoCallIcon, Apps, Notifications,SearchIcon} from '@mui/icons-material'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {Avatar, Badge, Button, Popover} from '@mui/material';
import CameraAltOutlined from '@mui/icons-material/CameraAltOutlined';
import PersonAddOutlined from '@mui/icons-material/PersonAddOutlined';
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

            <Popover open={open}
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
                <div className="home__popoverContainer">
                    <div className="home__popover__top">
                        <Badge overlap='circle' 
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right'
                        }}
                        badgeContent={
                            <div className='home__badge'>
                                <CameraAltOutlined className='home__camera' />
                            </div>
                        }>
                            <Avatar className="home__avatar" />
                        </Badge>
                        <div className="home__text">
                            <div className="home__displayName">Creator</div>
                            <div className="home__mail">user@gmail.com</div>
                        </div>
                        <div className="home_btn">Manage your google account</div>
                    </div>
                    
                    <div className="home__popover_btm">
                        <div className="home__addBtn">
                            <PersonAddOutlined className="home__addIcon" />
                            <p>Add another account</p> 
                        </div>

                        <Button variant="outlined" className="home__signOut">
                            Sign Out
                        </Button>

                        <div className="home__popover_footer">
                            <p>Privacy Policy</p>
                            <span>•</span>
                            <p>Terms of service</p>
                        </div>
                    </div>
                </div>
            </Popover>
        </div>
    </div>
  )
}

export default Header


// D:\2ndYear\4thSem\WebD\anime_website-master\src\assets