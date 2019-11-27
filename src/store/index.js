import {createStore} from 'redux';
import reducer from '../reducers';

const initialState = {tech: 'React', techs: ['React','Elm', 'React-redux']}
export const store = createStore(reducer,initialState);

