import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import {PostDataType} from "../../redux/state";



type PropsType ={
    postData: Array<PostDataType>
    newPostText: string
    addPost: ( ) => void
    updateNewPostText: (newText: string) => void
}

const Profile = (props: PropsType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts postData={props.postData} 
            newPostText={props.newPostText} 
            addPost={props.addPost} 
            updateNewPostText={props.updateNewPostText} />

        </div>
    );
}

export default Profile;
