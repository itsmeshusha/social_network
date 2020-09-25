export type initialStateType = {
    users: {
        id: number;
        photos: {
            small: any
            large: any
        }
        name: string;
        status: string;
        location: {
            city: string;
            country: string;
        };
        isFollow: boolean;
    }[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

const initialState: initialStateType = {
    users: [], 
    pageSize: 5,
    totalUsersCount: 24,
    currentPage: 1,
    
}
        
export const userReducer = (state: initialStateType = initialState, action: ActionUsersTypes) => {
       
    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.usersId){
                        return {...u, isFollow: true}
                    }
                    return u
                })
            }
        }
        case 'UNFOLLOW': {
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.usersId){
                        return {...u, isFollow: false}
                    }
                    return u
                })
            }
        }
        case 'SET-USERS': {
            return {...state, users: action.users}
        }
        case 'SET-CURRENT-PAGE': {
            return {...state, currentPage: action.currentPage}
        }
        // case 'SET-TOTAL-USER-COUNT': {
        //     return {...state, totalCount: action.totalCount}
        // }
        default:
            return state;
    }
}

export type ActionUsersTypes = ReturnType<typeof followAC> |
    ReturnType<typeof unFollowAC> | ReturnType<typeof setUsersAC> | ReturnType<typeof setCurrentPageAC> 
    //| ReturnType<typeof setTotalUserCountAC>


export const followAC = (usersId: number) => {
    return {
        type: 'FOLLOW',
        usersId
    } as const
}
export const unFollowAC = (usersId: number) => {
    return {
        type: 'UNFOLLOW',
        usersId
    } as const
}
export const setUsersAC = (users: any) => {
    return {
        type: 'SET-USERS',
        users
    } as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage
    } as const
}
// export const setTotalUserCountAC = (totalCount: number) => {
//     return {
//         type: 'SET-TOTAL-USER-COUNT',
//         totalCount
//     } as const
// }
