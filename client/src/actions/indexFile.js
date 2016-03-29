import fetch from 'isomorphic-fetch';

import {indexFile} from '../api';

export const REQUEST_INDEXFILE = 'REQUEST_INDEXFILE';
export const RECEIVE_INDEXFILE = 'RECEIVE_INDEXFILE';
export const INVALIDATE_INDEXFILE = 'INVALIDATE_INDEXFILE';

export function requestIndexFile() {
  return {
    type: REQUEST_INDEXFILE
  }
}

export function receiveIndexFile(data) {
  return {
    type: RECEIVE_INDEXFILE,
    receivedAt: Date.now(),
    data
  }
}

export function invalidateIndexFile() {
  return {
    type: INVALIDATE_INDEXFILE
  }
}

function fetchIndexFile() {
  return (dispatch) => {
    dispatch(requestIndexFile());
    return fetch(indexFile())
      .then(req => req.json())
      .then(json => dispatch(receiveIndexFile(json)));
  }
}

function shouldFetchIndexFile(state) {
  const index = state.index;
  if (index.areas && Object.keys(index.areas).length === 0) {
    return true;
  } else if (index.isFetching) {
    return false;
  } else {
    return index.invalidated;
  }
}

export function fetchIndexFileIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchIndexFile(getState())) {
      return dispatch(fetchIndexFile());
    }
  }
}
