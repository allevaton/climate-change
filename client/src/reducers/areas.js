import {
  REQUEST_AREA,
  RECEIVE_AREA,
  CHANGE_AREA,
  CHANGE_AREA_FLOOR
} from '../actions/area';

import update from 'react-addons-update';

export default function areasReducer(state = {
  selectedArea: ''
}, action) {
  switch (action.type) {
    case REQUEST_AREA:
      return {
        ...state,
        [action.areaId]: {
          isFetching: true,
          data: [],
          selectedFloor: ''
        }
      }

    case RECEIVE_AREA:
      let selectedFloor = '';
      if (action.data.results[0] && action.data.results[0]['Floor Level'])
        selectedFloor = action.data.results[0]['Floor Level'];

      return {
        ...state,
        [action.areaId]: {
          isFetching: false,
          data: action.data.results,
          description: action.data.description,
          selectedFloor
        }
      }

    case CHANGE_AREA:
      return {
        ...state,
        selectedArea: action.areaId
      }

    case CHANGE_AREA_FLOOR:
      let areaData = state[action.areaId];
      return {
        ...state,
        [action.areaId]: {
          ...areaData,
          selectedFloor: action.floor
        }
      }

    default:
      return state
  }
}
