import Axios from 'axios';
import React from 'react';
import { initialStateType } from '../../redux/usersReducer';
import s from './Users.module.css';
import UserPhoto from '../../assets/images/UserPhoto.png'


type PropsType = {
    usersPage: initialStateType
    follow: (usersId: number) => void
    unFollow: (usersId: number) => void
    setUsers: (users: any) => void
}



const Users = (props: PropsType) => {

    let getUsers = () => {
    if (props.usersPage.users.length === 0) {
        Axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {
            props.setUsers(response.data.items)
        });
    }

    }

    return <div>
        <button onClick={getUsers}>Get Users</button>
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