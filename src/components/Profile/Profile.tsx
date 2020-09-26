import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {PhotosType} from '../../redux/profileReducer';


type PropsType ={
    profile: {
        userId: number
        photos: PhotosType
    }
}

const Profile = (props: PropsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer />

        </div>
    );
}

export default Profile;
