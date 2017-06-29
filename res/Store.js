import { applyMiddleware,combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import path from 'path';

/* global declaration*/
//global['@public'] = path.join(__dirname,'/public');
//global['@res'] = path.join(__dirname,'/public');
/* global declaration*/


import {SkillsReducer} from './reducres/SkillsReducer.js'
import {TechStackReducer} from './reducres/TechStackReducer.js'
import {ProjectsReducer} from './reducres/ProjectsReducer.js'
import {UserInfoReducer} from './reducres/UserInfoReducer.js'

const reducers = combineReducers({
    skills: SkillsReducer,
    techStack: TechStackReducer,
    projects: ProjectsReducer,
    userInfo: UserInfoReducer
});


const middleWare = applyMiddleware(promise(),thunk,logger);
export default createStore(reducers,middleWare);

//store.subscribe(() =>{
//    console.log('here is the state ', store.getState());
//});

