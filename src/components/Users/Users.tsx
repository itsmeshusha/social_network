import React from 'react';
import s from './Users.module.css';
import UserPhoto from '../../assets/images/UserPhoto.png';
import { initialStateType } from '../../redux/usersReducer';

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    usersPage: initialStateType
    follow: (usersId: number) => void
    unFollow: (usersId: number) => void
    
}

const Users = (props: PropsType) => {

        let pagesCount: number = Math.ceil(props.totalUsersCount / props.pageSize);

        let pages = [];
        for (let i=1; i<=pagesCount; i++){
            pages.push(i);
        }

        return <div>
            <div>
                {pages.map(p => {
                   return <span className={ props.currentPage === p ? s.selectedPage : ""}
                   onClick={() => {props.onPageChanged(p) }}>{p}</span>
                })}
                
            </div>
        
        {
            props.usersPage.users.map(u => <div key={u.id} >
                <div >
                    <div>
                        <img className={s.img} src={u.photos.small !==null ? u.photos.small: UserPhoto } alt={"avatar"} />
                    </div>
                    <div>
                        {u.isFollow
                            ? <button onClick={() => { props.unFollow(u.id) }}>Unfollow</button>
                            : <button  onClick={() => { props.follow(u.id) }}>Follow</button>}
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