import React from "react";
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: 5},
        {id: 2, message: 'It is my first post.', likesCount: 21},
    ]

    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>

            <div className={classes.posts}>
                {postsElements}
            </div>

        </div>
    );
};

export default MyPosts;