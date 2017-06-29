import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import history from 'history'

import store from '../../res/Store';

import Layout from './components/layout/Default.jsx';
import Intro from './components/pages/Intro.jsx';
import Skills from './components/pages/Skills.jsx';
import TechStack from './components/pages/TechStack.jsx';
import Experience from './components/pages/Experience.jsx';
import Education from './components/pages/Education.jsx';
import Projects from './components/pages/Projects.jsx';
import axios from 'axios';

const app = document.getElementById('root');

//store.dispatch({
//    type: 'FETCH_USERS',
//    payload: axios.get('http://rest.learncode.academy/api/johnbob/friends')
//});
ReactDom.render(
        <Provider store={store}>
            <Router history={hashHistory}>
                <Route path="/"  component={Layout}>
                    <IndexRoute component={Intro}></IndexRoute>
                    <Route path="intro" component={Intro}></Route>
                    <Route path="skills" component={Skills}></Route>
                    <Route path="tech-stack" component={TechStack}></Route>
                    <Route path="experience" component={Experience}></Route>
                    <Route path="projects" component={Projects}></Route>
                    <Route path="education" component={Education}></Route>
                </Route>
            </Router>
        </Provider>
    , app);
