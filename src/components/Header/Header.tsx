import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

type PropsType = {
    isAuth: boolean
    login: string | null
}

const Header = (props: PropsType) => {
    return (
        <div className={s.header}>
            <img src='https://cdn.dribbble.com/users/733886/screenshots/4474949/owl_logo-02.jpg' alt={'logo'} />
            
            <div className={s.loginBlock}>
                {props.isAuth ? props.login :  <NavLink to={'/login'}>Login</NavLink> }
            </div>

        </div>
    );
}

export default Header;
