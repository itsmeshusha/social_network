import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {PhotosType} from '../../redux/profileReducer';



type PropsType ={
    profile: {
        userId: number
        photos: PhotosType
        
    }
    isAuth: boolean
    status: string
    updateUserStatus: (status: string) => void
}

const Profile = (props: PropsType) => {
    
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus} />
            <MyPostsContainer />

        </div>
    );
}

export default Profile;
