import React from 'react';
import preloader from '../../assets/images/preloader.gif';
import s from './Preloader.module.css';

const Preloader = () => {
    return <div  >
        <img className={s.image} src={preloader} alt="preloader" />
    </div>
}

export default Preloader;

