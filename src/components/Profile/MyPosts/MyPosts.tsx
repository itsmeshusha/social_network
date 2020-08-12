import React from 'react';
import s from './MyPosts.module.css';
import Post from "../Post/Post";

type PostDataType = {
    message: string
    likesCount: string
}

let postData: Array<PostDataType> = [
    {message: 'Hi! How are you?', likesCount: '3 ' },
    {message: "It's my first post.", likesCount: '0 ' },
]


const MyPosts = () => {
    let postsElements = postData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    return (
        <div className={s.content}>
            <div><h3>My posts</h3></div>
            <div>
                <div><textarea></textarea></div>
                <div>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;
