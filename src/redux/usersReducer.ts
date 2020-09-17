export type initialStateType = {
    users: {
        id: number;
        avatar: string;
        firstName: string;
        status: string;
        location: {
            city: string;
            country: string;
        };
        isFollow: boolean;
    }[]
}

const initialState: initialStateType = {
    users: [
        {
            id: 1,
            avatar: 'https://pyxis.nymag.com/v1/imgs/079/792/3ed0d94be0a9bd3d023f00532889bab152-30-chandler-bing.rsquare.w330.jpg',
            firstName: 'Chandler Bing',
            status: 'Im joking!',
            location: {
                city: 'New York',
                country: 'USA'
            },
            isFollow: true
        },
        {
            id: 2,
            avatar: 'https://i.insider.com/5c5020d752414739d54c32a6?width=600&format=jpeg&auto=webp',
            firstName: 'Joey Tribbiani',
            status: 'What?!',
            location: {
                city: 'New York',
                country: 'USA'
            },
            isFollow: false
        },
        {
            id: 3,
            avatar: 'https://pbs.twimg.com/profile_images/1158494646982590465/JAK97IZC_400x400.jpg',
            firstName: 'Monica Geller',
            status: 'Hey you!',
            location: {
                city: 'New York',
                country: 'USA'
            },
            isFollow: true
        },
    ]
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
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state;
    }
}

export type ActionUsersTypes = ReturnType<typeof followAC> |
    ReturnType<typeof unFollowAC> | ReturnType<typeof setUsersAC>


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