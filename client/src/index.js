import 'core-js/fn/object/assign';

import React from 'react';
import {render} from 'react-dom';
import Root from './containers/Root';

//require('normalize.css');

require('bootstrap-webpack!../bootstrap.config.js');
require('react-bootstrap-modal/lib/styles/rbm-complete.css')

// Render the main component into the dom
render(<Root/>, document.getElementById('root'))
