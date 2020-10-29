import { ActionType, ProfilePageType } from './store';
import { profileAPI, usersAPI } from '../api/api'

export type PhotosType ={
    small: string
    large: string
    
}
export type ProfileType = {
    userId: number
    photos: PhotosType

}
export type InitialStateType = {
    posts: {
            message: string
            likesCount: string
        }[]
    newPostText: string
    profile: ProfileType
    status: string
}

const ADD_POST = 'ADD-POST';
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
                message: action.newPostText,
                likesCount: "1"
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            }

        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state;

    }
}


export const addPostActionCreator = (newPostText: string) => {
    return {
        type: ADD_POST,
        newPostText: newPostText
    } as const
}


export const setUserProfile = (profile: ProfileType) => {
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