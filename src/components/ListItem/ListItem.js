
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

import {addBlog, deleteBlog} from '../../actions/blogActions';

import './ListItem.scss';

const ListItem = (props) => {
  const [showView, setShowView] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const [newTitle, setNewTitle] = useState(props.title);
  const [newCategories, setNewCategories] = useState(props.categories);
  const [newContent, setNewContent] = useState(props.content);

  const dispatch = useDispatch();

  return (
    <div>
      <div className='list-item'>
        <div className='text'>
          <div className='heading'>{props.title}</div>
          <div className='categories'>{props.categories}</div>
        </div>
        <div className='buttons'>
          <button className='view'
            onClick={()=>setShowView(!showView)}
          >
            {showView ? 'HIDE' : 'VIEW'}
          </button>
          <button className='edit'
            onClick={()=>setShowEdit(!showEdit)}>
            {showEdit ? 'HIDE' : 'EDIT'}
          </button>
          <button className='delete'
            onClick={()=>dispatch(deleteBlog(props.id))}>DELETE</button>
        </div>
      </div>
      <div>
        {
          showView ?
          <div className='view-section'>
            {props.content}
          </div> : null
        }
      </div>
      <div>
        {
          showEdit ?
          <div className='edit-section'>
            <input placeholder='New Title' value={newTitle} onChange={(e)=> setNewTitle(e.currentTarget.value)}/>
            <input placeholder='New Categories' value={newCategories} onChange={(e) => setNewCategories(e.currentTarget.value)}/>
            <input placeholder='New Content' value={newContent} onChange={(e)=> setNewContent(e.currentTarget.value)}/>
            <button
              onClick={()=> {
                if (newTitle.length === 0 || newCategories.length === 0 || newContent.length === 0) {
                  alert('You sure you wanna turn your masterpiece blog into a blank one !!');
                  return;
                } else {
                  const timestamp = new Date();
                  const BLOG_ID = `${timestamp.getDate()}.${timestamp.getMonth()}.${timestamp.getYear()}.${timestamp.getHours()}.${timestamp.getMinutes()}.${timestamp.getSeconds()}.${timestamp.getMilliseconds()}`;
                  dispatch(addBlog({title: newTitle, categories: newCategories, content: newContent}, BLOG_ID));
                  setShowEdit(false);
                  dispatch(deleteBlog(props.id));
                }
              }
              }
            >UPDATE</button>
          </div> : null
        }
      </div>
    </div>
  );
};

export default ListItem;
