import {REQUEST_INDEXFILE, RECEIVE_INDEXFILE, INVALIDATE_INDEXFILE} from '../actions/indexFile';

export default function indexReducer(state = {
  isFetching: false,
  invalidated: false,
  areas: {}
}, action) {
  switch (action.type) {
    case REQUEST_INDEXFILE:
      return {
        ...state,
        isFetching: true,
        invalidated: false
      };

    case RECEIVE_INDEXFILE:
      let areas = action.data.reduce((prev, cur) => {
        return {
          ...prev,
          [cur.ID]: {
            name: cur.Name,
            floors: cur.Floors,
            type: cur.Type,
            lat: cur.Latitude,
            lng: cur.Longitude,
            street: cur.Street,
            year: cur.Year,
            vulnerability: cur.Vulnerability,
            seaLevel: cur.SeaLevel,
            id: cur.ID
          }
        }
      }, {});

      return {
        ...state,
        isFetching: false,
        invalidated: false,
        lastUpdated: action.receivedAt,
        areas
      };

    case INVALIDATE_INDEXFILE:
      return {
        ...state,
        invalidated: true
      };

    default:
      return state;
  }
}
