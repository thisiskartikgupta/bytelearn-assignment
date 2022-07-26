
import React from 'react';
import './App.css';

import blogStore from './store/blogStore';
import {Provider} from 'react-redux';

import AddBlog from './components/AddBlog/AddBlog';
import DisplayBlog from './components/DisplayBlog/DisplayBlog';

function App() {
  return (
    <div className="App">
      <h3>Blog App by ByteLearn</h3>

      <Provider store={blogStore}>
        <AddBlog/>
        <DisplayBlog/>
      </Provider>
    </div>
  );
}

export default App;
