import React from 'react';
import MyPosts from './MyPosts';
//import Post from "../Post/Post";
//import {PostDataType, ActionType, ProfilePageType, DialogsPageType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profileReducer'
//import { Store, CombinedState } from 'redux';
import { connect } from 'react-redux'
import { ActionType, RootStateType } from '../../../redux/store';

// type PropsType = {
//     store: Store<CombinedState<{
//         profilePage: ProfilePageType
//         dialogsPage: DialogsPageType
//     }>, ActionType>
// }


let mapStateToProps = (state: RootStateType) => {
    return {
        postData: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        updateNewPostText: (text: string) => {
            dispatch( updateNewPostTextActionCreator(text) );
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
