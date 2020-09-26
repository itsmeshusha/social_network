import React from 'react';
import profileReducer, {addPostActionCreator, updateNewPostTextActionCreator, setUserProfile, PhotosType } from './profileReducer';
import dialogsReducer, {updateNewMessageBodyActionCreator, sendMessageActionCreator} from './dialogsReducer';

export type PostDataType = {
    message: string
    likesCount: string
}

export type DialogType = {
    id: string
    name: string
}

export type MessageType = {
    message: string
}

export type ProfilePageType = {
    posts: Array<PostDataType>
    newPostText: string
    profile: {
        userId: number
        photos: PhotosType
    }
}

export type DialogsPageType ={
    messages: Array<MessageType>
    dialogs: Array<DialogType>
    newMessageBody: string
}



export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    
}

export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionType) => void
}

export type ActionType = ReturnType<typeof addPostActionCreator>  | 
                        ReturnType<typeof updateNewPostTextActionCreator> |
                        ReturnType<typeof updateNewMessageBodyActionCreator> |
                        ReturnType<typeof sendMessageActionCreator> |
                        ReturnType<typeof setUserProfile>


let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {message: 'Hi! How are you?', likesCount: '3 '},
                {message: "It's my first post.", likesCount: '0 '}],
            newPostText: "Hey Hey Hey!",
            profile: {
                userId: 2,
                photos: {
                  small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
                  large: "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
                }
            }    
        },
        dialogsPage: {
            messages: [
                {message: "What are you doing now? I have good news!"},
                {message: "How are you?"},
                {message: "Hi!"}],
            dialogs: [
                {name: "Igor", id: "1"},
                {name: "Ann", id: "2"},
                {name: "Grigory", id: "3"}],
            newMessageBody: ""    
        }
        
    },
    getState ()  {
        return this._state
    },
    _callSubscriber () {
        console.log("State changed");
    },
    subscribe (observer) {
        this._callSubscriber = observer
    },
    dispatch (action: ActionType) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber();
    }
}

export default store;