import fetch from 'isomorphic-fetch';

import {getHelp} from '../api';

export const REQUEST_HELP = 'REQUEST_HELP';
export const RECEIVE_HELP = 'RECEIVE_HELP';
export const SHOW_HELP = 'SHOW_HELP';
export const HIDE_HELP ='HIDE_HELP';
export const CHANGE_HELP = 'CHANGE_HELP';

export function requestHelp() {
  return {
    type: REQUEST_HELP
  }
}

export function receiveHelp(data) {
  return {
    type: RECEIVE_HELP,
    data
  }
}

export function showHelp() {
  return {
    type: SHOW_HELP
  }
}

export function hideHelp() {
  return {
    type: HIDE_HELP
  }
}

export function changeHelp(vulnerability) {
  return {
    type: CHANGE_HELP,
    vulnerability
  }
}

function fetchHelp() {
  return (dispatch) => {
    dispatch(requestHelp());
    return fetch(getHelp())
      .then(req => req.json())
      .then(json => dispatch(receiveHelp(json)));
  }
}

function shouldFetchHelp(state) {
  const help = state.help;
  if (!help.data) {
    return true;
  } else if (help.isFetching) {
    return false;
  } else {
    return true;
  }
}

export function fetchHelpIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchHelp(getState())) {
      return dispatch(fetchHelp());
    }
  }
}
