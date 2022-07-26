
import React from 'react';
import {useSelector} from 'react-redux';
import ListItem from '../ListItem/ListItem';

const DisplayBlog = () => {
  const blogData = useSelector((state) => state.blogReducer);

  return (
    <div>
      {
        blogData.map((el) => <ListItem key={el.id} title={el.data.title} categories={el.data.categories} id={el.id} content={el.data.content} isFavourite={el.like}/>)
      }
    </div>
  );
};

export default DisplayBlog;

