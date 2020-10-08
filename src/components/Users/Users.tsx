import React from 'react';
import s from './Users.module.css';
import UserPhoto from '../../assets/images/UserPhoto.png';
import { initialStateType } from '../../redux/usersReducer';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    usersPage: initialStateType
    follow: (usersId: number) => void
    unFollow: (usersId: number) => void
    toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: Array<number>

}

const Users = (props: PropsType) => {

    let pagesCount: number = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? s.selectedPage : ""}
                    onClick={() => { props.onPageChanged(p) }}>{p}</span>
            })}

        </div>

        {
            props.usersPage.users.map(u => <div key={u.id} >
                <div >
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img className={s.img} src={u.photos.small !== null ? u.photos.small : UserPhoto} alt={"avatar"} />
                        </NavLink>
                    </div>
                    <div>
                        {u.isFollow
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleIsFollowingProgress(true, u.id);
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "a77ea86a-925e-4bb9-81e9-a41d0c7337ce"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unFollow(u.id)
                                        }
                                        props.toggleIsFollowingProgress(false, u.id);
                                    });

                            }}>Unfollow</button>


                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleIsFollowingProgress(true, u.id);
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "a77ea86a-925e-4bb9-81e9-a41d0c7337ce"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                        props.toggleIsFollowingProgress(false, u.id);
                                    });

                            }}>Follow</button>}

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


export default Users;