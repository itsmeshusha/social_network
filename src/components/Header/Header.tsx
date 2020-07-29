import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <div className={s.header}>
            <img src='https://cdn.dribbble.com/users/733886/screenshots/4474949/owl_logo-02.jpg' alt={'logo'} />
        </div>
    );
}

export default Header;
