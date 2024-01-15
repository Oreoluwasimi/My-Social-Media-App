import React from 'react';
import "./posts.scss";
import Post from '../post/Post';

const Posts = () => {


  const posts = [
    {
        id: 1,
        name: "Jane Doe",
        userId: 1,
        profilePic: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        desc: "Quidem dicta nesciunt, debitis laborum voluptas nihil ipsum eos repellendus",
        img: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        id: 2,
        name: "Anna Bella",
        userId: 2,
        profilePic: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        desc: "Quidem dicta nesciunt, debitis laborum voluptas nihil ipsum eos repellendus",
        img: "https://images.pexels.com/photos/541216/pexels-photo-541216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        id: 3,
        name: "Alice Wonder",
        userId: 3,
        profilePic: "https://images.pexels.com/photos/3767392/pexels-photo-3767392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        desc: "Quidem dicta nesciunt, debitis laborum voluptas nihil ipsum eos repellendus",
        img: "https://images.pexels.com/photos/15913452/pexels-photo-15913452/free-photo-of-poke-bowl-with-salmon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ]

  return (
    <div className='posts'>
      {posts.map(post => (
          /*  <div className="post">
            <img src={post.profilePic} alt="" />
           <span>{post.name}</span>
       </div> */
       <Post post={post} key={posts.id}/>
      ))}
    </div>
  )
}

export default Posts