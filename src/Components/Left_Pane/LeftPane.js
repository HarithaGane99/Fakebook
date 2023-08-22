import React from 'react'
import "./leftPane.css"
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import EventIcon from '@mui/icons-material/Event';
import GroupsIcon from '@mui/icons-material/Groups';
import HistoryIcon from '@mui/icons-material/History';
import StoreIcon from '@mui/icons-material/Store';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import FlagIcon from '@mui/icons-material/Flag';
import NewspaperIcon from '@mui/icons-material/Newspaper';


export default function LeftPane() {
  return (
    <div className='leftPaneBox'>
      <div className="leftPaneContainer">
        <div className="leftPaneMenu">
            <li className="leftPaneMenuItem">
                <PeopleAltIcon className='leftPaneMenuIcon'/>
                <span className="leftPaneMenuText">Friends</span>
            </li>
            <li className="leftPaneMenuItem">
                <HistoryIcon className='leftPaneMenuIcon'/>
                <span className="leftPaneMenuText">Memories</span>
            </li>
            <li className="leftPaneMenuItem">
                <BookmarkIcon className='leftPaneMenuIcon'/>
                <span className="leftPaneMenuText">Saved</span>
            </li>
            <li className="leftPaneMenuItem">
                <NewspaperIcon className='leftPaneMenuIcon'/>
                <span className="leftPaneMenuText">Feeds</span>
            </li>
            <li className="leftPaneMenuItem">
                <EventIcon className='leftPaneMenuIcon'/>
                <span className="leftPaneMenuText">Events</span>
            </li>
            <li className="leftPaneMenuItem">
                <GroupsIcon className='leftPaneMenuIcon'/>
                <span className="leftPaneMenuText">Groups</span>
            </li>
            <li className="leftPaneMenuItem">
                <StoreIcon className='leftPaneMenuIcon'/>
                <span className="leftPaneMenuText">Marketplace</span>
            </li>
            <li className="leftPaneMenuItem">
                <OndemandVideoIcon className='leftPaneMenuIcon'/>
                <span className="leftPaneMenuText">Videos</span>
            </li>
            <li className="leftPaneMenuItem">
                <SportsEsportsIcon className='leftPaneMenuIcon'/>
                <span className="leftPaneMenuText">Play Games</span>
            </li>
            <li className="leftPaneMenuItem">
                <FlagIcon className='leftPaneMenuIcon'/>
                <span className="leftPaneMenuText">Pages</span>
            </li>
            <hr/>
            <div className="pagesYouLiked">
                <h3>Pages You Liked</h3>
            </div>
           <div className="pageList">
           <li className="pageListItem">
                <img src="https://c4.wallpaperflare.com/wallpaper/601/175/806/house-targaryen-game-of-thrones-dragon-wallpaper-preview.jpg" alt="Targaryen" className="pagePic" />
                <span className="pageName">The Targaryen Supremacy</span>
            </li>
            <li className="pageListItem">
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/82c524ee-6c09-46e1-a33c-01f1951814e1/d8sv9iw-a9fc6162-9916-41e9-9a8a-d0f9301f7e94.png/v1/fit/w_828,h_466,q_70,strp/game_of_thrones_wallpaper__iron_bank_of_braavos_by_magaax_d8sv9iw-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvODJjNTI0ZWUtNmMwOS00NmUxLWEzM2MtMDFmMTk1MTgxNGUxXC9kOHN2OWl3LWE5ZmM2MTYyLTk5MTYtNDFlOS05YThhLWQwZjkzMDFmN2U5NC5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.zBs-j4RvoW6TgdM8X0rxeUQPOcf00a-y4PQ0MGU8CU4" alt="Targaryen" className="pagePic" />
                <span className="pageName">Iron Bank of Braavos</span>
            </li>
            <li className="pageListItem">
                <img src="https://wallpaperaccess.com/full/808175.jpg" alt="Targaryen" className="pagePic" />
                <span className="pageName">The Wall</span>
            </li>
            <li className="pageListItem">
                <img src="https://w0.peakpx.com/wallpaper/571/642/HD-wallpaper-house-lannister-casterly-rock-game-game-of-thrones-hear-me-roar-roar-thrones.jpg" alt="Targaryen" className="pagePic" />
                <span className="pageName">The Lannister Allegiance</span>
            </li>
            <li className="pageListItem">
                <img src="https://wallpapercave.com/wp/wp2115958.jpg" alt="Targaryen" className="pagePic" />
                <span className="pageName">Faceless Men</span>
            </li>
            <li className="pageListItem">
                <img src="https://wallpaperaccess.com/full/2341892.jpg" alt="Targaryen" className="pagePic" />
                <span className="pageName">Kings Landing</span>
            </li>
            <li className="pageListItem">
                <img src="https://e0.pxfuel.com/wallpapers/299/399/desktop-wallpaper-iron-islands-game-of-thrones-castles-game-of-thrones-instagram-dragonstone.jpg" alt="Targaryen" className="pagePic" />
                <span className="pageName">Iron Islands</span>
            </li>
           </div>
        </div>
      </div>

    </div>
  )
}
