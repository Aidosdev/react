import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={s.profileInfo}>
                <img src="https://www.uaewave.com/wp-content/uploads/2019/05/IMG-Worlds-of-Adventure-Dubai-Landmarks.jpg" />
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;