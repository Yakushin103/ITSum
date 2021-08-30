import React from 'react';
import ReactDOM from 'react-dom';

import profileReducer, { addPost, deletePost } from './profile-reducer';

let initialState = {
  postData: [
    { id: 1, message: 'Hi, how are u?' },
    { id: 2, message: 'Its my first post' },
    { id: 3, message: 'How its work' },
    { id: 4, message: 'Bla bla bla' }
  ],
  newText: '',
  profile: null,
  status: '',
}

it('length of posts should be incremented', () => {
  let action = addPost("It.com")
  let newState = profileReducer(initialState, action)

  expect(newState.postData.length).toBe(5)
});

it('message of new post should be correct', () => {
  let action = addPost("It.com")
  let newState = profileReducer(initialState, action)

  expect(newState.postData[4].message).toBe('It.com')
});

it('after deleting of messages should be decrement', () => {
  let action = deletePost(1)
  let newState = profileReducer(initialState, action)

  expect(newState.postData.length).toBe(3)
});

it('after deleting length shouldnt be decrement if id inccorect', () => {
  let action = deletePost(100)
  let newState = profileReducer(initialState, action)

  expect(newState.postData.length).toBe(4)
});
