import {applyMiddleware, createStore} from 'redux';
import {rootReducer} from '../reducers/rootReducer';
import logger from 'redux-logger';


const blogStore = createStore(rootReducer, applyMiddleware(logger));

export default blogStore;
