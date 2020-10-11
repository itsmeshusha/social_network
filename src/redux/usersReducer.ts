import { usersAPI } from '../api/api';

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
    isFetching: boolean
    followingInProgress: Array<number>
}

const initialState: initialStateType = {
    users: [], 
    pageSize: 5,
    totalUsersCount: 1,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
    
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
        case 'SET-TOTAL-USER-COUNT': {
            return {...state, totalUsersCount: action.totalCount}
        }
        case 'TOGGLE-IS-FETCHING': {
            return {...state, isFetching: action.isFetching}
        }
        case 'TOGGLE-IS-FOLLOWING-PROGRESS': {
            return {...state, 
                followingInProgress: action.isFetching
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter(id => id !==action.userId)}
        }
        default:
            return state;
    }
}

export type ActionUsersTypes = ReturnType<typeof followSuccess > |
    ReturnType<typeof unFollowSuccess > | ReturnType<typeof setUsers> | ReturnType<typeof setCurrentPage> 
   | ReturnType<typeof setTotalUserCount> | ReturnType<typeof toggleIsFetching> 
   | ReturnType<typeof toggleIsFollowingProgress>


export const followSuccess = (usersId: number) => {
    return {
        type: 'FOLLOW',
        usersId
    } as const
}
export const unFollowSuccess  = (usersId: number) => {
    return {
        type: 'UNFOLLOW',
        usersId
    } as const
}
export const setUsers = (users: any) => {
    return {
        type: 'SET-USERS',
        users
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage
    } as const
}
export const setTotalUserCount = (totalCount: number) => {
    return {
        type: 'SET-TOTAL-USER-COUNT',
        totalCount
    } as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        isFetching
    } as const
}
export const toggleIsFollowingProgress = (isFetching: boolean, userId: number) => {
    return {
        type: 'TOGGLE-IS-FOLLOWING-PROGRESS',
        isFetching,
        userId
    } as const
}

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: any) => {
        
    dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setCurrentPage(currentPage));
            dispatch(setUsers(data.items));
            dispatch(setTotalUserCount(data.totalCount));
        });
    }
}

export const follow = (userId: number) => {
    return (dispatch: any) => {
        dispatch(toggleIsFollowingProgress(true, userId));
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleIsFollowingProgress(false, userId));
            });
    }
}

export const unFollow = (userId: number) => {
    return (dispatch: any) => {
        dispatch(toggleIsFollowingProgress(true, userId));
        usersAPI.unFollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unFollowSuccess(userId))
                }
                dispatch(toggleIsFollowingProgress(false, userId));
            });
    }
}
