import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {PhotosType, ProfileType} from '../../redux/profileReducer';



type PropsType ={
    profile: ProfileType
    isAuth: boolean
    status: string
    updateUserStatus: (status: string) => void
}

const Profile = (props: PropsType) => {
    debugger
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus} />
            <MyPostsContainer />

        </div>
    );
}

export default Profile;
