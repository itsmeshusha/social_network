import React from 'react';
import MyPosts from './MyPosts';
import Post from "../Post/Post";
import {PostDataType, ActionType, ProfilePageType, DialogsPageType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profileReducer'
import { Store, CombinedState } from 'redux';

type PropsType = {
    store: Store<CombinedState<{
        profilePage: ProfilePageType
        dialogsPage: DialogsPageType
    }>, ActionType>
}
const MyPostsContainer = (props: PropsType) => {
    const state = props.store.getState();
    
    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
}

    let onPostChange = (text: string) => {
        props.store.dispatch( updateNewPostTextActionCreator(text) );
}

    return (
            <MyPosts updateNewPostText={onPostChange}
            addPost={addPost}
            postData={state.profilePage.posts}
            newPostText={state.profilePage.newPostText} />
            );
}

export default MyPostsContainer;
