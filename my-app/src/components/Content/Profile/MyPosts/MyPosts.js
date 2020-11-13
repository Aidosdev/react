import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profile-reducer';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let newPost = React.createRef(); // метод реакта



    let addNewPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let updateNewText = () => {
        let text = newPost.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    debugger;
    return (
        <div className={s.myPost}>
            My posts
            <div>
                <div className={s.textArea}>
                    <textarea onChange={updateNewText} ref={newPost} value={props.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={addNewPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {props.posts.map((post, index) => {
                    return <Post message={post.message} like={post.like} key={index} />
                })}
            </div>
        </div>
    )
}

export default MyPosts;