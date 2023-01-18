import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import {render, screen} from "@testing-library/react";
import App from "../App";
import axios from "axios";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 5},
        {id: 2, message: 'It is my first post.', likesCount: 21},
    ]
}

test('length of posts should be incremented', () => {
    //1. test data
    let action = addPostActionCreator('it-kamasutra')
    //2. action
    let newState = profileReducer(state,action)
    //3. expectation
    expect (newState.posts.length).toBe(5);
});

test('message of posts should be incremented correct', () => {
    //1. test data
    let action = addPostActionCreator('it-kamasutra')

    //2. action
    let newState = profileReducer(state,action)
    //3. expectation
    expect (newState.posts[4].message).toBe('it-kamasutra');
});

test('after deleting length of messages should be decrement', () => {
    //1. test data
    let action = deletePost(1)
    //2. action
    let newState = profileReducer(state,action)
    //3. expectation
    expect (newState.posts.length).toBe(3);
});

test(`after deleting length of messages shouldn't be decrement`, () => {
    //1. test data
    let action = deletePost(1000)
    //2. action
    let newState = profileReducer(state,action)
    //3. expectation
    expect (newState.posts.length).toBe(4);
});
