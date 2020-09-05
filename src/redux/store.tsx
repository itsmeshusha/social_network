import React from 'react';
import profileReducer, {addPostActionCreator, updateNewPostTextActionCreator} from './profileReducer';
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
                        ReturnType<typeof sendMessageActionCreator>


let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {message: 'Hi! How are you?', likesCount: '3 '},
                {message: "It's my first post.", likesCount: '0 '}],
            newPostText: "Hey Hey Hey!"    
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