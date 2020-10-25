import React from 'react';
import MyPosts from './MyPosts';
import {addPostActionCreator} from '../../../redux/profileReducer'
import { connect } from 'react-redux'
import { ActionType, RootStateType } from '../../../redux/store';



let mapStateToProps = (state: RootStateType) => {
    return {
        postData: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {

        addPost: (newPostText: string) => {
            dispatch(addPostActionCreator(newPostText));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
