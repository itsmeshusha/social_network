import { authAPI } from '../api/api'
import {stopSubmit} from "redux-form";

export type ActionUsersTypes = ReturnType<typeof setAuthUserData>

export type initialStateType = {
    userId: number | null
    email: string  | null
    login: string | null
    isAuth: boolean
}

const initialState: initialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
    
}
        
export const authReducer = (state: initialStateType = initialState, action: ActionUsersTypes): initialStateType => {
       
    switch (action.type) {
        case 'SET_USER_DATA': {
            return {
                ...state,
               ...action.payload
               
            }
        }

        default:
            return state;
    }
}

export const setAuthUserData= (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: 'SET_USER_DATA',
        payload: {
            userId: userId,
            email: email,
            login: login,
            isAuth: isAuth
        }
    } as const
}

export const getAuthUserDataThunkCreator = () => {
    return (dispatch: any) => {
        authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
    }
}

export const login = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: any) => {
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserDataThunkCreator());
                } else {
                    let message = response.data.messages.length > 0 ? response.data.messages[0]: "Some error";
                    dispatch(stopSubmit("login", {_error: response.data.messages}));
                }
            });
    }
}

export const logout = () => {
    return (dispatch: any) => {
        authAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false));
                }
            });
    }
}