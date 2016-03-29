import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from '../stores/configureStore';
import App from './App'

import {fetchIndexFileIfNeeded} from '../actions/indexFile';

const store = configureStore();

export default class Root extends Component {
  componentDidMount() {
    store.dispatch(fetchIndexFileIfNeeded());
  }

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}
