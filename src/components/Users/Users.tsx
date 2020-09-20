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
}

class UsersC extends React.Component<PropsType> {
    getUsers = () => {
        if (this.props.usersPage.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items)
            });
        }
    
        }

    render () {
        return <div>
        <button onClick={this.getUsers}>Get Users</button>
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

export default UsersC;