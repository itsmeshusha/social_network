import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <img
                src='https://images.ctfassets.net/hrltx12pl8hq/1fR5Y7KaK9puRmCDaIof7j/09e2b2b9eaf42d450aba695056793607/vector1.jpg?fit=fill&w=800&h=300'
                alt={'purple'}/>
            <div> Main content</div>
            <div className={s.ava}>
                <img src='https://archilab.online/images/1/123.jpg' alt={'ava'}/>
            </div>
        </div>
    )
}


export default ProfileInfo;
