import {
  RECEIVE_HELP,
  REQUEST_HELP,
  SHOW_HELP,
  HIDE_HELP,
  CHANGE_HELP
} from '../actions/help';

import update from 'react-addons-update';

export default function helpReducer(state = {
  isFetching: false,
  data: {},
  modal: {
    open: false,
    type: ''
  }
}, action) {
  switch (action.type) {
    case REQUEST_HELP:
      return {
        ...state,
        isFetching: true
      }

    case RECEIVE_HELP:
      let data = action.data.reduce((prev, cur) => {
        return {
          ...prev,
          [cur.Type]: cur.Description
        }
      }, {});

      return {
        ...state,
        isFetching: false,
        data
      }

    case SHOW_HELP:
      return update(state, {
        modal: {
          open: {$set: true}
        }
      })

    case HIDE_HELP:
      return update(state, {
        modal: {
          open: {$set: false}
        }
      })

    case CHANGE_HELP:
      return update(state, {
        modal: {
          type: {$set: action.vulnerability}
        }
      })

    default:
      return state
  }
}
