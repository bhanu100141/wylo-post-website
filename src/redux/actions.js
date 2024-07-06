export const ADD_POST = 'ADD_POST';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST';

export const addPost = (post) => ({
  type: ADD_POST,
  payload: post,
});

export const editPost = (id, updatedPost) => ({
  type: EDIT_POST,
  payload: { id, updatedPost },
});

export const deletePost = (id) => ({
  type: DELETE_POST,
  payload: id,
});
