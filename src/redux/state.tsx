import React from 'react';



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
}

export type SidebarType = {

}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

let state: RootStateType = {
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
            {name: "Grigory", id: "3"}]
    },
    sidebar: {}
}

let rerenderEntireTree =() => {
    console.log("State changed");
}

export const addPost = () => {
    let newPost = {
        message: state.profilePage.newPostText ,
        likesCount: "1"
    }

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = ""
    rerenderEntireTree();
    
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree();
}    

export const subscribe = (observer: () => void) => {
    rerenderEntireTree = observer
}
    

export default state;