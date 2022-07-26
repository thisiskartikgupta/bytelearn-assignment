
import {ADD_BLOG, DELETE_BLOG} from '../actions/blogActionTypes';


const blogReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BLOG:
      return [...state,
        {id: action.payload[1], data: action.payload[0], showView: false, like: false},
      ];

    case DELETE_BLOG:
      return state.filter( (element) => element.id !== action.payload);

    default:
      return state;
  }
};

export default blogReducer;
