import React from "react";
import classes from './Post.module.css';

const Post = (props) => {

    return (<div className={classes.item}>
            <img
                src='https://media.gq-magazine.co.uk/photos/62c40d1d9096f9cf3dec0365/16:9/w_1280,c_limit/Jake_Flying_ATWOW.jpeg'/>
            {props.message}
            <div>
                <span>like</span> { props.likesCount }
            </div>
        </div>

    )
}

export default Post;
