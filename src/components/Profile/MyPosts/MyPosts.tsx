import React from 'react';
import s from './MyPosts.module.css';
import Post from "../Post/Post";

const MyPosts = () => {
    return (
        <div className={s.content}>
            <div>My posts</div>
            <div>
            <textarea></textarea>
            <button>Add post</button>
            <button>Remove</button>

                <Post message={'Hi! How are you?'} likesCount={'3 '}/>
                <Post message={"It's my first post."} likesCount={'0 '}/>
            </div>
        </div>
    );
}

export default MyPosts;
