import React from 'react';
import s from './ProfileInfo.module.css';
import { PhotosType } from '../../../redux/profileReducer';
import ProfileStatus from '../ProfileStatus/ProfileStatus';

type PropsType = {
    profile: {
        userId: number
        photos: PhotosType
    }
}

const ProfileInfo = (props: PropsType) => {
    return (
        <div className={s.profileInfo}>
            <img
                src='https://images.ctfassets.net/hrltx12pl8hq/1fR5Y7KaK9puRmCDaIof7j/09e2b2b9eaf42d450aba695056793607/vector1.jpg?fit=fill&w=800&h=300'
                alt={'purple'} />

            <div className={s.ava}>
                <img src={props.profile.photos.small} alt={'ava'} />

                <ProfileStatus status={"This website is so awesome!"} />

            </div>
        </div>
    )
}


export default ProfileInfo;
