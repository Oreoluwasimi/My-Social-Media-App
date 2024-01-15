import React from 'react';
import "./comments.scss";
import { useContext } from "react";
//import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "../../context/authContext";

const Comments = () => {

    const {currentUser} = useContext(AuthContext);

    const comments = [

        {
            id: 1,
            name: "Jane Doe",
            userId: 1,
            profilePic: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            desc: "Quidem dicta nesciunt, debitis laborum voluptas nihil ipsum eos repellendus",
          
        },
        {
            id: 2,
            name: "Anna Bella",
            userId: 2,
            profilePic: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            desc: "Quidem dicta nesciunt, debitis laborum voluptas nihil ipsum eos repellendus",
            
        },
        {
            id: 3,
            name: "Alice Wonder",
            userId: 3,
            profilePic: "https://images.pexels.com/photos/3767392/pexels-photo-3767392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            desc: "Quidem dicta nesciunt, debitis laborum voluptas nihil ipsum eos repellendus",
            
        },
       
    ]
  return (
    <div className="comments">
        <div className="write">
            <img src={currentUser.profilePic} alt="" />
            <input type="text" placeholder="write a comment" />
            <button>Send</button>
        </div>
        {comments.map(comment => (
            <div className="comment">
                <img src={comment.profilePic} alt="" />
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <span className='date'>1 hour ago</span>
            </div>
        )

        )}
    </div>
  )
}

export default Comments