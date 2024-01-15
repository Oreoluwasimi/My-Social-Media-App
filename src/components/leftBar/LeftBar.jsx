import React from 'react';
import "./leftBar.scss";
import Friends from "../../assets/friends.png";
import Courses from "../../assets/courses.png";
import Events from "../../assets/events.png";
import Fundraiser from "../../assets/fundraiser.png";
import Gallery from "../../assets/gallery.png";
import Gaming from "../../assets/gaming.png";
import Groups from "../../assets/groups.png";
//import Friends from "../../assets/img.png";
import Map from "../../assets/map.png";
import Marketplace from "../../assets/marketplace.png";
import Memories from "../../assets/memories.png";
import Messages from "../../assets/messages.png";
import Tutorials from "../../assets/tutorials.png";
import Videos from "../../assets/videos.png";
import Watch from "../../assets/watch.png";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";


const LeftBar = () => {

    const {currentUser} = useContext(AuthContext);

  return (
    <div className='leftBar'>
        <div className="container">
            <div className="menu">

                <div className="user">
                    <img src={currentUser.profilePic} alt="profile picture" />
                    <span>{currentUser.name}</span>
                </div>

                <div className="item">
                    <img src={Friends} alt="friends" />
                    <span>Friends </span>
                </div>

                <div className="item">
                    <img src={Groups} alt="groups" />
                    <span>Groups </span>
                </div>

                <div className="item">
                    <img src={Marketplace} alt="marketplace" />
                    <span>Marketplace </span>
                </div>

                <div className="item">
                    <img src={Watch} alt="watch" />
                    <span>Watch </span>
                </div>

                <div className="item">
                    <img src={Memories} alt="memories" />
                    <span>Memories </span>
                </div>
            </div>

            <hr/>

            <div className="menu">
                <span>Your shortcuts </span>

                <div className="item">
                    <img src={Events} alt="Events" />
                    <span>Events </span>
                </div>

                <div className="item">
                    <img src={Gaming} alt="Gaming" />
                    <span>Gaming </span>
                </div>

                <div className="item">
                    <img src={Gallery} alt="gallery" />
                    <span>Gallery </span>
                </div>

                <div className="item">
                    <img src={Videos} alt="Videos" />
                    <span>Videos </span>
                </div>

                <div className="item">
                    <img src={Messages} alt="Messages" />
                    <span>Messages </span>
                </div>

            </div>
            <hr/>

        <div className="menu">
            <span>Others  </span>

            <div className="item">
                <img src={Fundraiser} alt="Fundraiser" />
                <span>Fundraiser </span>
            </div>

            <div className="item">
                <img src={Tutorials} alt="Tutorials" />
                <span>Tutorials </span>
            </div>

            <div className="item">
                <img src={Courses} alt="Courses" />
                <span>Courses </span>
            </div>

        </div>
        </div>
    </div>
  )
}

export default LeftBar