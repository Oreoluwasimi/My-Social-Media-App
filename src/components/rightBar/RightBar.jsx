import React from 'react'
import "./rightBar.scss";


const RightBar = () => {
  return (
    <div className='rightBar'>
        <div className="container">
            <div className="item">
                <span>Suggestions for you</span>
                <div className="user">
                    <div className="userInfo">
                        <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)" alt="" />
                        <span> Anna Bella</span>
                    </div>
                    <div className="buttons">
                        <button> Follow </button>
                        <button>Dismiss</button>
                    </div>
                </div>
                <div className="user">
                    <div className="userInfo">
                        <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)" alt="" />
                        <span> Anna Bella</span>
                    </div>
                    <div className="buttons">
                        <button> Follow </button>
                        <button>Dismiss</button>
                    </div>
                </div>
            </div>
            <div className="item">
                <span>Latest Activities </span>
                
                <div className="user">
                    <div className="userInfo">
                        <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)" alt="" />
                       
                    <p>
                    <span> Anna Bella</span>
                    changed their cover picture
                    </p>
                    </div>
                   <span>1 min ago</span>
                </div>

                <div className="user">
                    <div className="userInfo">
                        <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)" alt="" />
                        
                        <p>
                            <span> Anna Bella</span>
                            liked a comment
                        </p>
                    </div>
                    <span>2 mins ago</span>
                </div>

                <div className="user">
                    <div className="userInfo">
                        <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)" alt="" />
                        
                        <p>
                            <span> Anna Bella</span>
                            made a comment 
                        </p>
                    </div>
                    <span>4 mins ago</span>
                </div>
                
            </div>

            <div className="item">
                <span>Online Friends</span>

                <div className="user">
                    <div className="userInfo">
                        <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)" alt="" />   
                           
                        <div className="online" />                                 
                        <span> Anna Bella</span>                                              
                    </div>                   
                </div>

                <div className="user">
                    <div className="userInfo">
                        <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)" alt="" />   
                           
                        <div className="online" />                                 
                        <span> Anna Bella</span>                                              
                    </div>                   
                </div>

                <div className="user">
                    <div className="userInfo">
                        <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)" alt="" />  
                           
                        <div className="online" />                                  
                        <span> Anna Bella</span>                                              
                    </div>                   
                </div>
                <div className="user">
                    <div className="userInfo">
                        <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)" alt="" />                                   
                        
                        <div className="online" /> 
                        <span> Anna Bella</span>
                                                                    
                    </div>                   
                </div>

            </div>
        </div>
    </div>
  )
}

export default RightBar