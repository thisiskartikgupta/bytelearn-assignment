
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addBlog} from '../../actions/blogActions';

import './AddBlog.scss';

const AddBlog = () => {
  const [showInput, setShowInput] = useState(false);
  const [title, setTitle] = useState('');
  const [categories, setCategories] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();

  return (
    <div>
      <div>
        {
          showInput ?
          <div className='input-fields'>
            <input placeholder='Title' value={title} onChange={(e)=> setTitle(e.currentTarget.value)}/>
            <input placeholder='Categories' value={categories} onChange={(e) => setCategories(e.currentTarget.value)}/>
            <input placeholder='Content' value={content} onChange={(e)=> setContent(e.currentTarget.value)}/>
          </div> : null
        }
      </div>
      <div className='add-blog'>

        <button onClick={() => {
          if (!showInput) {
            setShowInput(true);
          } else {
            if (title.length === 0 || categories.length === 0 || content.length === 0) {
              alert('An empty blog will be injustice to your readers.');
              return;
            } else {
              const timestamp = new Date();
              const BLOG_ID = `${timestamp.getDate()}.${timestamp.getMonth()}.${timestamp.getYear()}.${timestamp.getHours()}.${timestamp.getMinutes()}.${timestamp.getSeconds()}.${timestamp.getMilliseconds()}`;
              dispatch(addBlog({title: title, categories: categories, content: content}, BLOG_ID));
              setShowInput(false);
              setTitle('');
              setCategories('');
              setContent('');
            }
          }
        }}>Add Blog</button>
      </div>
    </div>
  );
};

export default AddBlog;
