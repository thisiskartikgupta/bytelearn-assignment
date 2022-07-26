import {ADD_BLOG, DELETE_BLOG} from './blogActionTypes';

export function addBlog(BLOGObject, BLOGID) {
  return {
    type: ADD_BLOG,
    payload: [BLOGObject, BLOGID],
  };
};

export function deleteBlog(BLOGID) {
  return {
    type: DELETE_BLOG,
    payload: BLOGID,
  };
};
