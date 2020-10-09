import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {PhotosType} from '../../redux/profileReducer';
import { Redirect } from 'react-router-dom';


type PropsType ={
    profile: {
        userId: number
        photos: PhotosType
        
    }
    isAuth: boolean
}

const Profile = (props: PropsType) => {
    if(!props.isAuth ) {
        return <Redirect to={'/login'} />
    }

    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer />

        </div>
    );
}

export default Profile;
