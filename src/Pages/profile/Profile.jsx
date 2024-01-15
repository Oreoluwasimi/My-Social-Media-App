import React from 'react';
import "./profile.scss";
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EmailOutlined from '@mui/icons-material/EmailOutlined';
import Posts from '../../components/posts/Posts'


const Profile = () => {
  return (
    <div className='profile'>
      <div className="images">
        <img src="https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="cover-image" className="coverImg"/>
        <img src="https://images.pexels.com/photos/4458627/pexels-photo-4458627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="profile-picture" className="profileImg"/>
      </div>
      <div className="profileContainer">

        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="medium"/>
            </a>
            <a href="https://www.instagram.com/">
               <InstagramIcon fontSize="medium"/>
            </a>

            <a href="https://twitter.com/">
               <TwitterIcon fontSize="medium"/>
            </a>
            <a href="https://www.linkedin.com/feed/">
               <LinkedInIcon fontSize="medium"/>
            </a>
            <a href="https://www.pinterest.com/">
               <PinterestIcon fontSize="medium"/>
            </a>
          </div>
          <div className="center">
            <span>Anna Bella</span>
            <div className="info">

              <div className="item">
              <PlaceIcon />
              <span>UK</span>
              </div>

              <div className="item">
              <LanguageIcon />
              <span>anna.bella</span>
              </div>
              
            </div>
            <button>follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Posts />
       
      </div>
 
    </div>
  )
}

export default Profile