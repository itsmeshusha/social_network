import React from 'react';
import MyPosts from './MyPosts';
//import Post from "../Post/Post";
//import {PostDataType, ActionType, ProfilePageType, DialogsPageType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profileReducer'
import StoreContext from '../../../StoreContext';
//import { Store, CombinedState } from 'redux';

// type PropsType = {
//     store: Store<CombinedState<{
//         profilePage: ProfilePageType
//         dialogsPage: DialogsPageType
//     }>, ActionType>
// }
const MyPostsContainer = () => {
    return <StoreContext.Consumer> 
        { (store) => {
    const state = store.getState();
    
    let addPost = () => {
        store.dispatch(addPostActionCreator())
}

    let onPostChange = (text: string) => {
        store.dispatch( updateNewPostTextActionCreator(text) );
}

    return (
            <MyPosts updateNewPostText={onPostChange}
            addPost={addPost}
            postData={state.profilePage.posts}
            newPostText={state.profilePage.newPostText} />
            );
    }
}
    </StoreContext.Consumer>
}

export default MyPostsContainer;
