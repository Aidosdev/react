import React from 'react';
import { Route } from 'react-router-dom';
import s from './Content.module.css';
import Profile from './Profile/Profile';
import Dialogs from './Dialogs/Dialogs';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';

const Content = (props) => {
    return (
        <div className={s.content}>
            <Route path="/profile" render={() => <Profile posts={props.posts} dispatch={props.dispatch}
                newPostText={props.newPostText} />} />
            <Route path="/dialogs" render={() => <Dialogs messages={props.messages}
                dialogs={props.dialogs}
                dispatch={props.dispatch}
                newMessageText={props.newMessageText} />} />
            <Route path="/news" component={News} />
            <Route path="/music" component={Music} />
            <Route path="/settings" component={Settings} />
        </div>
    )
}


export default Content;