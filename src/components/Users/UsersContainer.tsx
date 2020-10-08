import React from 'react';
import { connect } from 'react-redux';
import { StateType } from '../../redux/redux-store';
import {  follow, setCurrentPage, setUsers, unFollow, setTotalUserCount, toggleIsFetching, toggleIsFollowingProgress } from '../../redux/usersReducer';
import Users from './Users';
import axios from 'axios';
import { initialStateType } from '../../redux/usersReducer';
import Preloader from '../Preloader/Preloader';
import { usersAPI } from '../../api/api'

type PropsType = {
    usersPage: initialStateType
    follow: (usersId: number) => void
    unFollow: (usersId: number) => void
    setUsers: (users: any) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUserCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    currentPage: number,
    pageSize: number,
    toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: Array<number>
}


class UsersContainer extends React.Component<PropsType> {
    
    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items)
        });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true); 
        
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUserCount(data.totalCount);
        });
    }  
    render () {

    return <>
    {this.props.usersPage.isFetching ? <Preloader /> : null }
     <Users totalUsersCount={this.props.usersPage.totalUsersCount}
            pageSize={this.props.usersPage.pageSize} 
            currentPage={this.props.usersPage.currentPage}
            onPageChanged={this.onPageChanged}
            usersPage={this.props.usersPage}
            follow={this.props.follow}
            unFollow={this.props.unFollow}
            toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
            followingInProgress={this.props.followingInProgress} />
    </>
    }   
}

const mapStateToProps = (state: StateType) => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


export default connect(mapStateToProps, 
    {follow, unFollow, setUsers, setCurrentPage, setTotalUserCount, toggleIsFetching, toggleIsFollowingProgress} )(UsersContainer);