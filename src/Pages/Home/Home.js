import React from 'react'
import NavBar from '../../Components/Navigation/NavBar'
import LeftPane from '../../Components/Left_Pane/LeftPane'
import RightPane from '../../Components/Right_Pane/RightPane'
import "./home.css"
import PostPane from '../../Components/PostPane/PostPane'


export default function () {
  return (
    <React.Fragment>
         <NavBar/>
            <div className="bottomContainer">
                <LeftPane/>
                <PostPane/>
                <RightPane/>
            </div>
      
      
      
    </React.Fragment>
  )
}
