import React from 'react';
import { connect } from 'react-redux';
import { StateType } from '../../redux/redux-store';
import { ActionUsersTypes, followAC, setUsersAC, unFollowAC } from '../../redux/usersReducer';
import UsersC from './Users';

const mapStateToProps = (state: StateType) => {
    return {
        usersPage: state.usersPage
    }
}

const mapDispatchToProps = (dispatch: (action: ActionUsersTypes) => void) => {
    return {
        follow: (usersId: number) => {
            dispatch(followAC(usersId))
        },
        unFollow: (usersId: number) => {
            dispatch(unFollowAC(usersId))
        },
        setUsers: (users: any) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC);

export default UsersContainer;