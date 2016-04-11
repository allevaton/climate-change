'use strict';

import {combineReducers} from 'redux';

import index from './indexFile';
import areas from './areas'
import help from './help';

const rootReducer = combineReducers({
  index,
  areas,
  help
});

export default rootReducer;
