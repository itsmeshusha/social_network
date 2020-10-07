
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
        
export const authReducer = (state: initialStateType = initialState, action: ActionUsersTypes) => {
       
    switch (action.type) {
        case 'SET_USER_DATA': {
            return {
                ...state,
               ...action.data,
               isAuth: true
               
            }
        }
        
        
        default:
            return state;
    }
}

export type ActionUsersTypes = ReturnType<typeof setAuthUserData> 


export const setAuthUserData= (data: initialStateType) => {
    return {
        type: 'SET_USER_DATA',
        data
        // data: {
        //     userId: userId,
        //     email: email,
        //     login: login
        // }
    } as const
}

