import { ActionType, ProfilePageType } from './store';

type InitialStateType = {
    posts: {
            message: string
            likesCount: string
        }[]
    newPostText: string    
}

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState: InitialStateType = {
    posts: [
        {message: 'Hi! How are you?', likesCount: '3 '},
        {message: "It's my first post.", likesCount: '0 '}],
    newPostText: "Hey Hey Hey!"    
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionType) => {
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

export default profileReducer;