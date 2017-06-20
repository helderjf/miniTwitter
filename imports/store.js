import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applymiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

import app from './ui/components/app.jsx';
import twitsReducer from './reducers/twitsReducer.js';

//const middleware = applymiddleware(logger());

export const store = createStore(twitsReducer,{});



