import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    let newNavLinks = props.navLinks.map((navlink, index) => {
        return (
            <li className={s.item} key={index}>
                <NavLink to={navlink.to} activeClassName={s.active}>
                    {navlink.text}
                </NavLink>
            </li>
        )
    });

    let newFriends = props.friends.map((friend, index) => {
        return (
            <div className={s.friendsBlock} key={index}>
                <img src={friend.img} />
                < p > {friend.name}</p>
            </div>
        )
    });

    return (
        <nav className={s.navbar}>
            <ul>
                {newNavLinks}
            </ul>
            <div className={s.parentFriendTag}>
                <h2>Friends</h2>
                <div className={s.friend}>
                    {newFriends}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;