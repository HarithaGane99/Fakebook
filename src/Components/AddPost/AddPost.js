import React from 'react'
import "./addPost.css"
import LiveTvIcon from '@mui/icons-material/LiveTv';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

export default function AddPost() {
  return (
    <div className='addPost'>
        <div className="addPostContainer">
            <div className="addPostTop">
                <img src="https://w0.peakpx.com/wallpaper/804/345/HD-wallpaper-tyrion-in-game-of-thrones-season-6-game-of-thrones-tv-shows.jpg" alt="propic" className="addPostPic" />
                <input type="text" placeholder="What's on your mind?" className="addPostInput" />
            </div>

            <hr className='addPostHr'/>

            <div className="addPostBottom">
                <div className="addPostOptions">
                    <div className="addPostOption">
                        <LiveTvIcon htmlColor='red' className='golive'/>
                        <span className="goLiveText">Live video</span>
                    </div>
                    <div className="addPostOption">
                        <PhotoLibraryIcon htmlColor='green' className='addPhotos'/>
                        <span className="addPhotoText">Photo/video</span>
                    </div>
                    <div className="addPostOption">
                        <InsertEmoticonIcon htmlColor='#DCB217' className='golive'/>
                        <span className="feelingText">Feeling/activity</span>
                    </div>
                </div>

            </div>
        </div>
      
    </div>
  )
}
