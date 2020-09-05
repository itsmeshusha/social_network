import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import {PostDataType, ActionType} from "../../redux/store";



type PropsType ={
    postData: Array<PostDataType>
    newPostText: string
    dispatch: (action: ActionType) => void
}

const Profile = (props: PropsType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts postData={props.postData} 
            newPostText={props.newPostText}
            dispatch={props.dispatch} 
             />

        </div>
    );
}

export default Profile;
