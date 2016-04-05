import fetch from 'isomorphic-fetch';

import {getArea} from '../api';

export const REQUEST_AREA = 'REQUEST_AREA';
export const RECEIVE_AREA = 'RECEIVE_AREA';
export const CHANGE_AREA = 'CHANGE_AREA';
export const CHANGE_AREA_FLOOR = 'CHANGE_AREA_FLOOR';

export function requestAreaData(areaId) {
  return {
    type: REQUEST_AREA,
    areaId
  }
}

export function receiveAreaData(areaId, data) {
  return {
    type: RECEIVE_AREA,
    areaId,
    data
  }
}

export function changeArea(areaId) {
  return {
    type: CHANGE_AREA,
    areaId
  }
}

export function changeAreaFloor(areaId, floor) {
  return {
    type: CHANGE_AREA_FLOOR,
    areaId,
    floor
  }
}

function fetchAreaData(areaId) {
  return (dispatch) => {
    dispatch(requestAreaData(areaId));
    return fetch(getArea(areaId))
      .then(req => req.json())
      .then(json => dispatch(receiveAreaData(areaId, json)));
  }
}

function shouldFetchAreaData(areaId, state) {
  const area = state.areas[areaId];

  if (!area)
    return true;
  else if (area.data && area.data.length === 0) // somehow interrupted?
    return true;
  else if (area.isFetching)
    return false;
}

export function fetchAreaDataIfNeeded(areaId) {
  return (dispatch, getState) => {
    if (shouldFetchAreaData(areaId, getState())) {
      return dispatch(fetchAreaData(areaId))
    }
  }
}
