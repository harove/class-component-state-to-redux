import {createStore} from 'redux';
import reducer from '../reducers';

const initialState = {tech: 'React', techs: ['React','Vue']}
export const store = createStore(reducer,initialState);

