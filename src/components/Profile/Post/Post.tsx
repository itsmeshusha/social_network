import React from 'react';
import s from './Post.module.css';


type PostPropsType = {
    message: string
    likesCount: string

}

const Post: React.FC<PostPropsType > = (props:PostPropsType) => {
    return (
        <div className={s.content}>
            <div className={s.avapost}> <img src='https://archilab.online/images/1/123.jpg' alt={'avapost'} />
                {props.message}
            <div>{props.likesCount}likes</div>
            </div>

        </div>
    );
}

export default Post;
