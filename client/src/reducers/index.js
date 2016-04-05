'use strict';

import {combineReducers} from 'redux';

import index from './indexFile';
import areas from './areas'

const rootReducer = combineReducers({
  index,
  areas
});

export default rootReducer;
