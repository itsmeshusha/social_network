import React from 'react';
import { connect } from 'react-redux';
import { StateType } from '../../redux/redux-store';
import {  follow, setUsers, unFollow,  toggleIsFetching, toggleIsFollowingProgress, getUsersThunkCreator } from '../../redux/usersReducer';
import Users from './Users';
import { initialStateType } from '../../redux/usersReducer';
import Preloader from '../Preloader/Preloader';


type PropsType = {
    usersPage: initialStateType
    follow: (usersId: number) => void
    unFollow: (usersId: number) => void
    setUsers: (users: any) => void
    toggleIsFetching: (isFetching: boolean) => void
    currentPage: number,
    pageSize: number,
    toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: Array<number>
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
}


class UsersContainer extends React.Component<PropsType> {
    
    componentDidMount() {

        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)

    }

    onPageChanged = (pageNumber: number) => {

        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
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
    {follow, unFollow, setUsers, 
         toggleIsFetching,
         toggleIsFollowingProgress, getUsersThunkCreator} )(UsersContainer);