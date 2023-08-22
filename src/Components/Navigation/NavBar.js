import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import "./navBar.css"


export default function NavBar() {
  return (
    <div className="navBarBox">

      <div className="navBarLeft">
        <span className='logo'>Facebook</span>
      </div>

      <div className="navBarCenter">
        <div className="searchBarBox">
            <SearchIcon className='searchIcon'/>
            <input placeholder='Search Facebook' className='searchInput'/>
        </div>
      </div>

      <div className="navBarRight">
        <div className="navBarLinks">
            <span className='navBarLink'>Home</span>
            <span  className='navBarLink'>Profile</span>

        </div>
        <div className="navBarIcons">
            
                <div className="navBarIcon">
                    <PersonAddIcon/>
                    <span className="iconTag">3</span>
                </div>
                <div className="navBarIcon">
                    <MessageIcon/>
                    <span className="iconTag">5</span>
                </div>
                <div className="navBarIcon">
                    <NotificationsIcon/>
                    <span className="iconTag">11</span>
                </div>
            </div>
            <div className="pic">
                <img src="https://w0.peakpx.com/wallpaper/804/345/HD-wallpaper-tyrion-in-game-of-thrones-season-6-game-of-thrones-tv-shows.jpg" alt="profile picture" className='profilePicImg'/>
            </div>
        </div>
      </div>
    
  );
}
