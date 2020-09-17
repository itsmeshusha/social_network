import React from 'react';
import { connect } from 'react-redux';
import { StateType } from '../../redux/redux-store';
import { ActionUsersTypes, followAC, unFollowAC } from '../../redux/usersReducer';
import Users from './Users';

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
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;