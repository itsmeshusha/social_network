import React from 'react';
import { initialStateType } from '../../redux/usersReducer';
import s from './Users.module.css';



type PropsType = {
    usersPage: initialStateType
    follow: (usersId: number) => void
    unFollow: (usersId: number) => void
}



const Users = (props: PropsType) => {
    return <div>
        {
            props.usersPage.users.map(u => <div key={u.id} >
                <div >
                    <div>
                        <img className={s.img} src={u.avatar} alt={"avatar"} />
                    </div>
                    <div>
                        {u.isFollow
                            ? <button onClick={() => { props.unFollow(u.id) }}>Unfollow</button>
                            : <button  onClick={() => { props.follow(u.id) }}>Follow</button>}
                    </div>
                </div>
                <div >
                    <div >
                        <div>{u.firstName}</div>
                        <div>{u.status}</div>
                    </div>

                    <div >
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </div>
                </div>
            </div>)
        }
    </div >
}

export default Users;