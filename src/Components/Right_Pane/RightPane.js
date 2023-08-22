import React from 'react'
import "./rightPane.css"

export default function RightPane() {
  return (
    <div className='rightPaneBox'>
      <div className="rightPaneContainer">
        <div className="adContainer">
          <span className="sponsered">Sponsered</span>
          <img src="https://scontent.fcmb3-2.fna.fbcdn.net/v/t1.6435-9/147818463_3472947976168025_7667056774071134432_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=9267fe&_nc_eui2=AeGjisVejFbcwgrfW3gIilJlsDyLBDurOfCwPIsEO6s58Od_gd7yqfDhbWXSZ9yfCXdnwrkrij1p0u-7w95dLyWM&_nc_ohc=4j06ml25qMoAX--nPUJ&_nc_ht=scontent.fcmb3-2.fna&oh=00_AfDDBsCUw0690ncXRDbTSY_6Hh855qW2k81NIUx1FIq3hA&oe=65073267" alt="ad" className="adImg" />
          <span className="adText">Purchase Now</span>
        </div>
        <div className="birthdayContainer">
          <img src="https://w7.pngwing.com/pngs/496/156/png-transparent-red-and-blue-gift-box-illustration-gift-christmas-gift-miscellaneous-blue-happy-birthday-vector-images-thumbnail.png" className='birthdayImage' alt="gift" />
          <span className="birthdayText">
            <b>Samwell Tarly</b> and <b>2 others</b> have birthday today.
          </span>
        </div>
        <div className="friendList">
          <li className="onlineFriend">
            <div className="onlinefriendImageContainer">
              <img src="https://wallpapercave.com/wp/wp4309636.jpg" alt="friend1" className="onlineFriendImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlinefriendName">Jorah Mormont</span>
          </li>
          <li className="onlineFriend">
            <div className="onlinefriendImageContainer">
              <img src="https://wallpaperaccess.com/full/1884956.jpg" alt="friend1" className="onlineFriendImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlinefriendName">Sansa Stark</span>
          </li>
          <li className="onlineFriend">
            <div className="onlinefriendImageContainer">
              <img src="https://c4.wallpaperflare.com/wallpaper/832/743/692/tv-show-game-of-thrones-arya-stark-maisie-williams-hd-wallpaper-preview.jpg" alt="friend1" className="onlineFriendImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlinefriendName">Arya Stark</span>
          </li>
          <li className="onlineFriend">
            <div className="onlinefriendImageContainer">
              <img src="https://images.alphacoders.com/445/445825.jpg" alt="friend1" className="onlineFriendImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlinefriendName">Yara Greyjoy</span>
          </li>
          <li className="onlineFriend">
            <div className="onlinefriendImageContainer">
              <img src="https://wallpapercave.com/wp/wp9699459.jpg" alt="friend1" className="onlineFriendImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlinefriendName">Davos Seaworth</span>
          </li>
          <li className="onlineFriend">
            <div className="onlinefriendImageContainer">
              <img src="https://images8.alphacoders.com/850/850705.jpg" alt="friend1" className="onlineFriendImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlinefriendName">Missandei</span>
          </li>
          <li className="onlineFriend">
            <div className="onlinefriendImageContainer">
              <img src="https://c4.wallpaperflare.com/wallpaper/423/124/1011/game-of-thrones-cersei-lannister-lena-headey-wallpaper-preview.jpg" alt="friend1" className="onlineFriendImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlinefriendName">Cersi Lannister</span>
          </li>
          <li className="onlineFriend">
            <div className="onlinefriendImageContainer">
              <img src="https://images6.alphacoders.com/637/637708.jpg" alt="friend1" className="onlineFriendImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlinefriendName">Theon Greyjoy</span>
          </li>

        </div>
      </div>

    </div>
  )
}
