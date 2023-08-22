import React from 'react'
import "./post.css"

export default function Post() {
  return (
    <div className='post'>
        <div className="postContainer">
            <div className="postTop">
              <div className="postTopLeft">
              <img src="https://c4.wallpaperflare.com/wallpaper/895/752/839/sword-game-of-thrones-game-of-thrones-jon-snow-wallpaper-preview.jpg" alt="profile_picture" className="postImage" />
                <span className="postUserName">Jon Snow</span>
                <span className="postTime">5 minutes ago</span>
              </div>
               
            </div>
            <div className="postCenter">
                <div className="postCaption">
                Winter is coming, but I'm not afraid.
                </div>
                <img src="https://c4.wallpaperflare.com/wallpaper/795/348/1018/tv-show-game-of-thrones-jon-snow-kit-harington-hd-wallpaper-preview.jpg" alt="posted Photo" className="postedImage" />
            </div>
            <div className="postBottom">
              <div className="postBottomLeft">
                <img src="https://image.similarpng.com/very-thumbnail/2020/06/Icon-like-button-transparent-PNG.png" className="reactions" alt="like"/>
                <img src="https://www.freeiconspng.com/thumbs/facebook-love-png/facebook-love-png-3.png" className="reactions" alt="heart"/>
                <img src="https://w7.pngwing.com/pngs/673/383/png-transparent-facebook-reaction-haha-hd-logo-thumbnail.png" className="reactions" alt="haha"/>
                <span className="likeCount">Jamie Lannister, Podrick Payne and 81 others</span>
              </div>
              <div className="postBottomRight">
                <span className="commentCount">12 comments</span>
              </div>
            </div>
        </div>
      
    </div>
  )
}
