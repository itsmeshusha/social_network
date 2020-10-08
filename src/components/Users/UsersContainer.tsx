import React from 'react';
import { connect } from 'react-redux';
import { StateType } from '../../redux/redux-store';
import {  follow, setCurrentPage, setUsers, unFollow, setTotalUserCount, toggleIsFetching } from '../../redux/usersReducer';
import Users from './Users';
import axios from 'axios';
import { initialStateType } from '../../redux/usersReducer';
import Preloader from '../Preloader/Preloader';

type PropsType = {
    usersPage: initialStateType
    follow: (usersId: number) => void
    unFollow: (usersId: number) => void
    setUsers: (users: any) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUserCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}


class UsersContainer extends React.Component<PropsType> {
    
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`,
        {
            withCredentials: true
        })
        .then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items)
        });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true); 
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersPage.pageSize}`, 
        {
            withCredentials: true
        })
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUserCount(response.data.totalCount);
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
            unFollow={this.props.unFollow} />
    </>
    }   
}

const mapStateToProps = (state: StateType) => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}


export default connect(mapStateToProps, 
    {follow, unFollow, setUsers, setCurrentPage, setTotalUserCount, toggleIsFetching} )(UsersContainer);