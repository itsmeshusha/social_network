import { ActionType, ProfilePageType } from './store';
import { profileAPI, usersAPI } from '../api/api'

export type PhotosType ={
    small: string
    large: string
    
}
export type InitialStateType = {
    posts: {
            message: string
            likesCount: string
        }[]
    newPostText: string    
    profile: {
        userId: number
        photos: PhotosType
    }
    status: string
}

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET_STATUS';

const initialState: InitialStateType = {
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
    },
    status: ""  
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                message: state.newPostText ,
                likesCount: "1"
            }
            let stateCopy = {...state}
            stateCopy.posts= [...state.posts]
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = "";
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state}
        stateCopy.newPostText = action.newText;
        return stateCopy;
    } case SET_USER_PROFILE: {
        return {...state, profile: action.profile}
    }
    case SET_STATUS: {
        return {...state, status: action.status}
    }
        default: 
        return state;
        
}
   
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    } as const
}

export const updateNewPostTextActionCreator = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    } as const
}

export const setUserProfile = (profile: {
    userId: number
    photos: PhotosType
}) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}

export const setUserStatus = (status: string) => {
    return {
        type: SET_STATUS,
        status: status
    } as const
}

export const getUserProfileThunkCreator = (userId: number) => {
    return (dispatch: any) => {
        usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        });
    }
}

export const getUserStatusThunkCreator = (userId: number) => {
    return (dispatch: any) => {
        profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setUserStatus(response.data))
        })
    }
}

export const updateUserStatusThunkCreator = (status: string) => {
    return (dispatch: any) => {
        profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status));
            }
        })
    }
}

export default profileReducer;