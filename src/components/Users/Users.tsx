import React from 'react';
import s from './Users.module.css';
import UserPhoto from '../../assets/images/UserPhoto.png';
import axios from 'axios';
import { initialStateType } from '../../redux/usersReducer';

type PropsType = {
    usersPage: initialStateType
    follow: (usersId: number) => void
    unFollow: (usersId: number) => void
    setUsers: (users: any) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUserCount: (totalCount: number) => void
}

class Users extends React.Component<PropsType> {
    
        componentDidMount() {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
        }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUserCount(response.data.totalCount);
            });
    }  
    render () {

        let pagesCount: number = Math.ceil(this.props.usersPage.totalUsersCount / this.props.usersPage.pageSize);

        let pages = [];
        for (let i=1; i<=pagesCount; i++){
            pages.push(i);
        }

        return <div>
            <div>
                {pages.map(p => {
                   return <span className={ this.props.usersPage.currentPage === p ? s.selectedPage : ""}
                   onClick={() => {this.onPageChanged(p) }}>{p}</span>
                })}
                
            </div>
        
        {
            this.props.usersPage.users.map(u => <div key={u.id} >
                <div >
                    <div>
                        <img className={s.img} src={u.photos.small !==null ? u.photos.small: UserPhoto } alt={"avatar"} />
                    </div>
                    <div>
                        {u.isFollow
                            ? <button onClick={() => { this.props.unFollow(u.id) }}>Unfollow</button>
                            : <button  onClick={() => { this.props.follow(u.id) }}>Follow</button>}
                    </div>
                </div>
                <div >
                    <div >
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>

                    <div >
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </div>
                </div>
            </div>)
        }
    </div >
    }
}

export default Users;