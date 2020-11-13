import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://cdnb.artstation.com/p/assets/images/images/023/675/213/20200125141012/smaller_square/ava-battle-img-1823.jpg?1579983012" />
            {props.message}
            <div className={s.like}>
                <span>like:</span>{props.like}
            </div>
        </div>
    )
}

export default Post;