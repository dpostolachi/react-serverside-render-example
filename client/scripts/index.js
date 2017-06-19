require('../styles/main.styl')

import React from 'react';

import {render} from 'react-dom';

import ReduxThunk from 'redux-thunk'

import { applyMiddleware, createStore } from 'redux'

import Promise from 'redux-promise-middleware'

import reducer from '../../reducers/combine.js'

import { BrowserRouter } from 'react-router-dom'

const preloadedState = window.__PRELOADED_STATE__

delete window.__PRELOADED_STATE__

const middleware = applyMiddleware(Promise(), ReduxThunk)

const Store = createStore(reducer, preloadedState, middleware)

import AppRouter from '../../routes/app-router.js';


render(<BrowserRouter><AppRouter Store={ Store } /></BrowserRouter>, document);
