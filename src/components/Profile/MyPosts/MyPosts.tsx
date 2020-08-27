import React from 'react';
import s from './MyPosts.module.css';
import Post from "../Post/Post";

import {PostDataType} from "../../../redux/state";



type PropsType = {

    postData: Array<PostDataType>
    newPostText: string
    addPost: () => void
    updateNewPostText: (newText: string) => void
}
const MyPosts = (props: PropsType) => {
    let postsElements = props.postData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();
    
    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current ? newPostElement.current.value : "---"
        props.updateNewPostText(text);
    }

    return (
        
        <div className={s.content}>
            <div><h3>My posts</h3></div>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <div>
                    <button onClick= { addPost }>Add post</button>
                    <button>Remove</button>
                </div>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;
