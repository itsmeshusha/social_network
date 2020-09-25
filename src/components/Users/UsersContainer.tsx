import React from 'react';
import { connect } from 'react-redux';
import { StateType } from '../../redux/redux-store';
import { ActionUsersTypes, followAC, setCurrentPageAC, setUsersAC, unFollowAC } from '../../redux/usersReducer';
import Users from './Users';

const mapStateToProps = (state: StateType) => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        }
        // setTotalUsersCount: (totalCount: number) => {
        //     dispatch(setTotalUserCountAC(totalCount))
        // }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;