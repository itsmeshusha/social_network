import React from 'react';
// import s from './Profile.module.css';
// import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
//import { Store, CombinedState } from 'redux'
//import {ProfilePageType, DialogsPageType, ActionType} from "../../redux/store";
import MyPostsContainer from './MyPosts/MyPostsContainer';



// type PropsType ={
//     store: Store<CombinedState<{
// 		profilePage: ProfilePageType;
// 		dialogsPage: DialogsPageType;
// 	}>, ActionType>
// }

const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer />

        </div>
    );
}

export default Profile;
